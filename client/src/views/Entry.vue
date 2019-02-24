<template>
    <div>
        <div>
            <cube-button @click="getData()">{{title}}</cube-button>
            <button @click="getData()">{{content}}</button>
            <cube-input></cube-input>
            <cube-button @click="getData()">搜索</cube-button>
        </div>
        <div class="content">
            <h3>{{title}}</h3>
            <p>{{content}}</p>
        </div>
        
    </div>
    
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            title:aaa.title,
            content:aaa.content
        }
    },
    methods:{
        async getData(){
          const aaa= await axios.get('http://localhost:3000/api/test')
          console.log(aaa);
          
          return aaa;
          //console.log(111);
          
    } 
    }
}
</script>
<style lang="stylus" scoped>

</style>
