<template>
    <div class="fdata">
        <div class="ftext" v-for="(item, index) in fen" :key="index">
            <span>{{ item.one }}</span>
            <p>{{ item.two }}</p>
            <p>{{ item.three }}</p>
            <p>{{ item.four }}</p>
            <img :src="item.image" alt="" width="100px" height="100%">
        </div>
    </div>
</template>

<script>
export default {
    name: 'WorkspaceJsonFdata',

    data() {
        return {
            fen: [
                {
                    one: "精品小说",
                    two: "1.长相思(杨紫 张晚意 邓为)",
                    three: "2.剑来",
                    four: "3.三体(全集)",
                    image: "https://img.zcool.cn/community/0103885d5a1e34a80120695cef2665.jpg@1280w_1l_2o_100sh.jpg"
                },
                {
                    one: "历史",
                    two: "1.明朝那些事儿(全集)",
                    three: "2.长安的荔枝",
                    four: "3.中华上下五千年",
                    image: "https://img2.baidu.com/it/u=890633011,2811866994&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667"
                },
                {
                    one: "文学",
                    two: "1.我与地坛",
                    three: "2.红楼梦",
                    four: "3.平凡的世界",
                    image: "https://img1.baidu.com/it/u=932784564,2970727709&fm=253&fmt=auto&app=138&f=JPEG?w=556&h=500"
                },
                {
                    one: "艺术",
                    two: "1.生活蒙太奇",
                    three: "2.故事:材质、结构、风格",
                    four: "3.新摄影笔记",
                    image: "https://img1.baidu.com/it/u=4184714248,1896311806&fm=253&fmt=auto&app=138&f=JPEG?w=357&h=500"
                },
                {
                    one: "人物传奇",
                    two: "1.邓小平时代",
                    three: "2.毛泽东传",
                    four: "3.苏东坡传",
                    image: "https://img1.baidu.com/it/u=3565815578,129976998&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=599"
                },
            ]
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style  scoped>
.fdata {
    position: relative;
    top: -30px;
    width: 100%;
    height: 100%;
    margin-bottom: 60px;
}

.ftext {
    width: 90%;
    height: 105px;
    border-radius: 10px;
    background-color: #f8f8fa;
    margin: auto;
    margin-top: 20px;
}
.ftext span{
    position: relative;
    top: 15px;
    left: 20px;
    font-size: 20px;
}
.ftext p{
    position: relative;
    top: 20px;
    left: 20px;
    color: gray;
}
.ftext img{
    float: right;
    position: relative;
    top: -89px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}
</style>