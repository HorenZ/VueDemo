<template>
  <div style="padding:20px;border:1px solid purple;">
    home:
    
    <h1>{{obj.mycount}}</h1>
    <Show></Show>
    <hr>
    <Foo></Foo>
    <ul>
      <li v-for="(item, index) in $store.getters.female" :key="index">
        {{item.name}}--{{item.gender}}
        </li>
    </ul>
  </div>
</template>

<script>
import Show from '../components/Show'
import Foo from '../components/Foo'
export default {
 components:{
   Show,Foo
 },
 
 provide(){
   return{
     count:this.obj
   }
 },
 data() {
   return {
     obj:{
       mycount:22
     }
   }
 },
 
}
</script>

<style>

</style>