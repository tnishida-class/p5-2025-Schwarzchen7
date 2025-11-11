// 心臓の鼓動のようなアニメーション
const cycle = 100; // 1周期のフレーム数
let count=0; // 何フレーム目か
let size=50;// 円のサイズ

function setup(){
  createCanvas(200, 200);
}

function draw(){
  background(160, 192, 255);
  count=(count+1)%cycle;//countは100を超えない


  if(keyIsPressed){//keyが押さればtrueになる
    count=(count+2)%cycle;//スピードが加速
  }else{
    size=50+count;
  }
  //1周期を二段になる
  if(count<cycle/2){//前半周期（拡大）
    size=50+cycle-count;
  }else{//後半周期（縮小）
    size=50+count;
  }

  ellipse(width / 2, height / 2, size,size);
}
