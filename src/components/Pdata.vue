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
                    image: "https://img2.baidu.com/it/u=890633011,2811866994&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667"
                },
                {
                    one: "文学",
                    two: "我与地坛",
                    image: "https://img1.baidu.com/it/u=932784564,2970727709&fm=253&fmt=auto&app=138&f=JPEG?w=556&h=500"
                },
                {
                    one: "艺术",
                    two: "生活蒙太奇",
                    image: "https://img1.baidu.com/it/u=4184714248,1896311806&fm=253&fmt=auto&app=138&f=JPEG?w=357&h=500"
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