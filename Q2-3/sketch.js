```// ギリシャ国旗（ほかの国旗に挑戦してもOK）
function setup() {
  createCanvas(270, 180);
  noStroke();
  background(255);

  const d = height / 9; // 縞1本の太さ
  const blue = color(0, 51, 160);

  // 縞を描く
  for(let i = 0; i < 9; i++){
    // BLANK[1] ヒント：縞の色を交互に変えるには2で割った余りを使おう
    rect(0, i * d, width, (i + 1) * d);
  }

  // 十字を描く
  const size = d * 5;
  fill(blue);
  rect(0, 0, size, size);
  fill(255);
  rect(d * 2, 0, d, size);
  // BLANK[2] 十字を完成させよう
}```


//アメリカ国旗
function setup(){
  createCanvas(380,200);
  noStroke();
  background(255);
  const d=height/13;

//バックグラウンドの赤と白の縞
  for(let i=0;i<13;i++){
    if(i%2==0){
      fill(187,19,62);
    }else{
      fill(255);
    }
    noStroke();
    rect(0,i*d,width,(i+1)*d);
  }

  //左上の青いバックグラウンド
  fill(0,33,71);
  rect(0,0,152,108);
  
  //白いスター（簡単のため円になる）
  const x=(height*0.76)/12;//ネットで調べた比例
  const y=(height*0.54)/10;
  for(i=0;i<11;i++){
    for(j=0;j<9;j++){
      if((i+j)%2===0){
        fill(255);
        circle((i+1)*x,(j+1)*y,10);
      }
    }
  }
}
