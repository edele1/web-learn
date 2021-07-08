<template>
<div class="todo-header">
    <header class="header" style="display:block">
            <h1>todos</h1>
            <!-- <input class="new-todo" autofocus autocomplete="off"  
            placeholder="What needs to be done?"  @keyup.enter="addTodo"> -->
    </header>
</div>
</template>

<script>
export default {

}
</script>

<style>
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
/* .new-todo, 
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
} */
</style>