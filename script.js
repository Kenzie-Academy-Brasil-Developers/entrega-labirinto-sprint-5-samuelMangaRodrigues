let player={x:0,y:0}
const map = [
    ['S',' ','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W'],
    ['W',' ',' ',' ','W',' ',' ',' ',' ',' ','W',' ',' ',' ',' ',' ','W',' ','W',' ','W'],
    ['W',' ','W',' ','W',' ','W','W','W',' ','W','W','W','W','W',' ','W',' ','W',' ','W'],
    ['W',' ','W',' ','W',' ',' ',' ','W',' ',' ',' ',' ',' ','W',' ','W',' ',' ',' ','W'],
    ['W',' ','W','W','W','W','W','W','W',' ','W',' ','W','W','W',' ','W',' ','W',' ','W'],
    ['W',' ',' ',' ',' ',' ',' ',' ',' ',' ','W',' ',' ',' ',' ',' ','W',' ','W',' ','W'],
    ['W',' ','W','W','W',' ','W','W','W','W','W',' ','W','W','W','W','W',' ','W',' ','W'],
    ['W',' ','W',' ',' ',' ','W',' ',' ',' ','W',' ','W',' ',' ',' ',' ',' ','W',' ','W'],
    ['W',' ','W','W','W','W','W',' ','W',' ','W',' ','W',' ','W','W','W',' ','W',' ','F'],
    ['W',' ',' ',' ',' ',' ','W',' ','W',' ','W',' ','W',' ','W',' ','W',' ','W','W','W'],
    ['W','W','W','W','W',' ','W',' ','W',' ','W',' ','W',' ','W',' ','W',' ','W',' ','W'],
    ['W',' ',' ',' ',' ',' ',' ',' ','W',' ','W',' ',' ',' ','W',' ','W',' ','W',' ','W'],
    ['W',' ','W','W','W','W','W','W','W',' ','W','W','W','W','W',' ','W',' ','W',' ','W'],
    ['W',' ',' ',' ',' ',' ',' ',' ','W',' ',' ',' ',' ',' ',' ',' ','W',' ',' ',' ','W'],
    ['W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W','W']
];
const divMain=document.getElementById("divMain")
function createMap(){
for(let i=0;i<map.length;i++){
    for(let j=0;j<map[i].length;j++){
if(map[i][j]==='W'){
    const parede=document.createElement("div")
    parede.setAttribute("id","parede")
    parede.setAttribute('block',`${i}:${j}`)
    divMain.appendChild(parede)
    console.log(parede)
}
if(map[i][j]===" "){
    const espaco=document.createElement("div")
    espaco.setAttribute("id","espaco")
    espaco.setAttribute('block',`${i}:${j}`)
    divMain.appendChild(espaco)
}
if(map[i][j]==="S"){
    const start=document.createElement("div")
    start.setAttribute("id","start")
    start.setAttribute('block',`${i}:${j}`)
    divMain.appendChild(start)
}
if(map[i][j]==="F"){
    const final=document.createElement("div")
    final.setAttribute("id","final")
    final.setAttribute('block',`${i}:${j}`)
    divMain.appendChild(final)
}
}
}
}
createMap()

function move(x,y){
if(map[x][y]===" "||map[x][y]==="S"||map[x][y]==="F"){
player.x=x
player.y=y
return true
}
else if(map[x][y]==='W'){
    return false
}

}


let boxLeft=0
let boxTop=0
document.addEventListener('keydown', (event) => {

    let keyName = event.key;
    if(keyName==="ArrowDown"&&move(player.x+1,player.y)===true){
      boxTop+=50
      
    }
    if(keyName==="ArrowUp"&&move(player.x-1,player.y)===true){
      boxTop-=50
      
    }
    
    if(keyName==="ArrowLeft"&&move(player.x,player.y-1)===true){
     boxLeft-=50
    }
    if(keyName==="ArrowRight"&&move(player.x,player.y+1)===true){
      boxLeft+=50
    }
    document.getElementById("player").style.top = boxTop + "px";
    document.getElementById("player").style.left = boxLeft+"px";
    win()
  });

  function win(){
    if(map[player.x][player.y]==="F"){
       divMain.setAttribute("id","win")
       const winC=document.createElement("h1")
       const divWin=document.createElement("div")
       const reset=document.createElement("button")
       const win2=document.createElement("img")
       win2.src="https://i.kinja-img.com/gawker-media/image/upload/s--5HKu7qfh--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/faclyszje9ety0onhxvi.png"
       win2.setAttribute("id","yoshi")
       divWin.classList.add("divWin")
       reset.setAttribute("id","reset")
       reset.innerText="Recomeçar??"
       winC.innerText="Parabéns!!!!Você chegou ao final do labirinto"
       const body=document.querySelector("body")
       divWin.appendChild(win2)
       divWin.appendChild(winC)
       divWin.appendChild(reset)
       body.appendChild(divWin)
    }
}