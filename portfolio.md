---
layout: page
title: "Portfolio"
---
<style>
.lb-album{
	width: 100%;
	margin: 0 auto;
	font-family: 'BebasNeueRegular', 'Arial Narrow', Arial, sans-serif;
}
.lb-album li{
	float: left;
	margin: 5px;
	position: relative;
}
.lb-album li > a,
.lb-album li > a img{
	display: block;
}
.lb-album li > a{
	width: 150px;
	height: 150px;
	position: relative;
	padding: 10px;
	background: #F5F5F5;
	box-shadow: 1px 1px 2px #fff, 1px 1px 2px rgba(158,111,86,0.3) inset;
	border-radius: 4px;
}

.lb-album li > a span{
	position: absolute;
	width: 150px;
	height: 150px;
	top: 10px;
	left: 10px;
	text-align: center;
	line-height: 150px;
	color: rgba(27,54,81,0.8);
	text-shadow: 0px 1px 1px rgba(255,255,255,0.6);
	font-size: 24px;
	opacity: 0;
	background: 
		radial-gradient(
			center, 
			ellipse cover, 
			rgba(255,255,255,0.56) 0%,
			rgba(241,210,194,1) 100%
		);
	transition: opacity 0.3s linear;
}
.lb-album li > a:hover span{
	opacity: 1;
}

.lb-overlay{
	width: 0px;
	height: 0px;
	position: fixed;
	overflow: hidden;
	left: 0px;
	top: 0px;
	padding: 0px;
	z-index: 99;
	text-align: center;
	background: 
		radial-gradient(
			center, 
			ellipse cover, 
			rgba(255,255,255,0.56) 0%,
			rgba(241,210,194,1) 100%
		);
}

.lb-overlay > div{
	position: relative;
	color: rgba(27,54,81,0.8);
	width: 550px;
	height: 80px;
	margin: 40px auto 0px auto;
	text-shadow: 0px 1px 1px rgba(255,255,255,0.6);
}
.lb-overlay div h3,
.lb-overlay div p{
	padding: 0px 20px;
	width: 200px;
	height: 60px;
}
.lb-overlay div h3{
	font-size: 36px;
	float: left;
	text-align: right;
	border-right: 1px solid rgba(27,54,81,0.4);
}
.lb-overlay div h3 span,
.lb-overlay div p{
	font-size: 16px;
	font-family: Constantia, Palatino, serif;
	font-style: italic;
}
.lb-overlay div h3 span{
	display: block;
	line-height: 6px;
}
.lb-overlay div p{
	font-size: 14px;
	text-align: left;
	float: left;
	width: 260px;
}

.lb-overlay a.lb-close{
	background: rgba(27,54,81,0.8);
	z-index: 1001;
	color: #fff;
	position: absolute;
	top: 100px;
	left: 50%;
	font-size: 15px;
	line-height: 26px;
	text-align: center;
	width: 50px;
	height: 23px;
	overflow: scroll;
	margin-left: -25px;
	opacity: 0;
	box-shadow: 0px 1px 2px rgba(0,0,0,0.3);
}

.lb-overlay:target {
	width: auto;
	height: auto;
	bottom: 0px;
	right: 0px;
	padding: 80px 100px 120px 100px;
    background: #F5F5F5;
}

.lb-overlay:target img,
.lb-overlay:target a.lb-close{
	opacity: 1;
}

.clearfix {
  overflow: auto;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

.lb-overlay:target img {
	animation: fadeInScale 1.2s ease-in-out;
    margin-top: 55px;
    width: 800px !important;
}
@keyframes fadeInScale {
  0% { transform: scale(0.6); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}
</style>
<ul class="lb-album">
	<li>
		<a href="#image-1">
			<img src="/assets/img/designsystems.png" alt="image01">
			<span>Pointe</span>
		</a>
        <div class="lb-overlay" id="image-1">
            <img src="/assets/img/designsystems.png" alt="image01" />
            <div>
                <h3>pointe</h3>
                <p>Dance performed on the tips of the toes</p>
            </div>
            <a href="#page" class="lb-close">Close</a>    
        </div>
	</li>
	<li> 
		<!-- ... --> 
	</li>
    <div class="clearfix"></div>
</ul>