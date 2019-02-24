<template>
  <div class="home">
    <div class="nav">
      <cube-button @click="getData()">{{title}}</cube-button>
      <button @click="getData()">{{content}}</button>
      
    </div>
    <div class="search">
      <cube-input></cube-input>
      <cube-button @click="getData()">搜索</cube-button>
      <cube-tab-bar
        @click="clickHandler(this)"
        :data="tabs"
      >

      </cube-tab-bar>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios' //#endregion\

export default {
  name: 'home',
  components: {
   
  },
  data(){
    return {
      title:'',
      content:'',
      tabs:[{
          label:'Home',
          value:'1'
        },
        {
          label:'Recon',
          value:'2'
        },
        {
          label:'Feed',
          value:'3'
        }
      ]
    }    
  },
  methods:{
    async getData(){
            const aaa= await axios.get('http://localhost:3000/api/test')
            console.log(aaa.data[0]);
            this.title= aaa.data[0].title 
            this.content=aaa.data[0].content
    },
    clickHandeler(label){
      console.log(label);     
    }
  },
  props:{
    value:111,
    data:[{
          label:'Home',
          value:'111'
        },
        {
          label:'Recon'
        },
        {
          label:'Feed'
        }
      ],
    showSlider:true,
    useTranstion:true
  }
}
</script>
<style lang="stylus" scoped>

</style>

