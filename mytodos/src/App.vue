<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input @all_checked_event="handleAllCheck"
    @todo_save_event="handleSaveTodo" :allChecked="allChecked"></todo-input>
    <todo-item v-for="(todo,index) in filterTodos " 
    :key="todo.id" :index="index" :todo="todo"
    @item-click="handleItemClick" @delete-event="handleDelete" 
    @item-edit="handleEdit"></todo-item>
    <todo-bottom :remaing="remaing"
    :activeTab="activeTab" 
    @status_event="GoTo"
     @clear_event="handleClear"></todo-bottom>
  </div>
</template>

<script>
import TodoHeader from "@/components/todo-header"
import TodoInput from "@/components/todo-input"
import TodoItem from './components/todo-item.vue'
import TodoBottom from './components/todo-bottom.vue'
export default{
  watch:{
    todos:{
      deep:true,
      handler:function(newTodos){
        localStorage.setItem("todos",JSON.stringify(newTodos));
      }
    }
  },
  data:function (){
    return{
      activeTab:"all",
        todos:JSON.parse(localStorage.getItem("todos")||'[]',)
        
    };
  },
  computed:{
    filterTodos:function(){
      if(this.activeTab === "/completed"){
        return this.todos.filter(c=>c.checked)
      }
      if (this.activeTab === "/active"){
        return this.todos.filter(c=>!c.checked)
      }
      return this.todos;
    },
    allChecked:function(){ 
      return this.todos.every(t=>t.checked);
    },
    remaing:function(){
      return this.todos.filter(c=>!c.checked).length;
    },
  },
  methods:{
    handleAllCheck:function(checked){
      this.todos.map(t=>t.checked = checked);
    },
    handleSaveTodo:function(todo){
      this.todos.push(todo);
    },
    // handleItemClick:function(){
    //   return this.todos(t=>t.checked);
    // }
    handleItemClick:function({index,checked}){
      this.todos[index].checked = checked;
    },
    handleDelete:function({index}){
      this.todos.splice(index,1);
    },
    handleClear:function(){
      let filterTodos = this.todos.filter((todo)=>{
        return !todo.checked
      })
      this.todos=filterTodos;
    },
    GoTo:function(activeTab){
      this.activeTab=activeTab;
    },
  },
  components: {
    "todo-header":TodoHeader,
    "todo-input":TodoInput,
    "todo-item":TodoItem,
    TodoBottom,
  },
  mounted(){
    window.addEventListener("change",function(){

    })
  }
}
</script>

<style lang="less">
body {
    font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.4em;
    background: #f5f5f5;
    color: #4d4d4d;
    min-width: 230px;
    max-width: 550px;
    margin: 0 auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 300;
    display: block;
}
#app {
    background: #fff;
    margin: 130px 0 40px 0 !important;
    position: relative;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 
    0 25px 50px 0 rgb(0 0 0 / 10%) 
}
::-webkit-input-placeholder {
    color:rgba(47,47,47,0.2);
}

</style>
