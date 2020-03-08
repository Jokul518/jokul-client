<template>
    <div class="menu-nav" :style="{background:bgColor}">
        <div class="menu" :style="{background:menuBgColor}">
            <router-link
                :class="{'menu-item':true,'active-menu':currentMenu==item.to}"
                :to="item.to"
                v-for="(item,index) in menuList"
                :key="index"
                @click.native="switchMenu(item)"
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
    data() {
        return {
            currentMenu: this.$router.history.current.name || "home",
            bgColor: "#f5f5f5", // 整个背景
            routerBgColor: "#f5f5f5", // 路由背景颜色
            menuTitleColor: "#666", // 菜单字体颜色
            menuBgColor: "white", // 菜单背景颜色
            routes: [],
            menuList: [
                {
                    to: "home",
                    iconfont: "icon-yemian-copy-copy-copy",
                    routerBgColor: "#f5f5f5",
                    menuBgColor: "white"
                },
                {
                    to: "category",
                    iconfont: "icon-icon_type",
                    routerBgColor: "red",
                    menuBgColor: "red"
                },
                {
                    to: "timeline",
                    iconfont: "icon-shijianzhou",
                    routerBgColor: "blue",
                    menuBgColor: "blue"
                },
                {
                    to: "about",
                    iconfont: "icon-guanyu",
                    routerBgColor: "green",
                    menuBgColor: "green"
                },
                {
                    to: "write",
                    iconfont: "icon-shuxie",
                    routerBgColor: "black",
                    menuBgColor: "black"
                }
            ]
        };
    },
    methods: {
        // 动态赋值iconfont
        getIconfontClass(iconfont) {
            return `iconfont ${iconfont}`;
        },
        switchMenu(item) {
            this.currentMenu = item.to;
            this.routerBgColor =
                item.color == "#f5f5f5" ? "black" : item.routerBgColor;
            setTimeout(() => {
                this.menuBgColor = item.menuBgColor;
                this.bgColor = this.routerBgColor;
                this.menuTitleColor =
                    this.menuBgColor == "white" ? "black" : "white";
            }, 600);
        }
    }
};
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