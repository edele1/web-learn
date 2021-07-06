<template>
    <div id="app">
        <header class="header" style="display:block">
            <h1>todos</h1>
            <input class="new-todo" autofocus autocomplete="off"  
            placeholder="What needs to be done?"  @keyup.enter="addTodo">
        </header>
        <section class="main" style="display:block" v-if="todos.length">
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                <li v-for="(item,index) in todos"
                :key="item.id"
                :class="{completed:item.completed}">
                    <div class="view">
                        <input type="checkbox" class="toggle" v-model="item.completed">
                        <label>{{ item.content }}</label>
                        <button class="destroy"  @click="destroyTodo(index)"></button>
                    </div>
                </li>
                <!-- <div v-for="(item,index) in todosInView" :key="item.id">
                    <todo-item :item="item" @toggleCompleted="toggleCompleted(index)" @removeSelf="removeTodo(index)" />
                </div> -->
            </ul>
        </section>
        <footer class="footer" style="display:block" v-if="todos.length">
            <span class="todo-count">{{}} item left</span>
            <ul class="filters">
                <li>All</li>
                <li>Active</li>
                <li>Completed</li>
            </ul>
            <button class="clear-completed" style="display:none">Clear completed</button>
        </footer>
        <!-- <todo-footer v-if="todos.length" :itemsLeft="remaining.length" :currentView="currentView" :clearCompleted="clearCompleted" /> -->
    </div>
</template>

<script>
// import todoHeader from './todoHeader';
// import todo from './todo'
// import todoFooter from './todoFooter';
// import todoItem from './todoItem';

export default {
    name:'todo',

    component:{
        // todo,
        // todoHeader,
    //     todoFooter,
    //     todoItem
    },
    data(){
        return{
            todos: [], 
        }
    },
    methods: {
        addTodo ($event) {
            // 创建 newTodo 对象，获取数据
            const newTodo = {
            id: this.todos.length + 1,
            content: $event.target.value.trim(),
            completed: false
        }
            // 如果内容为空，什么都不做 
            if (!newTodo.content.length) return;
            // 如果内容不为空，将 newTodo 加入 todos 中
            this.todos.push(newTodo);
            $event.target.value = ''
        },
        destroyTodo(index){
            // 用 splice 方法通过参数 index 来找到要删除的 todo，删除一项
            this.todos.splice(index, 1)
        }
    },
}
</script>

<style>
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
#app{
   background: #fff;
    margin: 130px 0 40px 0 !important;
    position: relative;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 
    0 25px 50px 0 rgb(0 0 0 / 10%) 
}
.header h1{
    position:absolute;
    top:-155px;
    width:100%;
    font-size:100px;
    font-weight: 100;
    text-align:center;
    color:rgba(175, 47, 47, 0.15);
    text-rendering: optimizeLegibility;
    margin:83px 0px;
}
.new-todo, 
.edit {
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.new-todo{
    padding:16px 16px 16px 60px;
    border:none;
    background:rgba(0,0,0,0.003);
    box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
    outline:none;
}
::-webkit-input-placeholder {
    color:rgba(47,47,47,0.2);
}
.main{
    position: relative;
    
}
.toggle-all + label {
    width: 60px;
    height: 34px;
    font-size: 0;
    position: absolute;
    top: -52px;
    left: -13px;
    transform: rotate(90deg);
}
.toggle-all + label:before {
    content: '❯';
    font-size: 22px;
    color: #e6e6e6;
    padding: 10px 27px 10px 27px;
}
.todo-list{
    margin: 0;
    padding:0;
    list-style: none;
}
.todo-list li{
    position: relative;
    font-size:24px;
    border-bottom:1px solid #ededed;
}
.todo-list li .toggle{
    position: absolute;
}
.todo-list li label {
    word-break: break-all;
    padding: 15px 15px 15px 60px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
}
.todo-list li .destroy {
    display: none;
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #cc9a9a;
    margin-bottom: 11px;
    transition: color 0.2s ease-out;
}

</style>