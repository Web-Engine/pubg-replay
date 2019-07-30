<template>
    <div class="ReplayPage">
        <div class="ui">
            ui
        </div>
        <div class="replay">
            replay
        </div>
    </div>
</template>

<script>
export default {
    name: 'ReplayPage',
    data() {
        return {};
    },
};
</script>

<style scoped>
    .fleft {
        float: left;
    }

    .clearfix::after {
        display: block;
        content: "";
        clear: both;
    }

    .ReplayPage {
        margin: 50px 100px;
        text-align: center;
    }

    .ui {
        display: inline-block;
        box-sizing: border-box;
        border: 1px solid #aaaaaa;
        border-radius: 5px;
        margin-bottom: 5px;
        width: 550px;
        height: 45px;
    }

    .replay {
        display: inline-block;
        box-sizing: border-box;
        border: 1px solid #aaaaaa;
        border-radius: 5px;
        width: 550px;
        height: 550px;
    }
</style>
