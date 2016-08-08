<style>
    #app2 {
        color: deeppink;
        font-size: 24px;
    }
</style>

<template>
    <div id="app2">{{ msg }}</div>
</template>

<script>
    export default {
        data: function () {
            return {
                msg: 'This is app2 demo!'
            }
        },

        created: function () {
            console.log('app2 created')
        }
    }
</script>