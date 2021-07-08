<template>
  <div class="todo-item">
      <div class="todo-item-left" @click.stop="handleItemClick">
          <i :class="[{'el-icon-circle-check':true},{'el-icon-success':todo.checked}]"></i>
      </div>
      <div @dblclick.stop="handleEdit"
      :class="[{'todo-item-mid':true},{'deleteItem':todo.checked}]">
      <span :class="[{'todo-item-text':true},{'hidden':editing}]">{{todo.text}}</span>
      <input type="text" v-model="todo.text" :class="[{'hidden':!editing}]"
      @blur="handleSave">
      </div>
      <div class="todo-item-right" @click.stop="deleteTodo">×</div>
  </div>
</template>

<script>
export default {
props:{
    todo:{
      type:Object,
      default:function(){
        return{}
      },
    },
    index:{
      type:Number,
      default:-1

    },
  },
  data(){
    return{
      editing:false,
    }
  },
  methods:{
    handleItemClick:function(){
      this.$emit("item-click",{index:this.index,checked:!this.todo.checked});
    },
    deleteTodo:function(){
      this.$emit("delete-event",this.index)
      },
      handleEdit:function(){
        this.editing=true;
      },
      handleSave:function(){
        this.editing=false
      }
  },
}
</script>

<style lang="less" scoped>
.todo-item{
    height: 50px;
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding: 10px;
    border-bottom: 1px solid #ededed;
    
    &:hover{
    .todo-item-right{
        visibility: visible;
    }
    }
}
.todo-item-left{
  color: #ddd;
  font-size: 30px;
}

.todo-item-mid{
  .hidden{display: none;}
  margin-right:365px ;
  font-size: 24px;
  input{
    margin-left: 20px;
        height:40px;
        font-size: 24px;
    }
}
.deleteItem{
  color: #ddd;
  text-decoration: line-through;
}

.todo-item-right{
    color:#cc9a9a;
    visibility: hidden;
    font-size: 35px;
    margin-right:15px;
    cursor:pointer;

}

</style>