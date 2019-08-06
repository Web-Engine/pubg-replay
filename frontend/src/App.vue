<template>
    <v-app>
        <v-app-bar app>
            <v-toolbar-title>Replay</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <v-slider min="0" max="3302123" thumb-size="60">
                <template #thumb-label="currentTime">
                    {{ timeFormat(currentTime.value) }}
                </template>
            </v-slider>

            <v-slider min="1" max="30" thumb-size="40">
                <template #thumb-label="speed">
                    x{{ speed.value }}
                </template>
            </v-slider>

        </v-content>
    </v-app>
</template>

<script>
export default {
    name: 'App',
    components: {},
    methods: {
        timeFormat: time => {
            let milliseconds = time % 1000;
            let seconds = Math.floor(time / 1000);

            let minutes = Math.floor(seconds / 60);
            seconds %= 60;

            milliseconds = Math.floor(milliseconds / 100);
            seconds = seconds.toString().padStart(2, '0');
            minutes = minutes.toString().padStart(2, '0');

            return `${minutes}:${seconds}.${milliseconds}`;
        },
    },
    data: () => ({

    }),
};
</script>
