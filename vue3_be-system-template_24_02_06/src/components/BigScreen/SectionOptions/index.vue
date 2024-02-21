<template>
    <div class="main_container">
        <section class="border_line">
            <div class="echart_box border_line" ref="LineEchart"></div>
            <div class="echart_box border_line" ref="BarEchart"></div>
        </section>
        <section class="border_line">
            <div class="echart_box border_line" ref="PieEchart"></div>
            <div class="echart_box border_line" ref="RadarEchart"></div>
        </section>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import * as echarts from 'echarts';
import { LineOption, BarOption, PieOption, RadarOption } from './echartConfig'
const LineEchart = ref(null)
const BarEchart = ref(null)
const PieEchart = ref(null)
const RadarEchart = ref(null)
// 线状图
const initLineChart = () => {
    let lineChart = echarts.init(LineEchart.value);
    lineChart.setOption(LineOption);
}
// 柱状图
const initBarChart = () => {
    let barChart = echarts.init(BarEchart.value);
    barChart.setOption(BarOption);
}
const initPieEchart = () => {
    let pieChart = echarts.init(PieEchart.value);
    pieChart.setOption(PieOption);
}
const initRadarEchart = () => {
    let radarChart = echarts.init(RadarEchart.value);
    radarChart.setOption(RadarOption);
}




onMounted(() => {
    initLineChart();
    initBarChart();
    initPieEchart();
    initRadarEchart();
})


</script>
  
<style scoped>
.main_container {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

section:nth-child(1){
    width: 20%;
    height: 700px;
}
section:nth-child(2){
    width: 25%;
    height: 700px;
}

.echart_box {
    width: 100%;
    height: 50%;
}
</style>