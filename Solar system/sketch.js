
let sun,mercury,venus,earth,mars,end;
  function setup() {
  createCanvas(800,400);
}
function draw() {
  background(0);
  fill("red")
  let end = map(frameCount % 800  ,0,800,0,800);
  let sun = ellipse(200,200,end);
  fill("blue");
  let earth=ellipse(659,200,50);

  fill("cyan");
  let mercury=ellipse(350,200,50);
  
  fill("violet");
  let venus=ellipse(450,200,50);

  fill("brown");
  let mars=ellipse(450,200,50);
   console.log(end);
   if (end>300){
    fill("black")
    background(255);
    text("THE SUN DEATH, SOLAR SYSTEM DEATH",200,200);
   }
}