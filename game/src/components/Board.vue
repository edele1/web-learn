<template>
  <div class="game">
      <ul class="board">
        <li class="square" v-for="(i,idx) of squares" :key="idx" @click="move(idx)">{{squares[idx]}}</li>
      </ul>
      <div class="game-info">
          <div v-if="winner">Winner： {{ winner }}</div>
          <div v-else>Next player ： {{ player }}</div>
          <ol>
              <li v-for="(i,idx) of history" :key="idx">
                  <button @click="jump(idx+1)">Move to:{{ idx+1 }}</button>
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
    squares:['', '', '', '', '', '', '', '', ''],
    history:[],
    player:'x',
    winner:'',
  }
},
created(){},
mounted(){},


methods:{

  calculateWinner(squares) {
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
},
  move(idx){
    if(this.squares[idx] || this.winner){
      alert('不能下')
      return
    }
    this.squares[idx]=this.player
    this.player=this.player === 'x'?'o':'x'
    this.history.push({
      id:idx,
      squares:this.squares[idx],
    })
    const calculateWinner=this.$options.methods.calculateWinner
    const win=calculateWinner(this.squares)
    if(win){
      this.winner= this.squares[idx]
      return
    }
    return
},
  jump(step){
    const history = this.history.slice(0,step)
    this.recoverFromHistory(history)
  },
  recoverFromHistory(history){
    const squares =[]
    this.squares.forEach((square,index) => {
      const his=history.find((i) => i.id === index)
      squares.push((his && his.squares) || '')
    })
    this.squares = squares
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
  list-style: none;
}
.status {
  margin-bottom: 10px;
}
.board {
		display: flex;
    width:200px;
    height:150px;
		flex-wrap: wrap;
		overflow: hidden;
	}
	.square {
    background: #fff;
		height: 50px;
		width: 50px;
		border: 1px solid #999;
		flex: 0 0 auto;
		font-size: 30px;
		font-weight: 600;
		line-height: 50px;
		text-align: center;
	}
/* .square:focus {
  outline: none;
} */

/* .kbd-navigation .square:focus {
  background: #ddd;
} */

.game {
		display: flex;
		width: 450px;
		height: 306px;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
}

.game-info {
  margin-left: 20px;
}
</style>