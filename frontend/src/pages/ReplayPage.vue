<template>
    <div class="ReplayPage">
        <div class="ui">
            ui
        </div>
        <div class="clearfix">
            <div class="replay fleft">
                replay
            </div>
            <div class="killLog fleft">
                kill log
            </div>
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
    }
</style>
