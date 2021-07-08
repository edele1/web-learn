<template>
  <div class="todo-input">
     <div class="todo-input-left" @click.stop="handleAllCheck">
         <i class="el-icon-arrow-down"></i>
         <!-- <label for="deleteall"></label> -->
     </div>
     <div class="todo-input-right">
         <input type="text" autofocus autocomplete="off" placeholder="What needs to be done?"
          v-model="inputVal" @keyup.enter="saveTodo"/>
     </div>
  </div>
</template>

<script>
export default {
    props:["allChecked"],
    name: 'todo-input',
    data(){
        return{
            inputVal: '',

        }
    },
    methods: {
        //全选逻辑
        handleAllCheck:function(){
             this.$emit("all_checked_event",!this.allChecked)
        },
        saveTodo:function(){
            if(!this.inputVal){
                return;
            }
            //子向父传值todo回传回去
            this.$emit("todo_save_event",{
                id:Date.now(),
                text:this.inputVal,
                checked:false,
            })

        }
    }

}
</script>

<style lang="less" scoped>
.todo-input {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ededed;
}
.todo-input-left{
    flex:1;
    text-align: center;
    font-size:22px;
    color:rgba(47,47,47,0.2);
    font-size:24px;
    cursor:pointer;
    }
.todo-input-right{
    flex:9;
    background:rgba(0,0,0,0.003);  
    padding:16px 16px 16px 16px;
    input{
        border: none;
        outline: none;
        height:40px;
        width:99%;
        font-size: 24px;
    }
    
::-webkit-input-placeholder {
    color:rgba(47,47,47,0.2);}
}
</style>