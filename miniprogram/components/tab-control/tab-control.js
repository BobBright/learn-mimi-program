// components/tab-control/tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemClick: function (event) {
      //1.获取下标
      console.log(event)
      const index = event.currentTarget.dataset.index;
      //2.修改
      this.setData(
        {
          currentIndex:index
        }
      )

      //3.向页面发出一个事件
      this.triggerEvent("itemClick",{index,title:this.properties.titles[index]})
    }
  }
})
