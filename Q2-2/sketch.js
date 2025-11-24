// チェッカー
function setup() {
  createCanvas(200, 200);
  const size = width / 8; // マスの一辺の長さ
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i+j)%2===0){
      fill(255);
      }else{
      fill(140);
      }
      rect(size*i,size*j,size,size);
      // BLANK[1] ヒント： rectのx座標は size * i, y座標は size * j
    }
  }
  //赤い円
  for(let j=0;j<3;j++){
    for(let i=0;i<8;i++){
      if((i+j)%2===1){
        fill(255,0,0);
        circle(size*(i+0.5),size*(j+0.5),size*0.8);
      }
    }
  }
　//黒い円
  for(let j=5;j<8;j++){
    for(let i=0;i<8;i++){
      if((i+j)%2===1){
        fill(0,0,0);
        circle(size*(i+0.5),size*(j+0.5),size*0.8);
      }
    }
  }
  
}
