Vue.component("red", {
    // 无任何要求 传错不负责
    // props: ['size'],

    // 接收盗用者传递的参数
    props: {
        size: {
            type: String,
            // required: true
            default: "80px"
        }
    },
    // 模板
    template: `<div style="color: red;" :style="{fontSize: size}">
            <slot></slot>
            </div>`,
    data() {
        return {

        }
    },
    created() {

    },
    mounted() {
        // console.log(this.$parent.nickname);

    },
    watch: {

    },
    methods: {

    },
})