<template>
  <div class="game">
      <div class="game-board">
          <div>
              <div v-for="(_,x) in 3" :key="x" class="board-row">
                  <button v-for="(_,y) in 3" :key="y" class="square" @click="move(x,y)">
                      {{ squares[x][y] }}
                  </button>
              </div>
              <!-- <div class="board-row" >
                  <button class="square"></button>
                  <button class="square"></button>
                  <button class="square"></button>
              </div>
              <div class="board-row">
                  <button class="square"></button>
                  <button class="square"></button>
                  <button class="square"></button>
              </div>
              <div class="board-row">
                  <button class="square"></button>
                  <button class="square"></button>
                  <button class="square"></button>
              </div>  -->
          </div>
      </div>
      <div class="game-info">
          <div v-if="winner">Winner： {{ winner }}</div>
          <div v-else>Next player ： {{ player }}</div>
          <ol>
              <li>
                  <button>{{ history }}</button>
              </li>
          </ol>
      </div>
  </div>
</template>

<script>
const calculateWinner =squares =>{
    consts lines =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
}
</script>

<style>
body {
  font: 14px "Century Gothic", Futura, sans-serif;
  margin: 20px !important;
}

ol, ul {
  padding-left: 30px;
}

.board-row:after {
  clear: both;
  content: "o";
  display: table;
}

.status {
  margin-bottom: 10px;
}

.square {
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
}

.square:focus {
  outline: none;
}

.kbd-navigation .square:focus {
  background: #ddd;
}

.game {
  display: flex;
  flex-direction: row;
}

.game-info {
  margin-left: 20px;
}
</style>