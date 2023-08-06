<template>
    <div class="foot">
        <ul>
            <li v-for="(item, index) in fonts" :key="index">
                <img :src="item.icon" alt="" width="30px" height="30px">
                <p>{{ item.text }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'WorkspaceJsonFoot',

    data() {
        return {
            fonts: [
                {
                    icon: "https://img.icons8.com/?size=2x&id=15895&format=png",
                    text: "福利",
                },
                {
                    icon: "https://img.icons8.com/?size=2x&id=1767&format=png",
                    text: "书城"
                },
                {
                    icon: "https://img.icons8.com/?size=512&id=NMcUI9NdpWhA&format=png",
                    text: "听书"
                }
            ]
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style scoped>
.foot {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 55px;
    background-color: aqua;
    
}

.foot ul li {
    display: inline-block;
}

.foot ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.foot ul li:nth-child(2){
    
   color: aqua;
}
.foot ul li img:nth-child(2){
    background-color: aqua;
}
</style>