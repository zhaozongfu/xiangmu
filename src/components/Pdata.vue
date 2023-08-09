<template>
    <div class="Pdata">
        <div class="Ptext" v-for="(item, index) in pai" :key="index">
            <span>{{ item.one }}</span>
            <p>{{ item.two }}</p>
            <img :src="item.image" alt="" width="100px" height="100%">
        </div>
    </div>
</template>

<script>
export default {
    name: 'WorkspaceJsonPdata',

    data() {
        return {
            pai: [
                {
                    one: "历史",
                    two: "明朝那些事儿(全集)",
                    image: "https://e0.ifengimg.com/10/2018/1123/70547E42F9AF3C0E84D4CCD7F15F7528EE5F26AC_size78_w580_h483.jpeg"
                },
                {
                    one: "文学",
                    two: "我与地坛",
                    image: "https://n.sinaimg.cn/sinacn00/288/w599h489/20180807/93b2-hhkusks6903981.png"
                },
                {
                    one: "艺术",
                    two: "生活蒙太奇",
                    image: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202005%2F29%2F20200529150833_trllm.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1694058229&t=d81253eb600d196303551596fdf1dd62"
                },
                {
                    one: "人物传奇",
                    two: "邓小平时代",
                    image: "https://img1.baidu.com/it/u=3565815578,129976998&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=599"
                },
                {
                    one: "历史",
                    two: "明朝那些事儿(全集)",
                    image: "https://img2.baidu.com/it/u=890633011,2811866994&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667"
                },
                {
                    one: "文学",
                    two: "我与地坛",
                    image: "https://img1.baidu.com/it/u=932784564,2970727709&fm=253&fmt=auto&app=138&f=JPEG?w=556&h=500"
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
.Pdata {
    position: relative;
    top: -30px;
    width: 100%;
    height: 100%;
    margin-bottom: 60px;
}

.Ptext {
    width: 90%;
    height: 105px;
    border-radius: 10px;
    background-color: #f8f8fa;
    margin: auto;
    margin-top: 20px;
}

.Ptext span {
    position: relative;
    top: 35px;
    float: right;
    font-size: 20px;
}

.Ptext p {
    position: relative;
    top: 80px;
    float: right;
    color: gray;
}

.Ptext img {
    float: left;
    position: relative;
    top: 0px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}</style>