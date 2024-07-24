

<template>
    <div id="app">
        <headerView></headerView>
        <main>
            <router-view/>
        </main>
        <footerView></footerView>
    </div>
</template>

<script setup>
import headerView from "./views/headerView/headerView.vue";
import footerView from "./views/footerView/footerView.vue";
</script>

<style scoped>
</style>
