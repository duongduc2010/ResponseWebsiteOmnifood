<template src="./home.html"></template>
<style src="./home.css">

</style>
<script>
    export default {
        name: "home",
        components: {
        },
        data(){
            return {

            }
        },
        mounted() {
            const sectionHeroEL = document.querySelector(".section-hero")
            const obs = new IntersectionObserver(
                function (entries) {
                    const ent = entries[0];
                    console.log(ent);
                    if(ent.isIntersecting === false){
                        document.body.classList.add("sticky")
                    }

                    if(ent.isIntersecting === true){
                        document.body.classList.remove("sticky")
                    }
                },
                {
                    root: null,
                    threshold: 0,
                    rootMargin: "-80px"
                }
            );

            obs.observe(sectionHeroEL)

        },
        methods: {
            link(){
                // let query = {
                //     name: "123"
                // }
                // let routeData = this.$router.resolve({"name": "listProducts",query: query})
                // window.open(routeData.href)
            }
        },
    }
</script>

