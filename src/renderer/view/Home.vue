<template>
    <div class="home">
        <h1>Welcome to Jokul!</h1>
        <div class="container" :style="{width:`${getBoxWidth}px`}">
            <div class="check-showtype">
                <span class="iconfont icon-th-large-copy" @click="checkShowType(true)"></span>
                <span class="iconfont icon-liebiao01" @click="checkShowType(false)"></span>
            </div>
            <div v-if="showType" class="item-box" :style="{width:`${getBoxWidth}px`}">
                <blog-item v-for="(item,index) in blogList" :key="index" :item="item"></blog-item>
            </div>
            <div v-if="!showType" class="list-box">
                <blog-list v-for="(item,index) in blogList" :key="index" :item="item"></blog-list>
            </div>
        </div>
        <div class="get-more" @click="getMore">加载更多...</div>
    </div>
</template>
<script>
import BlogItem from "../components/home/BlogItem";
import BlogList from "../components/home/BlogList";
export default {
    name: "home",
    components: {
        "blog-item": BlogItem,
        "blog-list": BlogList
    },
    data() {
        return {
            screenWidth: document.body.clientWidth,
            showType: false,
            limit: 6,
            page: 1,
            blogList: [
                {
                    imgUrl:
                        "https://pic1.zhimg.com/80/v2-4c649c463be510d72e883cf8ea260374_1440w.jpg",
                    title: "前端那些事儿",
                    ruler: "FIS、Webpack、Gulp、Grount、RollupFIS、Webpack、Gulp、Grount、RollupFIS、Webpack、Gulp、Grount、RollupFIS、Webpack、Gulp、Grount、RollupFIS、Webpack、Gulp、Grount、Rollup",
                    tag: "性能优化",
                    uploadDate: "2020-03-03 16:22:43"
                },
                {
                    imgUrl:
                        "https://pic1.zhimg.com/80/v2-4c649c463be510d72e883cf8ea260374_1440w.jpg",
                    title: "前端那些事儿",
                    ruler: "FIS、Webpack、Gulp、Grount、Rollup",
                    tag: "工程化",
                    uploadDate: "2020-03-03 16:22:43"
                },
                {
                    imgUrl:
                        "https://pic1.zhimg.com/80/v2-4c649c463be510d72e883cf8ea260374_1440w.jpg",
                    title: "前端那些事儿",
                    ruler: "FIS、Webpack、Gulp、Grount、Rollup",
                    tag: "工程化",
                    uploadDate: "2020-03-03 16:22:43"
                },
                {
                    imgUrl:
                        "https://pic1.zhimg.com/80/v2-4c649c463be510d72e883cf8ea260374_1440w.jpg",
                    title: "前端那些事儿",
                    ruler: "FIS、Webpack、Gulp、Grount、Rollup",
                    tag: "工程化",
                    uploadDate: "2020-03-03 16:22:43"
                },
                {
                    imgUrl:
                        "https://pic1.zhimg.com/80/v2-4c649c463be510d72e883cf8ea260374_1440w.jpg",
                    title: "前端那些事儿",
                    ruler: "FIS、Webpack、Gulp、Grount、Rollup",
                    tag: "工程化",
                    uploadDate: "2020-03-03 16:22:43"
                },
                {
                    imgUrl:
                        "https://pic1.zhimg.com/80/v2-4c649c463be510d72e883cf8ea260374_1440w.jpg",
                    title: "前端那些事儿",
                    ruler: "FIS、Webpack、Gulp、Grount、Rollup",
                    tag: "工程化",
                    uploadDate: "2020-03-03 16:22:43"
                },
                {
                    imgUrl:
                        "https://pic1.zhimg.com/80/v2-4c649c463be510d72e883cf8ea260374_1440w.jpg",
                    title: "前端那些事儿",
                    ruler: "FIS、Webpack、Gulp、Grount、Rollup",
                    tag: "工程化",
                    uploadDate: "2020-03-03 16:22:43"
                },
                {
                    imgUrl:
                        "https://pic1.zhimg.com/80/v2-4c649c463be510d72e883cf8ea260374_1440w.jpg",
                    title: "前端那些事儿",
                    ruler: "FIS、Webpack、Gulp、Grount、Rollup",
                    tag: "工程化",
                    uploadDate: "2020-03-03 16:22:43"
                },
                {
                    imgUrl:
                        "https://pic1.zhimg.com/80/v2-4c649c463be510d72e883cf8ea260374_1440w.jpg",
                    title: "前端那些事儿",
                    ruler: "FIS、Webpack、Gulp、Grount、Rollup",
                    tag: "工程化",
                    uploadDate: "2020-03-03 16:22:43"
                },
                {
                    imgUrl:
                        "https://pic1.zhimg.com/80/v2-4c649c463be510d72e883cf8ea260374_1440w.jpg",
                    title: "前端那些事儿",
                    ruler: "FIS、Webpack、Gulp、Grount、Rollup",
                    tag: "工程化",
                    uploadDate: "2020-03-03 16:22:43"
                },
                {
                    imgUrl:
                        "https://pic1.zhimg.com/80/v2-4c649c463be510d72e883cf8ea260374_1440w.jpg",
                    title: "前端那些事儿",
                    ruler: "FIS、Webpack、Gulp、Grount、Rollup",
                    tag: "工程化",
                    uploadDate: "2020-03-03 16:22:43"
                }
            ]
        };
    },
    mounted() {
        const that = this;
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth;
                that.screenWidth = window.screenWidth;
            })();
        };

        console.log(this.screenWidth);
    },
    computed: {
        getBoxWidth() {
            return Math.floor((this.screenWidth - 80 - 60) / 322) * 322;
        }
    },
    watch: {
        screenWidth(val) {
            if (!this.timer) {
                this.screenWidth = val;
                this.timer = true;
                let that = this;
                setTimeout(function() {
                    that.timer = false;
                }, 400);
            }
        }
    },
    methods: {
        checkShowType(flag) {
            this.showType = flag;
        },
        getMore() {
            this.blogList.push(...this.blogList);
        }
    }
};
</script>
<style lang="scss" scoped>
.home {
    height: 100vh;
    background: black;
    color: yellowgreen;
    text-align: center;
    overflow: auto;
    padding-top: 30px;
    box-sizing: border-box;
    padding-bottom: 30px;

    .container {
        padding: 0 30px;
        margin: 0 auto;
    }
    .item-box {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .list-box {
        padding-left: 40px;
        padding-top: 40px;
    }
    .check-showtype {
        width: 100%;
        padding-right: 10px;
        text-align: right;
        span {
            font-size: 18px;
            margin-left: 5px;
            color: #999;
            cursor: pointer;
        }
    }
    .get-more {
        color: #666;
        cursor: pointer;
        width: 150px;
        height: 30px;
        line-height: 30px;
        margin: 0 auto;
        border: solid 1px #f5f5f5;
        &:hover {
            // border: solid 1px rgb(200, 200, 200);
            border-color: rgb(200, 200, 200);
            transition: border-color 0.5s, color 0.5s;
            color: (200, 200, 200);
        }
    }
}
</style>