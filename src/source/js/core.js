export default {
  name: 'VueITime',
  props: {
    pData: {
      title: {
        type: String,
        default: ''
      },
      data: {
        type: String,
        default:[]
      }
    }
  },
  data () {
    return {
      colors: ['', 'pink', 'green', 'blue', 'orange']
    }
  },
  computed: {
    boxs () {
      const boxs = []
      const { data = [] } = this.pData
      let k = 0
      data.forEach((val, i) => {
        const obj = {
          txt: val.txt,
          color: Boolean(val.color) ? val.color : this.colors[k++ % 5]
        }
        boxs.push(obj)
      })
      return boxs
    },
    title () {
      const { title = '' } = this.pData
      return title
    }
  },
  methods:{
    getColor (color = '') {
      const obj = {
        circle: `circle ${color}`.trim(),
        line: `line ${color === 'love' ? '' : color}`.trim()
      }
      return obj
    }
  }
}