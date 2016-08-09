var Vue = require('vue')
var App = require('./components/app.vue')
var App2 = require('./components/app2.vue')

var main = new Vue({
    el: '#example',

    components: {
        app: App,
        app2: App2
    }
})