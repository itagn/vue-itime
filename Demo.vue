<template>
  <div>
    <itime :pData="boxData"></itime>
    <div class="icon"><span @click="open('https://github.com/itagn')">itagn备忘录</span></div>
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
        title: 'xxx',
        data: [
          {
            time: '2018/7/9',
            txt: 'xxx'
          },
          {
            time: '2018/7/9',
            txt: 'xxx'
          }
        ]
      }
    }
  },
  methods: {
    open (url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped>
.icon {
  border-top: 1px dashed #ccc;
  text-align: center;
  margin-top: 20px;
  padding: 10px 0;
}
</style>
