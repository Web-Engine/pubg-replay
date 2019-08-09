<template>
    <v-app>
        <v-app-bar app>
            <v-toolbar-title>Replay</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <v-container>
                <v-layout justify-center>
                    <v-flex class="layout-width">
                        <v-layout>
                            <v-flex>
                                <v-responsive :aspect-ratio="1">
                                    <div ref="replay" id="replay"></div>
                                </v-responsive>
                            </v-flex>
                        </v-layout>

                        <v-layout>
                            <v-flex xs11>
                                <v-slider min="0" max="3302123" thumb-size="60" v-model="currentTime" @focus="">
                                    <template #thumb-label="currentTime">
                                        {{ timeFormat(currentTime.value) }}
                                    </template>

                                    <template #prepend>
                                        <v-icon @click="toggle">
                                            {{ isPlaying ? 'mdi-stop-circle-outline' : 'mdi-play-circle-outline' }}
                                        </v-icon>
                                    </template>
                                </v-slider>
                            </v-flex>
                            <v-flex xs1>
                                <v-slider ref="speed" min="1" max="30" thumb-size="40" v-model="speed">
                                    <template #thumb-label="speed">
                                        x{{ speed.value }}
                                    </template>
                                </v-slider>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: 'App',
    components: {},
    methods: {
        timeFormat(time) {
            let milliseconds = time % 1000;
            let seconds = Math.floor(time / 1000);

            let minutes = Math.floor(seconds / 60);
            seconds %= 60;

            milliseconds = Math.floor(milliseconds / 100);
            seconds = seconds.toString().padStart(2, '0');
            minutes = minutes.toString().padStart(2, '0');

            return `${minutes}:${seconds}.${milliseconds}`;
        },

        toggle() {
            this.isPlaying = !this.isPlaying;

            if (this.isPlaying) {
                this.minimap.start();
            }
            else {
                this.minimap.stop();
            }
        },

        onCurrentTimeChange() {
            this.currentTime = this.minimap.currentTime;
        }
    },
    watch: {
        currentTime () {
            this.minimap.currentTime = this.currentTime;
        }
    },
    data() {
        return {
            isPlaying: false,
            currentTime: 0,
            speed: 1,
        };
    },
    created() {
        this.minimap = new Replay.Minimap({
            assets: {
                'background': 'assets/maps/Erangel_Main_Low_Res.png',
            },
            game: {
                width: 1000,
                height: 1000,
                background: {
                    image: 'background',
                },
                duration: 1000000,
            },
            canvas: {
                width: 400,
                height: 400,
            },
            characters: [],
            ui: [],
            objects: [],
            attacks: [],
        });

        this.minimap.on('currentTimeChange', this.onCurrentTimeChange);
    },
    mounted() {
        this.minimap.mount(this.$refs.replay);
    },
    destroyed() {
        this.minimap.off('currentTimeChange', this.onCurrentTimeChange);
    },
};
</script>

<style scoped>
    #replay {
        width: 100%;
        height: 100%;
        background: #000;
    }

    .layout-width {
        max-width: 80vh;
    }
</style>
