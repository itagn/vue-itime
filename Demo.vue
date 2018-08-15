<template>
  <div>
    <itime :pData="boxData"></itime>
    <div class="icon"><span @click="open('https://github.com/itagn')">狗呆</span> <span class="icon-love">❤</span> 女神</div>
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
            time: '2018/7/11',
            txt: '狗呆与女神开通《你的日记》'
          },
          {
            time: '2018/7/14',
            txt: '狗呆第一次和女神吵架，因为女神拒绝了狗呆的几个无理取闹的要求'
          },
          {
            time: '2018/7/15',
            txt: '狗呆第一次长篇自我反省，女神来大姨妈了'
          },
          {
            time: '2018/7/16',
            txt: '狗呆反省完成，与女神和好'
          },
          {
            time: '2018/7/23',
            txt: '狗呆获取女神朋友（陈沿君）制作中国地图的任务，第一次帮女神滴滴打车'
          },
          {
            time: '2018/7/25',
            txt: '狗呆做发型，第一次烫发'
          },
          {
            time: '2018/7/26',
            txt: '女神分享了女神妈妈对女婿的要求，狗呆完美符合'
          },
          {
            time: '2018/7/27',
            txt: '狗呆第二次和女神吵架，因为qq视频扯到不面基的问题'
          },
          {
            time: '2018/7/28',
            txt: '狗呆要求女神删了自己，事后又去加女神回来，和好'
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
            time: '2018/8/5',
            txt: '女神给狗呆介绍了女神的女盆友（猪猪）'
          },
          {
            time: '2018/8/13',
            txt: '女神给狗呆介绍了女神的宝贝（小姨）'
          },
          {
            time: '2018/8/14',
            txt: '狗呆与女神给爸妈公布了脱单，女神给狗呆介绍了女神的徒弟'
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
.icon-love {
  color: #dd3387;
}
</style>
