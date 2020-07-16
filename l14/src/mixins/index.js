import axios from 'axios'
import Vue from 'vue'

Vue.mixin({
    methods: {
        $get(url, params) {
            return axios.get(url, {
                params
            })
        },
        $post(url, data) {
            return axios.post(url, data)
        }
    },

})