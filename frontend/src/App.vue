<template>
    <div id="app">
        <header></header>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
        };
    },
};
</script>

<style>
    body {
        margin: 0;
    }

    .fleft {
        float: left;
    }

    .fright {
        float: right;
    }

    .clearfix::after {
        display: block;
        content: '';
        clear: both;
    }
</style>

<style scoped>
    #app {
        min-width: 1200px;
        padding-top: 70px;
    }
</style>
