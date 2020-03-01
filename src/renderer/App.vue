<template>
    <div id="app">
        <menu-nav />
    </div>
</template>

<script>
import MenuNav from "./components/menu/MenuNav";
export default {
    name: "my-project",
    components: {
        "menu-nav": MenuNav
    }
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
</style>
