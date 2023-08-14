<template>
    <div class="fooder">
        
        <div class="text" v-for="(item, index) in shuzu" :key="index">
            <span class="html1">
                <img :src="item.img" alt="" width="80px" height="92px">
                <span>{{ item.name }}</span>
                <p>{{ item.zuozhe }}</p>
                <p>{{ item.wocaole }}</p>
                <img id="image" :src="item.image" width="40px" height="15px">
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WorkspaceJsonFooder',
    data() {
        return {
            shuzu: [
                {
                    name: "夜盲",
                    zuozhe: "理查德发 | 推荐值99%",
                    img: 'https://img0.baidu.com/it/u=187338145,3405076527&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
                    wocaole: '大家都在读',
                    image: "https://weread-1258476243.file.myqcloud.com/miniprogram/assets/reader/newRatings_900.png"
                },
                {
                    name: "我与阿长",
                    zuozhe: "干饭人 | 推荐值80%",
                    img: 'https://img2.baidu.com/it/u=1260227346,89756717&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                    wocaole: '大家都在读',
                    image: "https://weread-1258476243.file.myqcloud.com/miniprogram/assets/reader/newRatings_870.png"
                },
                {
                    name: "说红楼",
                    zuozhe: "一条鱼 | 推荐值90%",
                    img: 'http://t14.baidu.com/it/u=2352542786,123467867&fm=224&app=112&f=JPEG?w=500&h=500',
                    wocaole: '大家都在读',
                    image: "https://weread-1258476243.file.myqcloud.com/miniprogram/assets/reader/newRatings_800.png"
                },
                {
                    name: "壁江山",
                    zuozhe: "泡泡彤 | 推荐值99%",
                    img: 'https://img0.baidu.com/it/u=2344034425,227442519&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
                    wocaole: '大家都在读',
                    image: "https://weread-1258476243.file.myqcloud.com/miniprogram/assets/reader/newRatings_900.png"
                },
                {
                    name: "筑梦师",
                    zuozhe: "汰哆 | 推荐值80%",
                    img: 'http://t15.baidu.com/it/u=3630533125,2369354126&fm=224&app=112&f=JPEG?w=500&h=500',
                    wocaole: '大家都在读',
                    image: "https://weread-1258476243.file.myqcloud.com/miniprogram/assets/reader/newRatings_800.png"
                },
                {
                    name: "长江岔",
                    zuozhe: "多好多好 | 推荐值99%",
                    img: 'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/a8014c086e061d9540bfd04f7ff40ad163d9cac8.jpg',
                    wocaole: '大家都在读',
                    image: "https://weread-1258476243.file.myqcloud.com/miniprogram/assets/reader/newRatings_900.png"
                },
                {
                    name: "苍蓝色的讨伐者",
                    zuozhe: "为你写诗 | 推荐值85%",
                    img: 'https://www.mx-fm.com/upfile/201512/2015122978601809.jpg',
                    wocaole: '大家都在读',
                    image: "https://weread-1258476243.file.myqcloud.com/miniprogram/assets/reader/newRatings_900.png"
                },
            ]
        }
    }
};
</script>

<style scoped>
.fooder {
    width: 100%;
    height: 100%;
    overflow: auto;
    margin-bottom: 80px;
}


.text {
    position: relative;
    top: -15px;
    width: 100%;
    height: auto;
}

.text .html1 {
    display: block;
    width: 100%;
    height: 92px;
    margin-top: 0.5rem;
}

.html1 img {
    position: relative;
    left: 18px;
}

.html1 span {
    position: relative;
    top: -50px;
    left: 32px;
    font-size: 20px;
}

.html1 p {
    position: relative;
    top: -48px;
    left: 112px;
    font-size: 12px;
    color: gray;

}

#image {
    position: relative;
    top: -78px;
    left: -100px;
    float: right;
}
</style>