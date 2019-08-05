---
title: Photos
description: Click on a picture to enlarge
img: /assets/images/PhilOnAirship.jpg
navPos: 4
---
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="/assets/js/lightbox.js"></script>
<style>
	@media only screen and (max-width: 768px) {
			.picture{
				width: 100px;
			}
		}
	@media only screen and (min-width: 768px) {
		.picture{
			width: 500px;
		}
	}
</style>

# BEASTBot 2855's photos:
###### *(may take a while to load)*
---

<div style="text-align: center;" id="photos"></div>
<script>
	$.getJSON('photos.json', function(data) {         
		insertLightbox(data.pictures,data.descriptions);
	});
</script>
<script>document.onkeydown = checkKey;</script>