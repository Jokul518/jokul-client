<template>
    <div id="app">
        <menu-nav v-model="current" :menuList="menuList" />
    </div>
</template>

<script>
import MenuNav from "./components/menu/MenuNav";
export default {
    name: "jokul-client",
    components: {
        "menu-nav": MenuNav
    },
 
    data() {
        return {
            current: 0,
            menuList: [
                {
                    to: "home",
                    iconfont: "icon-yemian-copy-copy-copy",
                    routerBgColor: "#f5f5f5",
                    color: "#666",
                    menuBgColor: "white"
                },
                {
                    to: "category",
                    iconfont: "icon-icon_type",
                    routerBgColor: "#5B9279",
                    color: "white",
                    menuBgColor: "#5B9279"
                },
                {
                    to: "timeline",
                    iconfont: "icon-shijianzhou",
                    routerBgColor: "#8FCB9B",
                    color: "white",
                    menuBgColor: "#8FCB9B"
                },
                {
                    to: "about",
                    iconfont: "icon-guanyu",
                    routerBgColor: "#12130F",
                    color: "white",
                    menuBgColor: "#12130F"
                },
                {
                    to: "write",
                    iconfont: "icon-shuxie",
                    routerBgColor: "#EAE6E5",
                    color: "#666",
                    menuBgColor: "#EAE6E5"
                }
            ]
        };
    }
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
</style>
