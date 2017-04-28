<template>
    <div>new product</div>
</template>

<script>
    export default {
        data () {
            return {}
        },
        mounted () {
            this.$http.post('/api/configitem/queryItemsByConfigId/12/4158/E26DDDFE38C10AE656F0C5BE6ACCF6CC')
                .then(response => {
                    console.log('response', response);
                })
                .catch(error => {
                    throw new Error(error);
                });
        }
    }
</script>

<style scoped>

</style>
