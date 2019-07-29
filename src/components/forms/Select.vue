<template>
    <div class="Select" :class="{ 'Selected--focus': focused }">
        <select ref="select" :name="name" :title="title" :value="value" @change="onChange" @focus="onFocus" @blur="onBlur">
            <option v-for="(option, index) in options" :value="option.value" :key="index">{{ option.text }}</option>
        </select>

        <div class="Select__text" @click="toggle">{{ selectedText }}</div>
        <div class="Select__options" :class="{ 'Select__options--show': showing }">
            <div class="Select__option" v-for="(option, index) in options" @click="onOptionClick(index)" :key="index">{{ option.text }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Select',
    props: {
        title: String,
        name: String,
        options: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        selected() {
            return this.options[this.selectedIndex] || null;
        },

        selectedText() {
            return this.selected ? this.selected.text : '';
        },

        value() {
            return this.selected ? this.selected.value : null;
        },
    },

    methods: {
        open() {
            this.showing = true;
        },

        close() {
            this.showing = false;
        },

        toggle() {
            this.showing = !this.showing;
        },

        onChange() {
            this.selectedIndex = this.$refs.select.selectedIndex;
        },

        onFocus() {
            this.focused = true;
        },

        onBlur() {
            this.focused = false;
        },

        onOptionClick(index) {
            this.selectedIndex = index;
        },
    },
    data() {
        return {
            focused: false,
            showing: false,
            selectedIndex: 0,
        };
    },
};
</script>

<style scoped>
    .Select {
        position: relative;
        display: inline-block;
    }

    .Select select {
        position: absolute;
        z-index: -1;
    }

    .Select__text {
        position: relative;
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 0 25px 0 10px;
        height: 30px;
        line-height: 30px;
        white-space: nowrap;
    }

    .Select__text::after {
        position: absolute;
        display: block;
        content: '';
        right: 5px;
        top: 50%;
        width: 0;
        height: 0;
        margin-top: -4px;
        border: 5px solid transparent;
        border-top: 8px solid #000;
        border-bottom: 0;
    }

    .Select--focus .Select__text {
        outline-offset: -2px;
        outline: -webkit-focus-ring-color auto 5px;
    }

    .Select__options {
        display: none;
        position: absolute;
        top: 100%;
        border: 1px solid #ddd;
        margin-top: -1px;
        min-width: 100%;
        background: #fff;
        border-radius: 4px;
        box-sizing: border-box;
    }

    .Select__option {
        padding: 5px 10px;
    }

    .Select__options--show {
        display: block;
    }
</style>
