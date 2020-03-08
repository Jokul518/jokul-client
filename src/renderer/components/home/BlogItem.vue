<template>
    <div class="blog-item">
        <div class="view" :style="{backgroundImage:'url('+item.imgUrl+')'}"></div>
        <div class="info-box">
            <p class="title ellipsis">
                《{{item.title}}》
                <span class="tag">{{item.tag}}</span>
            </p>
            <p class="time">{{item.uploadDate}}</p>

            <p class="ruler ellipsis">
                <em>含：</em>
                {{item.ruler}}等
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name: "blog-item",
    props: {
        item: Object
        // img: String,
        // title: String,
        // ruler: String,
        // tag: String
    }
};
</script>
<style lang="scss" scoped>
.blog-item {
    cursor: pointer;
    overflow: hidden;
    width: 300px;
    height: 253px;
    margin: 20px 10px;
    font-size: 0;
    background: -webkit-gradient(
        linear,
        0% 20%,
        0% 92%,
        from(#fff),
        to(#f3f3f3),
        color-stop(0.1, #fff)
    );
    border: 1px solid #ccc;
    -webkit-border-radius: 60px 5px; // 等价于下面四句
    // border-top-left-radius: 60px 5px;
    // border-top-right-radius: 60px 5px;
    // border-bottom-right-radius: 60px 5px;
    // border-bottom-left-radius: 60px 5px;
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.1) inset;
    &:hover {
        box-shadow: 0 3px 6px #ccc;
        overflow: hidden;
        border: 1px solid #dad8d8;
    }
    .view {
        width: 300px;
        height: 170px;
        float: left;
        position: relative;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.05);
        background: #999;
        perspective: 500px;
        background-size: 300px 170px;
        background-position: 0 0;
    }
    .info-box {
        padding: 0 15px 20px;
        font-size: 0;
        overflow: hidden;
        text-align: left;

        .title {
            display: inline-block;
            margin-top: 12px;
            font-size: 14px;
            line-height: 20px;
            color: #696a70;
            width: 270px;

            .tag {
                display: -webkit-inline-box;
                display: -webkit-inline-flex;
                display: inline-flex;
                -webkit-box-align: center;
                -webkit-align-items: center;
                background-color: #07c160;
                border-radius: 0 999px 999px 0;
                align-items: center;
                padding: 2px 8px 3px 6px;
                color: #fff;
                font-size: 10px;
                line-height: normal;
            }
        }
        .time {
            clear: left;
            font-size: 11px;
            line-height: 17px;
            color: #9a9a9a;
            margin-left: 6px;
        }
        .ruler {
            clear: left;
            margin-top: 4px;
            font-size: 12px;
            line-height: 17px;
            color: #9a9a9a;
            margin-left: 5px;
        }
    }
}

// 定义相关模块的颜色
.vue {
    background-color: #07c160;
}
</style>