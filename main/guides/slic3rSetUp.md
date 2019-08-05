---
title: Slic3r
description: How to install Slic3r (Win/Mac/Linux)
img: /assets/images/EarlyHotB.jpg
---
<style>
	li { padding: 5px; }
</style>
<a href="." class="guideBack">< Back to Guides</a>

## Installing Slic3r (you can't do this on a school iPad)
---
1. Go to the <span id="slic3rDownload"></span> and download the top file
2. Install the downloaded program
3. Download the <a href="/assets/files/BEASTBotSlic3r.ini" download="BEASTBotSlic3r.ini">BEASTBot Slic3r config</a>
4. Open `Slic3r`
5. In Slic3r, click `File`, then click `Load Config Bundle...`
6. In the file explorer window, go to `Downloads`, then choose `BEASTBotSlic3r.ini`

<script>
	var OSName = '';
	if (window.navigator.userAgent.indexOf('Windows NT') != -1) OSName='<a href="https://dl.slic3r.org/dev/win/" target="_blank">Slic3r Download Page</a>';
	else if (window.navigator.userAgent.indexOf('Mac') != -1) OSName='<a href="https://dl.slic3r.org/dev/mac/" target="_blank">Slic3r Download Page</a>';
	else if (window.navigator.userAgent.indexOf('Linux') != -1) OSName='<a href="https://dl.slic3r.org/dev/linux/" target="_blank">Slic3r Download Page</a>';
	else OSName='<a href="https://dl.slic3r.org/dev/" target="_blank">Slic3r Download Page</a>';
	document.getElementById("slic3rDownload").innerHTML = OSName;
</script>

##Defaults for the red 3D Printer are:
---
* 0.20mm NORMAL (Cougar Default)
* Generic PLA 1.75mm *(When printing with PLA)*
* Generic ABS 1.75mm *(When printing with ABS)*
* Cougar1

## Defaults for the MOD-t 3D Printer are:
---
* 200µm-HQ-2mm-no sup
* Generic PLA 1.75mm
* MOD-t