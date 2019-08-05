---
title: Slic3r
description: How to use Slic3r (Win/Mac/Linux)
img: /assets/images/EarlyHotB.jpg
---
<style>
	li { padding: 5px; }
</style>
<a href="." class="guideBack">< Back to Guides</a>

## Preparations
---
If you don't have Slic3r set up, follow [this guide](?guides/Slic3rSetUp)

## Importing an STL
1. Drag and Drop the `*.stl` file onto the area outlined in <span style="color:red">red</span>:
<br/><img src="images/guides/slic3r/PrintArea.png" alt="PrintArea" class="growPicSmall">

## Exporting G-code
1. Make sure your <span style="color:blue">export settings</span> are set correctly for
	* The <span style="color:red">RED Printer</span>:
	<br/><img src="images/guides/slic3r/RedSettings.png" alt="RedSettings" class="growPicSmall">
	* The MOD-t:
	<br/><img src="images/guides/slic3r/MOD-tSettings.png" alt="Mod-tSettings" class="growPicSmall">
2. Click `Export G-code...`
	* For the <span style="color:red">red printer</span> save it to an SD card (Make sure you wait for the G-code to export before ejecting *<span style="color:lime">Highlighted in green</span>*)
	<br/><img src="images/guides/slic3r/Exporting.png" alt="Exporting" class="growPicSmall">
	* For the MOD-t save it to a convenient location where you can find it later for use with the MOD-t utility.