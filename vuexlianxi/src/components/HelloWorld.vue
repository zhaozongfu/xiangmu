<template>
  <div>
    <h1>当前求和为:{{ sum }}</h1>
    <h3>当前的和10倍:{{ bigSum }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
    <hr />
    <h1>今天的天气：{{ weather }}</h1>
    <h4>今天的气温：{{ mood }}</h4>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      n: 1 //用户选择的数字
    };
  },
  computed: {
    // sum() {
    //   return this.$store.state.sum;
    // },
    // weather() {
    //   return this.$store.state.weather;
    // },
    // mood() {
    //   return this.$store.state.mood;
    // },
    /* ...mapState({
      sum: "sum",
      weather: "weather",
      mood: "mood"
    }), */
    ...mapState(["sum", "weather", "mood"]),
    ...mapGetters(["bigSum"])
    /* bigSum() {
      return this.$store.getters.bigSum;
    } */
  },
  methods: {
    ...mapActions({
      incrementOdd: "jiaOdd",
      incrementWait: "jiaWait"
    }),
    ...mapMutations({
      increment: "jia",
      decrement: "jian"
    })
    // increment() {
    //   this.$store.commit("JIA", this.n);
    // },
    // decrement() {
    //   this.$store.commit("JIAN", this.n);
    // incrementOdd() {
    //   this.$store.dispatch("jiaOdd", this.n);
    // },
    // incrementWait() {
    //   this.$store.dispatch("jiaWait", this.n);
    // }
  }
};
</script>
<style scoped>
button {
  margin-left: 5px;
}
</style>
L