//Create variables here
var dog,dogImg,dogImg1,foodStock,foodf
var database;
function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png")
  dogImg1=loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database()
	createCanvas(800, 800);
  dog=createSprite(400,400,300,300)
  dog.addImage(dogImg)
  dog.scale=0.5
  foodStock=database.ref('food')
  foodStock.on("value", readStock)
  
}


function draw() {  
background(134,255,211)
if (keyWentDown("DOWN_ARROW")){
  writeStock(foodf)
  dog.addImage(dogImg1)
}
else {
  
}
text("FOOD REMAINING : "+foodf,239,135)  
  drawSprites();
  

}


function readStock (data){
  foodf=data.val();
  }
function writeStock (x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref('/').update({
    food : x
  })
}