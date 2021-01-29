packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG); 
    packageSprite.scale=0.7; 
    
    if(keyCode(DOWN_ARROW)){ 
        packageSprite=createSprite(100,50,10,10); 
         packageSprite.velocityY=4; 
           } 
           packageSprite.display(); 


           