<script setup lang="ts">

</script>

<template>
    <div class="root">
        <a-layout style="height: 400px;">
            <a-layout-header>
                Header
            </a-layout-header>
            <a-layout-content>
                Content
            </a-layout-content>
            <a-layout-footer>
                Footer
            </a-layout-footer>
        </a-layout>
    </div>
</template>

<style scoped>
    .root{
        background-color: #fff;
        color: #191919;
        z-index: 99;
        min-height: 100vh;
    }
</style>