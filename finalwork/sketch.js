let x,y;
let vy;//垂直速度
let groundY;//地面の高度
let pipes=[];
let isDead=false;
let score=0;
const g=0.8;//引力
const jumpPower=-13;//ジャンプの強さ
const PIPE_INTERVAL=90;//生成の時間間隔
const PIPE_SPEED=3;//生成の速度

function setup(){
  createCanvas(windowWidth,windowHeight);

  //最初の位置
  x=width*0.3;
  y=height*0.4;
  vy=0;
  groundY=height*0.8;
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight); 
}

function draw(){
  background(160,192,255);
  const size=height*0.05;
  const r=size/2;

  fill(64,192,64)
  rect(0,groundY,width,height-groundY);

  updatePipes();//パイプの更新と描く

  //引力と落下処理
  vy+=g;
  y+=vy;

  //地面の下に入るのを避ける
  if(y+r>=groundY){
    y=groundY-r;
    if(vy>0){
      vy=0;
    }//地面で止まる
  }
  
  //死亡かどうかを判定
  if(!isDead){
    hitCheck(r);
  }
  if(isDead){
    fill(255,0,0);
  }else{
    fill(255,255,0);
  }  
  ellipse(x,y,size,size);
  drawScore();
}

function keyPressed(){//キーボード操作
  if(isDead){
    return;
  }
  if(key===" "){
    vy=jumpPower;
  }
}

//上下パイプをペアで追加
function addPipe(){
  const gapHeight=groundY*0.3;//すき間
  const margin=120;
  const gapY=random(margin,groundY-margin);

  pipes.push({
    x:width+50,
    gapY:gapY,
    gapHeight:gapHeight,
    width:60,
    passed:false
  });
}

//全てのパイプを更新して描く
function updatePipes(){
  //死亡だったら更新停止
  if(isDead){
    for(let i=0;i<pipes.length;i++){
      drawPipe(pipes[i]);
    }
    return;
  }
  //パイプ追加
  if(frameCount%PIPE_INTERVAL===0){
    addPipe();
  }

  for(let i=pipes.length-1;i>=0;i--){
    const p=pipes[i];
    p.x-=PIPE_SPEED;

    //スコア増加判定
    if(!p.passed&&p.x+p.width<x){
      p.passed=true;
      score++;
    }

    drawPipe(p);
    //左についたら削除
    if(p.x+p.width<0){
      pipes.splice(i,1);
    }
  }
}

function drawPipe(p){//パイプ生成
  fill(0,200,0);
  const topPipeBottom=p.gapY-p.gapHeight/2;
  const bottomPipeTop=p.gapY+p.gapHeight/2;

  rect(p.x,0,p.width,topPipeBottom);//上のパイプ
  rect(p.x,bottomPipeTop,p.width,groundY-bottomPipeTop);//下のパイプ
}

function hitCheck(r){//死亡判定
  for(let i=0;i<pipes.length;i++){
    const p=pipes[i];
    const topPipeBottom=p.gapY-p.gapHeight/2;
    const bottomPipeTop=p.gapY+p.gapHeight/2;

    //重ねるかどうかを判定
    const hit=x+r>p.x&&x-r<p.x+p.width;
    if(!hit) continue;

    const hitUpper=y-r<topPipeBottom;
    const hitLower=y+r>bottomPipeTop;
    if(hitUpper||hitLower){
      isDead=true;
      break;
    }
  }
}

function drawScore(){
  fill(255);
  textSize(120);
  textStyle(BOLD);
  textAlign(screenLeft,TOP);
  text(score,20,20);
}