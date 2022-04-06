<script lang="ts">
import { defineComponent } from 'vue'
import { NConfigProvider, NSpace, NCard } from 'naive-ui'
// theme
import { createTheme, inputDark, datePickerDark } from 'naive-ui'
// locale & dateLocale
import { zhCN, dateZhCN } from 'naive-ui'

export default defineComponent({
  components: {
    NConfigProvider,
    NSpace,
    NCard

  },
  setup() {
    return {
      darkTheme: createTheme([inputDark, datePickerDark]),
      zhCN,
      dateZhCN
    }
  }
})
</script>

<template>
  <n-config-provider :theme="darkTheme" :locale="zhCN" :date-locale="dateZhCN">
      <n-space>
        <n-card title="Initialize" class="popup">
          Initialize
        </n-card>
      </n-space>
  </n-config-provider>
</template>

<style>
  .popup {
    width: 400px;
    height: 400px;
  }
</style>
