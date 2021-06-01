<template>
  <div class="game">
      <div class="game-board">
          <div>
              <div v-for="(_,x) in 3" :key="x" class="board-row">
                  <button v-for="(_,y) in 3" :key="y" class="square" @click="move(x,y)">
                      {{ squares[x][y] }}
                  </button>
              </div>   
          </div>
      </div>
      <div class="game-info">
          <div v-if="winner">Winner： {{ winner }}</div>
          <div v-else>Next player ： {{ player }}</div>
          <ol>
              <li>
                  <button v-on:click="history">Move to:{{ step }}</button>
              </li>
          </ol>
      </div>
  </div>
</template>

<script>
export default {
  name:'Board',
data(){
  return{
    step:0,
    squares:[
      ['','',''],
      ['','',''],
      ['','','']
    ],
    history:[
      {x:0,y:0,content:'x'},
      {x:1,y:1,content:'o'}
    ],
    player:'x',
    winner:'',
  }
},
created(){},
mounted(){},
function calculateWinner(squares) {
// const calculateWinner = squares =>{
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

methods:{
  move(x,y){
    if(this.squares[x][y]){
      alert('不能下在此处')
      return
    }
    this.step +=1
    this.history.push({ x,y,content:this.player})
    this.squares[x][y]=this.player
    this.player=this.player === 'x'?'o':'x'
    if (calculateWinner(squares)) {
  alert('胜负已定！');
  return;
}

const winner = calculateWinner(squares);
if (winner) {
  this.status = '获胜者: ' + winner;
  return;
}

  },

},
watch:{
  move(x,y){
    this.history
  }
  }
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