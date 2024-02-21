<template>
  <a-layout id="components-layout-demo-custom-trigger" style="min-height: 100vh;">
    <a-layout-sider :trigger="null" collapsible v-model.value:collapsed="collapsed">
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1">
          <ArrowRightOutlined />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <ArrowRightOutlined />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <ArrowRightOutlined />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0;">
        <div class="backToHome_btn">
          <h1>后台管理系统</h1>
          <a-button>
            <ArrowLeftOutlined />
            返回
          </a-button>
        </div>
      </a-layout-header>

      <a-layout-content style="margin: 24px 16px; padding: 24px; background: #fff;">
        <!-- 这里是内容区域，可以根据路由动态显示内容 -->
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer style="text-align: center;">Ant Design ©2018 Created by Ant UED</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script setup>
import { ref } from 'vue';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons-vue';

// 使用ref来控制菜单的展开和收起状态
const collapsed = ref(false);
</script>

<style>
#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.backToHome_btn {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 20px;
  align-items: center;
}

.backToHome_btn h1 {
  margin: 0;
}
</style>
