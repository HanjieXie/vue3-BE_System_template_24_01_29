<template>
  <div class="echarts_container">
    <!-- 大屏顶部 -->
    <header class="boxBorder">
      <HeaderSystemName></HeaderSystemName>
    </header>
    <main class="boxBorder">
      <SectionOptions></SectionOptions>
    </main>
    <footer class="boxBorder"></footer>
  </div>
</template>
<script setup>
import HeaderSystemName from "../../components/BigScreen/HeaderSystemName/index.vue";
import SectionOptions from '../../components/BigScreen/SectionOptions/index.vue';
</script>

<style scoped>
.echarts_container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

header,
main,
footer {
  width: 100%;
}

.boxBorder {
  border: 1px solid #afafaf;

}

header {
  height: 8%;
}

main {
  height: 80%;
}
footer {
  height: 12%;
}
</style>