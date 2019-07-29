<template>
    <div class="IndexPage">
        <a href="http://localhost:8080"><img class="image" src="../../images/playerunknown's battlegrounds.png" alt="playerunknown's battlegrounds image"></a>
        <form>
            <Select class="select" name="platform" title="Platform" :options="platforms"></Select>
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
        padding: 80px 200px 200px;
    }

    .IndexPage .image {
        width: 800px;
        height: 300px;
    }

    .IndexPage form {
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 10px;
        text-align: center;
    }

    .IndexPage .select {
        vertical-align: middle;
    }

    .IndexPage form input {
        display: inline-block;
        vertical-align: middle;
        box-sizing: border-box;
        margin-left: 15px;
        padding: 6px 0 6px 10px;
        font-size: 16px;
        width: 400px;
        height: 44px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }

    .IndexPage form button {
        display: inline-block;
        vertical-align: middle;
        margin-left: 15px;
        width: 110px;
        height: 44px;
        border: none;
        border-radius: 4px;
        background: #00a4fc;
        color: white;
        transition: background-color 0.5s ease;
    }

    .IndexPage form button:hover,
    .IndexPage form button:focus {
        background: #a100a1;
    }
</style>
