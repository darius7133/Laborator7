var slideIndex=0;
showSlidesColegi();

function showSlidesColegi() {
	var i;
	var slides=document.getElementsByClassName("mySlides);
	
	for(i=0;i<slides.lenght;i++)	{
		slides[i].style.display="none";
		}
		slideIndex++;
		if(slideIndex>slides.lenght) {slideIndex=1}
		
		slides[slideIndex-1].style.display="block";
		setTimeout(showSlidesColegi, 3000);
		}

