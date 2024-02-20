<template>
  <!-- flex_all_center 全局配置容器子元素水平垂直居中 -->
  <div class="home_Style flex_all_center">
    <div class="home_box flex_all_center" @mouseenter="handleMouseover" @onmouseleave="handleMouseout">
      <div class="home_bar">
        <div v-if="barSwitch">
          <h2>首页</h2>
        </div>
        <div class="home_bar" v-else>
          <h2 @click="toEchartsPage">
            <ArrowRightOutlined />
            大屏应用
          </h2>
          <h2 @click="toBackEndPage">
            <ArrowRightOutlined />
            后台管理系统
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from 'vue-router';
import { ArrowRightOutlined } from '@ant-design/icons-vue';



const router = useRouter();
const route = useRoute();

// 导航栏切换
const barSwitch = ref(true);
// 鼠标悬浮
const handleMouseover = () => {
  barSwitch.value = false;
}
// 鼠标移除
const handleMouseout = () => {
  barSwitch.value = true;
}

// 前往首页
const toEchartsPage = () => {
  console.log('working')
  router.push('/bigScreen');
}
// 前往首页
const toBackEndPage = () => {

}

</script>

<style scoped>
.home_Style {
  width: 100%;
  height: 100%;
  overflow: hidden;

}

.home_box {
  width: 25%;
  height: 10%;
  background: #575757;
  border-radius: 25px;
}

.home_bar {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
</style>