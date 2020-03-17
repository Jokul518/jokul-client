<template>
    <div class="blog-list">
        <div class="times">{{item.uploadDate}}</div>
        <h2 class="title">{{item.title}}</h2>
        <div class="tags">{{item.tags}}</div>
        <div class="ruler">{{getRuler}}</div>
    </div>
</template>
<script>
export default {
    name: "blog-list",
    props: {
        item: Object
    },
    computed: {
        getRuler() {
            return this.item.ruler.length > 100
                ? this.item.ruler.slice(0, 100) + "..."
                : this.item.ruler;
        }
    }
};
</script>
<style lang="scss" scoped>
.blog-list {
    margin-top: 20px;
    margin-bottom: 40px;
    cursor: pointer;
    overflow: hidden;
    text-align: left;
    .times {
        clear: left;
        font-size: 11px;
        line-height: 17px;
        margin-left: 6px;
        color: #b1b3b5;
    }
    .title {
        color: #424344;
        margin-bottom: 10px;
    }

    .tags {
        color: #7da6b8;
        font-size: 12px;
        margin-left: 3px;
    }
    .ruler {
        font-size: 14px;
        clear: left;
        margin-top: 4px;
        line-height: 17px;
        color: #333;
        margin-left: 5px;
    }
}
</style>