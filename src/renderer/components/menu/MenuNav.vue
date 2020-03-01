<template>
    <div class="menu-nav">
        <div class="menu">
            <router-link
                :class="{'menu-item':true,'active-menu':currentMenu==item.to}"
                :to="item.to"
                v-for="(item,index) in menuList"
                :key="index"
                @click.native="currentMenu = item.to"
            >
                <span :class="getIconfontClass(item.iconfont)"></span>
            </router-link>
        </div>
        <!-- <transition> -->
            <router-view class="container"></router-view>
        <!-- </transition> -->
    </div>
</template>
<script>
export default {
    name: "menu-nav",
    data() {
        return {
            currentMenu: "home",
            routes: [],
            transitionName: "slide-right",
            menuList: [
                {
                    to: "home",
                    iconfont: "icon-yemian-copy-copy-copy",
                    color: ""
                },
                {
                    to: "category",
                    iconfont: "icon-icon_type",
                    color: ""
                },
                {
                    to: "timeline",
                    iconfont: "icon-shijianzhou",
                    color: ""
                },
                {
                    to: "about",
                    iconfont: "icon-guanyu",
                    color: ""
                },
                {
                    to: "write",
                    iconfont: "icon-shuxie",
                    color: ""
                }
            ]
        };
    },
    watch: {
        $route(to, from) {
            if (this.routes.includes(to.name)) {
                this.routes.splice(this.routes.indexOf(to.name), 1);
            }
            this.routes.push(to.name);

            const toDepth = this.routes.indexOf(to.path);
            const fromDepth = this.routes.indexOf(from.path);
            this.transitionName =
                toDepth < fromDepth ? "slide-left" : "slide-right";
        }
    },
    created() {
        this.currentMenu = this.$router.history.current.name;
    },
    methods: {
        // 动态赋值iconfont
        getIconfontClass(iconfont) {
            return `iconfont ${iconfont}`;
        }
    }
};
</script>

<style lang="scss" scoped>
.menu-nav {
    height: 100vh;
    display: flex;

    .menu {
        width: 80px;
        background: black;
        display: flex;
        flex-direction: column;
        justify-content: center;

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
                color: white;
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
 
// .slide-left-enter-active {
//     transition: all 0.1s ease;
// }
 

// .slide-left-enter-active {
//     transition: all 0.3s ease;
// }
// .slide-left-leave-active {
//     transition: all 0.8s ease;
// }
// .slide-left-enter,
// .slide-fade-leave-active {
//     transform: translateX(100%);
//     opacity: 0;
// }
// .slide-left-leave-to {
//     transform: translateX(-100%);
//     opacity: 0;
// }

// .slide-right-enter-active {
//     transition: all 0.3s ease;
// }
// .slide-right-leave-active {
//     transition: all 0.8s ease;
// }
// .slide-right-enter,
// .slide-fade-leave-active {
//     transform: translateX(-100%);
//     opacity: 0;
// }
// .slide-right-leave-to {
//     transform: translateX(100%);
//     opacity: 0;
// }
</style>