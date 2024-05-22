---
title: "Case Study #3 (New Product)"
date: 2024-03-15 14:52:00:00 +00:00
author: Scott
layout: post
image: /assets/img/icons/puzzle.svg
icon: puzzle
tags: casestudy, design, theory
---

<h2>Summary</h2>

Giki ES3 is an admin tool that allows organizations to gather data on employee scope 3 emissions (remote working and commuting). This tool allows users to gather and track emissions over time, advising on the best approach to lower their organization carbon footprint. I played a leading role in conceptualising the product requirements, developing the user flow and designing the overall product.

<div class="imgblock">
    <img src="/assets/img/es3screens.png"/>
</div>

<h2>Problem Statement</h2> 

As an organisation, I want to easily be able to gather data on employee scope 3 emissions and track the progress of changes over time

<h2>Approach</h2>

After identifying the need for such a tool by interviewing the sustainability teams of various organizations, we started by defining the different use cases that were likely to be required. Once we had the different user personas and requirements gathered we were able to determine the platform necessary for achieving our goals: 

* Admin tool - Web application for creating, managing and reviewing survey applications for admin users (used primarily on desktop browsers)
* Survey tool - Web survey for employees (used on both mobile and desktop browsers) 

The next step was to flesh out the user flow based on the different types of users and test this to ensure it met all user requirements: 

* Giki Admins (Users who have access to all organizations)
* Org Admins (Users who have access to only their own organization) 
* Employees (Users who will only use the survey and not the admin site)

After determining the high and low priority areas of functionality for the MVP, we were able to test various wireframe solutions and mock up a UI prototype in order to test the different use cases.

<h2>Results</h2>

TBC

<div class="gifblock">
    <img src="/assets/img/es3demo.gif" class="gif"/>
</div>

<style>
.lb-album{
	width: 100%;
    display: table;
	margin: 0 auto;
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
	position: relative;
	padding: 10px;
	background: #F5F5F5;
	border-radius: 16px;
    margin-bottom: 20px;
}

.lb-album li > a span{
	position: absolute;
	width: 150px;
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
	z-index: 999999;
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
	width: 145px;
	height: 23px;
	overflow: hidden;
	margin-left: -55px;
	opacity: 0;
    font-family: HKGrotesk-Medium;
}

.lb-overlay a.lb-close: hover{
    text-decoration: underline;
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

.portfolio1 h2 {
    margin-bottom: 20px;
}

.portfolio1 {
    margin-bottom: 20px;
}

.portfolioimg {
    max-height: 100%;
}

.lb-album li > a, .lb-album li > a img {
    margin: 0 auto;
}

.portfoliomobile {
    max-width: 350px;
}

.quotes {
    list-style-type: none;
    padding: 0;
    margin-top: 20px;
    margin-left: 0px;
}

.quotes li {
    list-style-type: none;
    font-family: HKGrotesk-Bold !important;
    
}

hr {
    margin: 40px auto;
    border: 0.5px solid #d1d1d1;
}

@media only screen and (min-device-width : 0px) and (max-device-width : 480px) and (orientation : portrait) { 

.lb-album li > a {
    width: 105px;
    height: 105px; 
    margin-bottom: 20px !important;
}

.lb-overlay:target img {
	animation: fadeInScale 1.2s ease-in-out;
    margin-top: 80px;
    width: 95% !important;
}

.lb-overlay a.lb-close {
    top: 30px;
}

.lb-overlay:target {
    padding: 0px;
    z-index: 99999;
}

}

</style>

<ul class="lb-album">
	<li>
		<a href="#image-6">
			<img src="/assets/img/es1.png" class="portfolioimg" alt="image01">
		</a>
        <div class="lb-overlay" id="image-6">
            <img src="/assets/img/es1.png" alt="image01" />
            <a href="#page" class="lb-close">Return to Case Study</a>    
        </div>
	</li>
	<li>
		<a href="#image-7">
			<img src="/assets/img/es2.jpg" class="portfolioimg" alt="image01">
		</a>
        <div class="lb-overlay" id="image-7">
            <img src="/assets/img/es2.jpg" alt="image01" />
            <a href="#page" class="lb-close">Return to Case Study</a>    
        </div>
	</li>
    	<li>
		<a href="#image-8">
			<img src="/assets/img/es3.jpg" class="portfolioimg" alt="image01">
		</a>
        <div class="lb-overlay" id="image-8">
            <img src="/assets/img/es3.jpg" class="portfoliomobile" alt="image01" />
            <a href="#page" class="lb-close">Return to Case Study</a>    
        </div>
	</li>
    	<li>
		<a href="#image-9">
			<img src="/assets/img/es4.jpg" class="portfolioimg" alt="image01">
		</a>
        <div class="lb-overlay" id="image-9">
            <img src="/assets/img/zero4.jpg" alt="image01" />
            <a href="#page" class="lb-close">Return to Case Study</a>    
        </div>
	</li>
</ul>
