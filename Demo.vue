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
            time: '2018/7/9',
            txt: '狗呆在扒皮吧认识女神'
          },
          {
            time: '2018/8/2',
            txt: '狗呆与女神在春熙路面基'
          },
          {
            time: '2018/8/3',
            txt: '狗呆与女神恋爱',
            color: 'love'
          },
          {
            time: '2018/8/14',
            txt: '狗呆与女神给爸妈公布了脱单'
          }
        ]
      }
    }
  }
}
</script>

<style>

</style>
