<template>
    <v-app>
        <v-app-bar app>
            <v-toolbar-title>Replay</v-toolbar-title>

            <v-spacer />

            <v-toolbar-items>
                <v-btn text @click="onClickLoadData">Load data</v-btn>
                <!--<v-btn text @click="onClickDownloadData">Download data</v-btn>-->
            </v-toolbar-items>

            <input class="hidden" type="file" ref="file" @change="onFileChange" />
        </v-app-bar>

        <v-content>
            <split-pane split-to="columns" @update:size="onResize" :allow-resize="true" :size="50" units="percents" :resizerThickness="10" :resizerBorderThickness="5" resizerBorderColor="rgba(0, 0, 0, 0.5)">
                <template slot="firstPane">
                    <v-container>
                        <v-layout>
                            <v-flex>
                                <v-responsive :aspect-ratio="1">
                                    <div ref="replay" id="replay"></div>
                                    <v-layout class="zoom-controller" column>
                                        <v-flex>
                                            <v-btn class="zoom-button zoom-plus" small @click="addZoom">
                                                <v-icon>mdi-plus</v-icon>
                                            </v-btn>
                                        </v-flex>
                                        <v-flex>
                                            <v-btn class="zoom-button zoom-minus" small @click="subtractZoom">
                                                <v-icon>mdi-minus</v-icon>
                                            </v-btn>
                                        </v-flex>
                                    </v-layout>
                                </v-responsive>
                            </v-flex>
                        </v-layout>

                        <v-layout>
                            <v-flex xs11>
                                <v-slider min="0" :max="duration" thumb-size="60" v-model="currentTime">
                                    <template #thumb-label="currentTime">
                                        {{ timeFormat(currentTime.value) }}
                                    </template>

                                    <template #prepend>
                                        <v-icon @click="togglePlayState">
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
                    </v-container>
                </template>
                <template slot="secondPane">
                    <v-jsoneditor class="json-editor" v-model="data" :plus="false" />
                </template>
            </split-pane>
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: 'App',
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

        togglePlayState() {
            if (!this.minimap) return;

            if (this.minimap.isPlaying) {
                this.minimap.stop();
            }
            else {
                this.minimap.start();
            }
        },

        onPlayStateChange() {
            this.isPlaying = this.minimap.isPlaying;
        },

        onCurrentTimeChange() {
            this.currentTime = this.minimap.currentTime;
        },

        onResize() {
            if (!this.$refs.replay) return;
            if (!this.minimap) return;

            this.minimap.width = this.$refs.replay.offsetWidth;
            this.minimap.height = this.$refs.replay.offsetHeight;
        },

        onClickLoadData() {
            this.$refs.file.click();
        },

        onFileChange() {
            let files = this.$refs.file.files;
            if (!files.length) return;

            let reader = new FileReader();
            reader.onload = e => {
                let result = e.target.result;

                try {
                    let json = JSON.parse(result);
                    this.onLoadData(json);
                }
                catch (err) {
                    alert('JSON parse failed.');
                }
            };

            reader.readAsText(files[0]);
        },

        onClickDownloadData() {

        },

        onLoadData(data) {
            this.clearMinimap();

            this.data = data;

            this.minimap = new Replay.Minimap(data);
            this.minimap.mount(this.$refs.replay);
            this.onResize();

            this.minimap.on('currentTimeChange', this.onCurrentTimeChange);
            this.minimap.on('playStateChange', this.onPlayStateChange);

            this.isPlaying = this.minimap.isPlaying;
            this.currentTime = this.minimap.currentTime;
            this.speed = this.minimap.speed;
            this.duration = this.minimap.duration;

            window.addEventListener('resize', this.onResize);
        },

        clearMinimap() {
            if (!this.minimap) return;
            this.$refs.replay.innerHTML = '';

            this.minimap.off('currentTimeChange', this.onCurrentTimeChange);
            this.minimap.off('playStateChange', this.onPlayStateChange);
            window.removeEventListener('resize', this.onResize);

            this.minimap = null;
        },

        addZoom() {
            this.minimap.zoom += 1;
        },

        subtractZoom() {
            this.minimap.zoom -= 1;
        },
    },
    watch: {
        currentTime () {
            this.minimap.currentTime = this.currentTime;
        },

        speed () {
            this.minimap.speed = this.speed;
        },
    },
    data() {
        return {
            isPlaying: false,
            currentTime: 0,
            speed: 1,
            duration: 1,
            data: {
                assets: {
                    'background': '',
                },
                game: {
                    width: 1000,
                    height: 1000,
                    background: {
                        image: 'background',
                    },
                },
                characters: [],
                objects: [],
                attacks: [],
            },
        };
    },
    created() {
    },
    mounted() {
    },
    destroyed() {
        this.clearMinimap();
    },
};
</script>

<style>
    #replay {
        position: relative;
        width: 100%;
        height: 100%;
        background: #000;
    }

    #replay canvas {
        position: absolute;
        left: 0;
        top: 0;
        display: block;
    }

    .hidden {
        display: none;
    }
</style>

<style scoped>
    .layout-width {
        max-width: 80vh;
    }

    .zoom-controller {
        position: absolute;
        right: 10px;
        bottom: 10px;
    }

    .json-editor {
        width: 100%;
        height: 100%;
    }
</style>
