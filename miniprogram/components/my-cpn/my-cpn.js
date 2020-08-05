// components/my-cpn/my-cpn.js
Component({
  /**
   * 组件的属性列表，让使用者给组件传入数据
   */
  properties: {
      msg:{
        type:String,
        value:"",
        observer:function(newVal,oldVal){
          console.log(newVal,oldVal);
        }
      }

  },

  /**
   * 定义组件内部初始化数据
   */
  data: {
      title:"优选推荐",
      counter:0
  },

  /**
   * 定义组件内部的函数
   */
  methods: {

  },

  /**
   * 定义组件内部选项
   */
  options:{

  },
  /**
   * 外界给组件传入额外的样式
   */
  externalClasses:[],

  /**
   * 可以监听properties/data 值的变化
   */
  observers:{
    //参数只有newVal，没有oldVal
    counter:function(newVal){

    }
  },
  /**
   * 组件监听所属页面的生命周期
   */
  pageLifetimes:{

    show:function(){
      console.log("组件的show函数");
    },

    hide:function(){
      console.log("组件的hide函数");
    },

    resize:function(){
      console.log("组件的resize函数");
    }
  },
  
  /**
   * 组件生命周期函数
   */
  lifetimes:{
    //1.被创建出来
    created:function(){
      console.log("组件被创建");
    },

    attached:function(){
      console.log("组件被添加到容器中");
    },

    ready:function(){
      console.log("组件被渲染出来");
    },
    moved:function(){
      console.log("组件被移动");
    },
    detached:function(){
      console.log("组件被移除");
    }


  }
  

})
