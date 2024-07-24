<template src="./headerView.html"></template>
<style src="./headerView.css"></style>
<script>
    export default {
        name: "headerViews",
        components: {
            
        },
        data(){
            return {
                open: false,
                close: true
            }
        },
        methods: {
            openNav(){
                const headerEl = document.querySelector(".header");
                headerEl.classList.toggle("nav-open")
                this.open = !this.open
                this.close = !this.close
            },
            closeNav(){
                const headerEl = document.querySelector(".header");
                headerEl.classList.toggle("nav-open")
                this.open = !this.open
                this.close = !this.close
            },
        },
    }
</script>

<style scoped>
.displayNone {
    display: none;
}
</style>