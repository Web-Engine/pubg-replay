<template>
    <div class="MatchesPage">
        <div class="playerName">
                player name
        </div>
        <div class="matchs clearfix">
            <div class="solo fleft">
                <div class="text" id="soloText">
                    <img src="../../images/User.png">
                    SOLO
                </div>
                <div class="data" id="soloData">
                    This player doesn't have a solo match
                </div>
            </div>
            <div class="duo fleft">
                <div class="text" id="duoText">
                    <img src="../../images/User.png">
                    <img src="../../images/User.png">
                    DUO
                </div>
                <div class="data" id="duoData">
                    This player doesn't have a duo match
                </div>
            </div>
            <div class="squad fleft">
                <div class="text" id="squadText">
                    <img src="../../images/User.png">
                    <img src="../../images/User.png">
                    <img src="../../images/User.png">
                    <img src="../../images/User.png">
                    SQUAD
                </div>
                <div class="data" id="squadData">
                    This player doesn't have a squad match
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MatchesPage',
    data() {
        return {};
    },
};
</script>

<style scoped>
    .fleft {
        float: left;
    }

    .clearfix {
        display: block;
        content: '';
        clear: both;
    }

    .MatchesPage {
    }

    .MatchesPage .playerName {
        box-sizing: border-box;
        margin: 10px 5px;
        height: 120px;
        font-size: 50px;
        text-align: center;
        background: #a6a6a6;
        color: white;
        line-height: 120px;
    }

    .matchs {
    }

    .matchs .text {
        box-sizing: border-box;
        margin: 0 5px;
        padding-left: 10px;
        width: 390px;
        height: 40px;
        font-size: 20px;
        line-height: 40px;
        color: white;
    }

    .matchs .text img {
        width: 20px;
        height: 20px;
    }

    .matchs #soloText {
        background: #ff9514;
    }

    .matchs #duoText {
        background: #16de59;
    }

    .matchs #squadText {
        background: #1979ff;
    }

    .matchs .data {
        box-sizing: border-box;
        margin: 0 5px 10px;
        padding: 10px;
        width: 390px;
        text-align: center;
        color: white;
    }

    .matchs #soloData {
        background: #ffbc75;
    }

    .matchs #duoData {
        background: #5be383;
    }

    .matchs #squadData {
        background: #77b7f7;
    }
</style>
