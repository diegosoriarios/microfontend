import Vue from 'vue'
import singleSpaVue from 'single-spa-vue'
import Hello from './main.vue'

const vueLifecycle = singleSpaVue({
    Vue,
    appOptions: {
        el: '#vue',
        render: r => r(Hello)
    }
})

export const bootstrap = [
    vueLifecycle.bootstrap
]

export const mount = [
    vueLifecycle.mount
]

export const unmount = [
    vueLifecycle.unmount
]