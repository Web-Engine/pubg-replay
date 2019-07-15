<template>
    <div id="app">
        <header>
            <div class="layout-width clearfix">
                <h1 class="fleft"><a href="/">Main</a></h1>

                <nav class="fright">
                    <ul class="clearfix">
                        <li class="fleft" v-for="menu in menus" :key="menu.path">
                            <router-link :to="menu">{{ menu.text }}</router-link>
                        </li>
                    </ul>

                </nav>
            </div>
        </header>
        <div class="layout-width">
            <main>
                    <router-view></router-view>
            </main>

            <footer>

            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            menus: [
                {
                    path: '/search',
                    text: 'Search'
                },
            ],
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

    .layout-width {
        width: 1200px;
        margin: 0 auto;
    }

    header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 70px;
        background: 0;
        box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.3);
        background: #f7f7f7;
    }

    header h1 {
        margin: 0;
        font-size: 1rem;
    }

    header h1 a {
        display: block;
        color: #444;
        text-decoration: none;
        height: 70px;
        line-height: 70px;
        padding: 0 20px;
    }

    header nav ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    header nav ul li a {
        display: block;
        color: #444;
        text-decoration: none;
        height: 70px;
        line-height: 70px;
        padding: 0 20px;
    }

    main {
        padding: 20px;
    }

    footer {

    }
</style>
