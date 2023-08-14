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
  name: "WorkspaceJsonWXdata",

  data() {
    return {
      bookCharacter: [
        {
          xuihao: 1,
          img:
            "http://t15.baidu.com/it/u=200611352,3691569543&fm=224&app=112&f=PNG?w=500&h=500",
          title: "陆小曼传",
          author: "月下",
          spell: "推荐值 99.1%",
          easy: "神作",
          people: 3000
        },
        {
          xuihao: 2,
          img:
            "https://netshopimg.oss-cn-beijing.aliyuncs.com/images/0/2020/10/12/goods_img/i18b63a52cda0e590c3fca3707f4df50f.jpg",
          title: "一世倾城",
          people: 2800,
          author: "苏小暖",
          spell: "推荐值 89.1%",
          easy: "脍炙人口"
        },
        {
          xuihao: 3,
          img:
            "https://img0.baidu.com/it/u=2848105051,2372353306&fm=253&fmt=auto&app=138&f=JPEG?w=567&h=500",
          title: "罹生门",
          people: 2700,
          author: "芥川龙之介",
          spell: "推荐值 80.1%",
          easy: "神作"
        },
        {
          xuihao: 4,
          img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fbao%2Fuploaded%2Fi1%2F2566616517%2FO1CN01akFGVl1y0pnY7KscX_%21%210-item_pic.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1694250892&t=b43b100e7e9055bb48049039f8b13b54",
          people: 3000,
          title: "定海浮生录",
          author: "非天夜翔",
          spell: "推荐值 89.5%",
          easy: "脍炙人口"
        },
        {
          xuihao: 5,
          img:
            "https://img14.360buyimg.com/n0/jfs/t1/151182/40/11641/74051/5fe057e4E593d9aab/8665f10f024a9fd7.jpg",
          people: 2231,
          title: "斗罗大陆",
          author: "唐家三少",
          spell: "推荐值 95.7%",
          easy: "神作"
        },
        {
          xuihao: 6,
          img:
            "http://t15.baidu.com/it/u=668171611,2156160546&fm=224&app=112&f=JPEG?w=500&h=500",
          title: "简爱",
          people: 2100,
          author: "[英] 夏洛·蒙朗特",
          spell: "推荐值 79.1%",
          easy: "好评如潮"
        },

        {
          xuihao: 7,
          img:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fi3%2F1657511849%2FO1CN01doCBID1PWt0G65NRS_%21%211657511849.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1694251170&t=f70ba73cf1637458e7d8baf070a06165",
          title: "神澜奇域",
          author: "上唐家三少",
          spell: "推荐值 97.1%",
          easy: "神作",
          people: 1900
        },
        {
          xuihao: 8,
          img:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fbao%2Fuploaded%2Fi1%2F3296590660%2FO1CN01E1DV851GkK2U3wu17_%21%210-item_pic.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1694251575&t=fde3ec8a9517f7ae16f59452d0b45cdd",
          title: "新参者",
          people: 1300,
          author: "东野圭吾",
          spell: "推荐值 98.6%",
          easy: "好评如潮"
        },
        {
          xuihao: 9,
          img:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fbao%2Fuploaded%2Fi4%2F3085658316%2FO1CN01UxjBmf2BImHwuizBY_%21%210-item_pic.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1694251323&t=d64f4ee03529c0fa150be572fd56de69",
          title: "欢迎来到实力...",
          people: 1000,
          author: "衣笠彰梧",
          spell: "推荐值 89.1%",
          easy: "神作"
        },
        {
          xuihao: 10,
          img:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.alicdn.com%2Fi2%2F2501220077%2FO1CN01dkIOk01CRJBC3YCTi_%21%212501220077.jpg&refer=http%3A%2F%2Fimg.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1694251441&t=3874cdd77a5374b5b5e1eb339f9f7e4e",
          people: 900,
          title: "狗男孩",
          author: "[澳]夏娃·荷南",
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

<style scoped>
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
    width: 90px;
  height: 100px;
  margin-top: 10px;
}
</style>