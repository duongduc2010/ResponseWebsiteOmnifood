<template>
    <Icon :icon="icon" :height="height"></Icon>
</template>

<script>
    import { Icon } from '@iconify/vue'; 
    export default {
        components: {
            Icon
        },
        props: {
            icon: {
                type: String,
                required: true
            },
            height: {
                type: Number,
                default: 24
            }
        }
}
</script>

<style scoped>

</style>