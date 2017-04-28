<template>
    <main-layout>
        <div>
            new product
        </div>
    </main-layout>
</template>

<script>
    import MainLayout from '@/components/common/MainLayout'
    export default {
        data () {
            return {}
        },
        components: {
            MainLayout
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
