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
            this.$http({
                method: 'post',
                url: '/configitem/queryItemsByConfigId/12/',
                data: {}
            }).then(response => {
                console.log('response', response);
            });
        }
    }
</script>

<style scoped>

</style>
