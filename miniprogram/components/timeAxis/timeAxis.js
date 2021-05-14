// components/timeAxis/timeAxis.js
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    isCurent: {
      type: Boolean,
      value: false
    },
    isShowLeftLine: {
      type: Boolean,
      value: true
    },
    axisTitle: {
      type: String,
      value: ''
    },
    axisTime: {
      type: String,
      value: ''
    },
    axisContent: {
      type: String,
      value: ''
    },
    textArray: {
      type: Array,
      value: []
    }
  },
  ready() {
    console.log(  this.data.textArray)
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})