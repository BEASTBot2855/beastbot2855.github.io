$(document).ready(function () {
	if(localStorage.getItem('lightboxOpen') == 1) {
		$.getJSON('content/photos.json', function(data) {         
			insertLightbox(data.pictures,data.descriptions);
		});
		var checkExist = setInterval(function() {

			if ($('.mySlides').length) {
				openLightbox();
				currentSlide(localStorage.getItem('currentSlide'));
				clearInterval(checkExist);
			}
		}, 100);		
	}
});
function openLightbox() {
	document.getElementById('myLightbox').style.display = "block";
	localStorage.setItem('lightboxOpen', 1);
}

function closeLightbox() {
	document.getElementById('myLightbox').style.display = "none";
	localStorage.setItem('lightboxOpen', 0);
}

function plusSlides(n) {
	localStorage.setItem('currentSlide', (parseInt(localStorage.getItem('currentSlide')) + n));
	showSlides((parseInt(localStorage.getItem('currentSlide'))));
}

function currentSlide(n){
	localStorage.setItem('currentSlide', n);
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("lightbox-photo");
	var captionText = document.getElementById("caption");
	if (n > slides.length-1) {
		localStorage.setItem('currentSlide', 0);
	}
	if (n < 0) {
		localStorage.setItem('currentSlide', slides.length-1);
	}
	for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[parseInt(localStorage.getItem('currentSlide'))].style.display = "block";
	dots[parseInt(localStorage.getItem('currentSlide'))].className += " active";
	captionText.innerHTML = dots[parseInt(localStorage.getItem('currentSlide'))].alt;
}

function insertLightbox(images, captions) {

	imgLen = images.length;
	insToPhotos = '';
	for (i = 0; i < imgLen; i++) {
		insToPhotos += '<img src="'+images[i]+'" style="width:200px;height:150px;object-fit:cover;" onclick="openLightbox();currentSlide('+(i)+')" class="hover-shadow cursor photo">';
	}

	insToPhotos += '<div id="myLightbox" class="lightbox">'+'<div class="lightboxCloseBackground" onclick="closeLightbox()"></div><span class="closeButton cursor" onclick="closeLightbox()">&times;</span>'+'<div class="lightbox-content">';
	for (i = 0; i < imgLen; i++) {
		insToPhotos += '<div class="mySlides">'+'<div class="numbertext">'+(i+1)+' / '+imgLen+'</div>'+'<img src="'+images[i]+'" style="width:100%;padding-top:50px">'+'</div>';
	}
	insToPhotos += '<a class="prev" onclick="plusSlides(-1)">&#10094;</a>'+'<a class="next" onclick="plusSlides(1)">&#10095;</a>';
	insToPhotos += '<div class="caption-container">'+'<p id="caption"></p>'+'</div>';
	for (i = 0; i < imgLen; i++) {
		insToPhotos += '<div class="column">'+'<img class="lightbox-photo cursor photo" src="'+images[i]+'" style="width:100%;height:200px;object-fit:cover" onclick="currentSlide('+(i)+')" alt="'+captions[i]+'">'+'</div>';
	}

	document.getElementById('photos').innerHTML = insToPhotos;
}


function checkKey(e){
	if(localStorage.getItem('lightboxOpen') == 1){
		if (e.keyCode == '37') {
			plusSlides(-1)
		}
		else if (e.keyCode == '39') {
			plusSlides(1)
		}
		else if (e.keyCode == '27') {
			e.preventDefault();
			closeLightbox()
		}
	}
}