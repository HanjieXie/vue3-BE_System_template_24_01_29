<template>
    <div class="system_header">
        <h3 class="system_globalColor container_space">
            <div style="width: 80px; cursor: pointer;" @click="backToHome">
                <ArrowLeftOutlined />
                返回
            </div>
        </h3>
        <h1 class="system_globalColor container_space">大屏应用系统</h1>
        <h3 class="system_globalColor container_space">{{ CurrentTime }}</h3>
    </div>
</template>
<script setup>
import { ref } from "vue";
import moment from 'moment';
import { ArrowLeftOutlined } from '@ant-design/icons-vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();




const CurrentTime = ref('');

const getCurrentTime = () => {
    CurrentTime.value = moment().format("YYYY-MM-DD HH:mm:ss")
}
getCurrentTime();

setInterval(getCurrentTime, 1000)

const backToHome = () => {
    router.go(-1);
}

</script>
  
<style scoped>
.system_header {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.container_space {
    width: 30%;
}

.container_space:nth-child(2) {
    text-align: center;
}

.container_space:nth-child(3) {
    text-align: right;
}
</style>