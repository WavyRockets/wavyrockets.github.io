---
layout: page
title: "Portfolio"
---
<style>
.lb-album{
	width: 100%;
    display: table;
	margin: 0 auto;
	font-family: 'BebasNeueRegular', 'Arial Narrow', Arial, sans-serif;
    list-style-type: none;
    margin-top: 20px;

}
.lb-album li{
	float: left;
	margin-right: 20px;
	position: relative;
    list-style-type: none;
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
	border-radius: 16px;
    margin-bottom: 20px;
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
	z-index: 1001;
	color: #000000;
	position: absolute;
	top: 100px;
	left: 50%;
	font-size: 15px;
	line-height: 26px;
	text-align: center;
	width: 126px;
	height: 23px;
	overflow: hidden;
	margin-left: -55px;
	opacity: 0;
    font-family: HKGrotesk-Medium;
}

.lb-overlay:target {
	width: auto;
	height: auto;
	bottom: 0px;
	right: 0px;
	padding: 80px 100px 120px 100px;
    background: #F5F5F5;
    overflow: scroll;
}

.lb-overlay:target img,
.lb-overlay:target a.lb-close{
	opacity: 1;
}

.lb-overlay:target img {
	animation: fadeInScale 1.2s ease-in-out;
    margin-top: 55px;
    width: 60% !important;
}

@keyframes fadeInScale {
  0% { transform: scale(0.6); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

.portfolio1 {
    border: 1px solid #000000;
    border-radius: 16px;
    padding: 20px;
    margin-bottom: 20px;
}

.portfolioimg {
    max-height: 100%;
}

.lb-album li > a, .lb-album li > a img {
    margin: 0 auto;
}

@media only screen and (min-device-width : 0px) and (max-device-width : 480px) and (orientation : portrait) { 

.lb-album li > a {
    width: 105px;
    height: 105px; 
    margin-bottom: 20px !important;
}

.lb-overlay:target img {
	animation: fadeInScale 1.2s ease-in-out;
    margin-top: 180px;
}

.lb-overlay a.lb-close {
    top: 130px;
}

.lb-overlay:target {
    padding: 0px;
}

}

</style>
<div class="portfolio1">
<h2>Giki Zero: Employee Engagement Platform</h2> 

Giki Zero is an employee engagement platform that allows staff to calculate their individual carbon footprint and take sustainable steps to lower it. Often, challenges are run where users can compete to see who can take the most steps. I was responsible for designing new functionality, redesigning old functionality and interpreting user feedback into functioning design solutions. 

<ul class="lb-album">
	<li>
		<a href="#image-1">
			<img src="/assets/img/zero1.jpg" class="portfolioimg" alt="image01">
		</a>
        <div class="lb-overlay" id="image-1">
            <img src="/assets/img/zero1.jpg" alt="image01" />
            <a href="#page" class="lb-close">Return to Portfolio</a>    
        </div>
	</li>
	<li>
		<a href="#image-2">
			<img src="/assets/img/zero2.png" class="portfolioimg" alt="image01">
		</a>
        <div class="lb-overlay" id="image-2">
            <img src="/assets/img/zero2.png" alt="image01" />
            <a href="#page" class="lb-close">Return to Portfolio</a>    
        </div>
	</li>
    	<li>
		<a href="#image-3">
			<img src="/assets/img/zero3.png" class="portfolioimg" alt="image01">
		</a>
        <div class="lb-overlay" id="image-3">
            <img src="/assets/img/zero3.png" alt="image01" />
            <a href="#page" class="lb-close">Return to Portfolio</a>    
        </div>
	</li>
    	<li>
		<a href="#image-5">
			<img src="/assets/img/zero5.png" class="portfolioimg" alt="image01">
		</a>
        <div class="lb-overlay" id="image-5">
            <img src="/assets/img/zero5.png" alt="image01" />
            <a href="#page" class="lb-close">Return to Portfolio</a>    
        </div>
	</li>
    <li>
		<a href="#image-4">
			<img src="/assets/img/zero4.jpg" class="portfolioimg" alt="image01">
		</a>
        <div class="lb-overlay" id="image-4">
            <img src="/assets/img/zero4.jpg" alt="image01" />
            <a href="#page" class="lb-close">Return to Portfolio</a>    
        </div>
	</li>
</ul>
</div>
<div class="portfolio1">
<h2>Giki ES3: Scope 3 Emissions Service</h2> 

Giki ES3 is an admin tool that allows organizations to gather data on employee scope 3 emissions (remote working and commuting). This tool would allow users to gather and track emissions over time, advising on the best approach to lower their organization carbon footprint. I played a large role in conceptualising the product requirements, developing the user flow and designing the overall product.

<ul class="lb-album">
	<li>
		<a href="#image-6">
			<img src="/assets/img/designsystems.png" class="portfolioimg" alt="image01">
		</a>
        <div class="lb-overlay" id="image-6">
            <img src="/assets/img/designsystems.png" alt="image01" />
            <a href="#page" class="lb-close">Return to Portfolio</a>    
        </div>
	</li>
	<li>
		<a href="#image-7">
			<img src="/assets/img/designsystems.png" class="portfolioimg" alt="image01">
		</a>
        <div class="lb-overlay" id="image-7">
            <img src="/assets/img/designsystems.png" alt="image01" />
            <a href="#page" class="lb-close">Return to Portfolio</a>    
        </div>
	</li>
    	<li>
		<a href="#image-8">
			<img src="/assets/img/designsystems.png" class="portfolioimg" alt="image01">
		</a>
        <div class="lb-overlay" id="image-8">
            <img src="/assets/img/designsystems.png" alt="image01" />
            <a href="#page" class="lb-close">Return to Portfolio</a>    
        </div>
	</li>
    	<li>
		<a href="#image-9">
			<img src="/assets/img/designsystems.png" class="portfolioimg" alt="image01">
		</a>
        <div class="lb-overlay" id="image-9">
            <img src="/assets/img/designsystems.png" class="portfolioimg" alt="image01" />
            <a href="#page" class="lb-close">Return to Portfolio</a>    
        </div>
	</li>
    	<li>
		<a href="#image-10">
			<img src="/assets/img/designsystems.png" class="portfolioimg" alt="image01">
		</a>
        <div class="lb-overlay" id="image-10">
            <img src="/assets/img/designsystems.png" alt="image01" />
            <a href="#page" class="lb-close">Return to Portfolio</a>    
        </div>
	</li>
</ul>
</div>
<div class="portfolio1">
<h2>Boost Test Planner: Automated Testing Platform</h2> 

Test Planner was a custom automated testing platform for the Box Office Company (Boost division) designed specifically for testing cinema websites. Tests ranged from ticketing, concessions, seating, gift cards and loyalty accounts. I was responsible for conceptualising the idea, planning the roadmap and designing the product. 

<ul class="lb-album">
	<li>
		<a href="#image-11">
			<img src="/assets/img/nightrider1.jpg" class="portfolioimg" alt="Homepage">
		</a>
        <div class="lb-overlay" id="image-11">
            <img src="/assets/img/nightrider1.jpg" alt="Homepage" />
            <a href="#page" class="lb-close">Return to Portfolio</a>    
        </div>
	</li>
	<li>
		<a href="#image-12">
			<img src="/assets/img/nightrider2.jpg" class="portfolioimg" alt="Comparison">
		</a>
        <div class="lb-overlay" id="image-12">
            <img src="/assets/img/nightrider2.jpg" alt="Comparison" />
            <a href="#page" class="lb-close">Return to Portfolio</a>    
        </div>
	</li>
    	<li>
		<a href="#image-13">
			<img src="/assets/img/nightrider3.jpg" class="portfolioimg" alt="Roadmap">
		</a>
        <div class="lb-overlay" id="image-13">
            <img src="/assets/img/nightrider3.jpg" alt="Roadmap" />
            <a href="#page" class="lb-close">Return to Portfolio</a>    
        </div>
	</li>

</ul>
</div>
