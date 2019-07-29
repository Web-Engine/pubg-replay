<template>
    <div class="IndexPage">
        <form>
            <Select name="platform" title="Platform" :options="platforms"></Select>
            <input type="text" name="player-name" placeholder="Player Name">

            <button type="submit">SEARCH</button>
        </form>
    </div>
</template>

<script>
import Select from './../components/forms/Select.vue';

export default {
    name: 'IndexPage',
    components: { Select },
    data() {
        return {
            platforms: [
                {
                    value: 'steam',
                    text: 'STEAM',
                },
                {
                    value: 'xbox',
                    text: 'XBOX',
                },
                {
                    value: 'kakao',
                    text: 'KAKAO',
                },
            ],
        };
    },
};
</script>

<style scoped>
    .IndexPage {
        padding: 300px 0;
    }

    .IndexPage form {
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 30px;
    }
</style>
