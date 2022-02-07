// SLIDER :
function slide(delay){
  let currentImage = document.getElementsByTagName("img")[0];
  let imagesList = ["fullmetalalchemist.jpeg", "onepiece.jpeg", "naruto poster.jpg","naruto shoppuden"];
  let slideNumber = 0;

  setInterval(function(){
    if(slideNumber == imagesList.length - 1){
      slideNumber = 0;
      currentImage.src = "images/" + imagesList[slideNumber];
    }else{
      slideNumber++;
      currentImage.src = "images/" + imagesList[slideNumber];
    }
  }, delay);

  document.getElementsByClassName("btn-right")[0].addEventListener("click",function() {
    if(slideNumber == imagesList.length - 1){
      slideNumber = 0;
      currentImage.src = "images/" + imagesList[slideNumber];
    }else{
      slideNumber++;
      currentImage.src = "images/" + imagesList[slideNumber];
    }
  });

  document.getElementsByClassName("btn-left")[0].addEventListener("click", function() {
    if(slideNumber == 0){
      slideNumber = imagesList.length - 1;
      currentImage.src = "images/" + imagesList[slideNumber];
    }else{
      slideNumber--;
      currentImage.src = "images/" + imagesList[slideNumber];
    }
  });
}
slide(3000);
	
				
 function display_video() {
					
					document.getElementById("video").style.display= "block";
					
				}
function display_episode(num){
				
				document.getElementById(num).style.display= "block";
			}
		