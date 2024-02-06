<template>
  <a-table :columns="columns" :dataSource="dataSource.mockdata">
    <template #bodyCell="{ column, text, record }">
      <template v-if="column.dataIndex === 'address'">
        <a-tooltip v-if="text.length > 5" :title="text">
          <span>{{ text.substring(0, 10) + '...' }}</span>
        </a-tooltip>
        <span v-else>{{ text }}</span>
      </template>
    </template>
  </a-table>
</template>

<script setup>
import { reactive } from 'vue';
import { columns } from './config'
const dataSource = reactive({
  mockdata: [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号11111111111',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园2号22222222222',
    },
  ],
})



</script>