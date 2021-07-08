<template>
  <div class="todo-bottom">
      <div class="todo-bottom-left">
          {{remaing}} items left
      </div>
      <div class="todo-bottom-mid">
          <div :class="[{'bottom-mid-item':true} ,{active:activeTab==='home'}]" @click.stop="handleGoTo('/')">
              All
          </div>
          <div :class="[{'bottom-mid-item':true},{active:activeTab==='/active'}]" @click.stop="handleGoTo('/active')">
              Active
          </div>
          <div :class="[{'bottom-mid-item':true},{active:activeTab==='/completed'}]" @click.stop="handleGoTo('/completed')">
              Completed
          </div>
      </div>
      <div class="todo-bottom-right" @click.stop="handleClear">
          Clear Completed
      </div>
  </div>
</template>

<script>
export default {
props:['remaing','activeTab'],
data(){
    return{}
},
methods:{
    handleClear:function(){
        this.$emit('clear_event',"");
    },
    handleGoTo:function(path){
        this.$router.push(path);
        let activeTab = path;
        if(path === "/"){
            activeTab = "home";
        }
        this.$emit('status_event',activeTab);
    }
},
}
</script>

<style lang="less" scoped>
.todo-bottom{
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:10px 15px;
}
.todo-bottom-left{

}
.todo-bottom-right{
    cursor:pointer;

}
.todo-bottom-mid{
    display: flex;
    .active{
        border:1px solid red;
    }
}
.bottom-mid-item{
    padding:0px 7px;
    margin:0px 5px;
    text-align: center;
    cursor:pointer;
}

</style>