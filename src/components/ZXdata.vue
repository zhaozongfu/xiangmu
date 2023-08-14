<template>
  <!-- 这是文学艺术页面 -->
  <div id="bookCharacterbox">
    <div class="bookCharacterbox_box" v-for="(item, index) in bookCharacter" :key="index">
      <div class="bookCharacterbox_box_zuo"></div>
      <div class="box_zuo_aracter">
        <h3>{{ item.xuihao }}</h3>
      </div>
      <div class="box_you_aracter">
        <div class="box_you_aracter_img">
          <img :src="item.img" alt />
        </div>
        <div class="box_you_aracter_wenzi">
          <p>{{ item.title }}</p>
          <p>{{ item.author }}</p>
          <p>
            {{ item.spell }}
            <span>【{{ item.easy }}】</span>
          </p>
        </div>
      </div>
      <div class="bookCharacterbox_box_you">
        <p>{{ item.people }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonZXdata",

  data() {
    return {
      bookCharacter: [
        {
          xuihao: 1,
          img:
            "https://img2.baidu.com/it/u=3159356649,2249108246&fm=253&fmt=auto&app=138&f=JPEG?w=333&h=500",
          title: "查理九世",
          author: "雷欧幻像",
          spell: "推荐值 99.1%",
          easy: "好评如潮",
          people: 3000
        },
        {
          xuihao: 2,
          img:
            "https://img0.baidu.com/it/u=1543739411,4279057899&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=679",
          title: "墓地诡事",
          people: 2800,
          author: "图怪兽",
          spell: "推荐值 89.1%",
          easy: "脍炙人口"
        },
        {
          xuihao: 3,
          img:
            "http://t13.baidu.com/it/u=3639497604,2010711931&fm=224&app=112&f=JPEG?w=500&h=500",
          title: "人类群星闪耀时",
          people: 2700,
          author: "琴芬·复局格",
          spell: "推荐值 80.1%",
          easy: "神作"
        },
        {
          xuihao: 4,
          img:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fbao%2Fuploaded%2Fi1%2F916495457%2FO1CN011qBLnimafGIFxOz_%21%210-item_pic.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1694257131&t=1b5c7335916380353dddf649b250c052",
          people: 3000,
          title: "你不努力,谁也给不了...",
          author: "连山",
          spell: "推荐值 89.5%",
          easy: "脍炙人口"
        },
        {
          xuihao: 5,
          img:
            "https://hbimg.huaban.com/2f02c7ee0996efa36cd830cc3e3cb7d872df729afc910-JKoSQr_fw658",
          people: 2231,
          title: "将进酒",
          author: "唐酒卿",
          spell: "推荐值 95.7%",
          easy: "神作"
        },
        {
          xuihao: 6,
          img:
            "https://static.zongheng.com/upload/cover/shucheng/14/30014200.jpg",
          title: "阴阳先生",
          people: 2100,
          author: "小非同学",
          spell: "推荐值 79.1%",
          easy: "好评如潮"
        },

        {
          xuihao: 7,
          img:
            "https://hbimg.huaban.com/3eb5938d832c35caada7fec08d5ecfcd9499b72d45802-3gTzl5_fw658",
          title: "黑暗骑士异闻录",
          author: "樱井枫茗",
          spell: "推荐值 97.1%",
          easy: "神作",
          people: 1900
        },
        {
          xuihao: 8,
          img:
            "https://hbimg.b0.upaiyun.com/8a3f01b2ed0f6e1c884521ea541da61a7158a4c13cd7b-LiGXbQ_fw658",
          title: "颂歌之幻月史诗",
          people: 1300,
          author: "令星海",
          spell: "推荐值 98.6%",
          easy: "好评如潮"
        },
        {
          xuihao: 9,
          img:
            "https://p1.ssl.qhmsg.com/t0130fce43d951dd408.jpg",
          title: "修仙绯闻",
          people: 1000,
          author: "张廉",
          spell: "推荐值 89.1%",
          easy: "神作"
        },
        {
          xuihao: 10,
          img:
            "https://img2.baidu.com/it/u=3091525713,3914988316&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=720",
          people: 900,
          title: "我为冥",
          author: "孤峰残叶",
          spell: "推荐值 89.1%",
          easy: "好评如潮"
        }
      ]
    };
  },

  mounted() {},

  methods: {}
};
</script>

<style  scoped>
#bookCharacterbox {
  width: 100%;
  height: 1400px;
}

.bookCharacterbox_box {
  width: 90%;
  margin: auto;
  height: 120px;
  display: flex;
  margin-bottom: 16px;
}
.bookCharacterbox_box_you {
    width: 60px;
    text-align: center;
    margin-top: 35px;
    font-size: 13px;
    margin-left: -35px;
    line-height: 25px;
    border-radius: 50px;
    color: #9da4ae;
    height: 25px;
    background-color: #f6f6f6;
}

.box_zuo_aracter {
  padding: 5px;
  line-height: 90px;
  margin-left: -10px;
}

.box_you_aracter_wenzi {
  width: 200px;
  margin-left: 15px;
  margin-top: 35px;
  line-height: 25px;
}
.box_you_aracter_wenzi span {
  color: #f86e4b;
  font-weight: 900;
}

.box_you_aracter_wenzi p:nth-child(1) {
  font-weight: 900;
}

.box_you_aracter_wenzi p:nth-child(3) {
  font-size: 12px;
}
.box_you_aracter {
  display: flex;
}

img {
  width: 85px;
  height: 100px;
  margin-top: 10px;
}
</style>