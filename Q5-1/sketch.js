// EUの旗を描いてみよう
function setup(){
  createCanvas(200, 200);
  background(192);
  noStroke();
  for(let i = 0; i < 12; i++){
    const theta = TWO_PI * i / 12;//12個のstarの間隔
    const x = 100 + cos(theta) * 50;
    const y = 100 + sin(theta) * 50;
    star(x, y, 10);
  }
function star(cx,cy,r){
  beginShape();//定義開始
  for(let i=0;i<5;i++){
    const theta=TWO_PI*i*2/5-HALF_PI;//角は時計回りで360°の2/5ごとに進んで
    const x=cx+cos(theta)*r;//円上の座標を計算する
    const y=cy+sin(theta)*r;
    vertex(x,y);//点の座標を図形の頂点として
  }
  endShape(CLOSE);
}
}
