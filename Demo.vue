<template>
  <div>
    <itime :pData="boxData"></itime>
  </div>
</template>

<script>
import { Itime } from './vue-itime'
export default {
  components: {
    Itime
  },
  data () {
    return {
      boxData: {
        title: '狗呆 & 女神',
        data: [
          {
            txt: '2018/7/9 狗呆认识女神'
          },
          {
            txt: '2018/8/3 狗呆与女神恋爱',
            color: 'love'
          }
        ]
      }
    }
  }
}
</script>

<style>

</style>
