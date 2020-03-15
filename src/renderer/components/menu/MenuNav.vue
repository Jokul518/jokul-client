<template>
    <div class="menu-nav" :style="{background:bgColor}">
        <div class="menu" :style="{background:menuBgColor}">
            <router-link
                :class="{'menu-item':true,'active-menu':currentMenu==item.to}"
                :to="item.to"
                v-for="(item,index) in menuList"
                :key="index"
                @click.native="switchMenu(item,index)"
            >
                <span :class="getIconfontClass(item.iconfont)" :style="{color:menuTitleColor}"></span>
            </router-link>
        </div>
        <transition name="slide-fade">
            <router-view class="container" :style="{background:routerBgColor}"></router-view>
        </transition>
    </div>
</template>
<script>
export default {
    name: "menu-nav",
    props: ["value", "menuList"],
    props: {
        value: Number,
        menuList: Array
    },
    data() {
        return {
            currentMenu: this.$router.history.current.name || "home",
            routes: [],
            bgColor: this.menuList[this.value].routerBgColor, // 整个背景
            routerBgColor: this.menuList[this.value].routerBgColor, // 路由背景颜色
            menuTitleColor: this.menuList[this.value].color, // 菜单字体颜色
            menuBgColor: this.menuList[this.value].menuBgColor // 菜单背景颜色
        };
    },
    created() {
        // console.warn(this.value);
    },
    methods: {
        // 动态赋值iconfont
        getIconfontClass(iconfont) {
            return `iconfont ${iconfont}`;
        },
        switchMenu(item, index) {
            this.$emit("input", index);
            this.currentMenu = item.to;
            this.routerBgColor = item.routerBgColor;
            setTimeout(() => {
                this.menuBgColor = item.menuBgColor;
                this.bgColor = item.routerBgColor;
                this.menuTitleColor = item.color;
            }, 600);
        }
    }
};
// bgColor: "#f5f5f5", // 整个背景
// routerBgColor: "#f5f5f5", // 路由背景颜色
// menuTitleColor: "#666", // 菜单字体颜色
// menuBgColor: "white", // 菜单背景颜色
// menuList: [
//     {
//         to: "home",
//         iconfont: "icon-yemian-copy-copy-copy",
//         routerBgColor: "#f5f5f5",
//         color:"#666",
//         menuBgColor: "white"
//     },
//     {
//         to: "category",
//         iconfont: "icon-icon_type",
//         routerBgColor: "#5B9279",
//         color:"black",
//         menuBgColor: "#5B9279"
//     },
//     {
//         to: "timeline",
//         iconfont: "icon-shijianzhou",
//         routerBgColor: "#8FCB9B",
//         color:"black",
//         menuBgColor: "#8FCB9B"
//     },
//     {
//         to: "about",
//         iconfont: "icon-guanyu",
//         routerBgColor: "#12130F",
//         color:"black",
//         menuBgColor: "#12130F"
//     },
//     {
//         to: "write",
//         iconfont: "icon-shuxie",
//         routerBgColor: "#EAE6E5",
//         color:"black",
//         menuBgColor: "#EAE6E5"
//     }
// ]
</script>

<style lang="scss" scoped>
.menu-nav {
    height: 100vh;
    position: relative;
    overflow: hidden;
    display: flex;
    transition: background 0.8s;

    .menu {
        width: 80px;
        background: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: background 0.8s, color 0.8s;

        .menu-item {
            text-decoration: none;
            display: block;
            width: 100%;
            height: 60px;
            text-align: center;
            line-height: 60px;

            span {
                font-size: 22px;
                display: block;

                transition: font-size 0.3s, opacity 1s;

                &:hover {
                    opacity: 0.5;
                }
            }
        }
        .active-menu {
            span {
                font-size: 36px;
                &:hover {
                    opacity: 1;
                }
            }
        }
    }
    .container {
        flex: 1;
    }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
     height: 100vh;
     will-change: transform;
     transition: all 500ms;
     position: absolute;
     backface-visibility: hidden;
     perspective: 1000;
}

.slide-fade-enter {
    animation-delay: 0.8s;
    transform: translateX(100vw);
}
.slide-fade-enter-active {
    transition: all 0.8s ease;
}
</style>
