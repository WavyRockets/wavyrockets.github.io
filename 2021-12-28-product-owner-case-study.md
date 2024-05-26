---
title: "Case Study #1 (Product Owner)"
date: 2021-10-18 14:52:00:00 +00:00
author: Scott
layout: post
image: /assets/img/icons/puzzle.svg
icon: puzzle
tags: casestudy, testing, design
---

<h2>Summary</h2>

Boost Test Planner (AKA NightRider) was an automated testing platform designed specifically for testing cinema websites for the Boost devision of the Box Office Company. Tests covered everything from ticketing, concessions, seating, gift cards and loyalty accounts.

Test Planner began solely as an internal project for the Boost ticketing platform that was used by over 100 cinema chains worldwide. As they were all using the same code with branding and custom features enabled via a CMS, I pointed out that automated tests could be used to ensure all the different scenarios were being tested with each deployment. After setting these up, these proved successful and it wasn't long before I was asked to demo the tests to the CTO of a major cinema chain in the UK who expressed an interest in buying into the idea if we chose to expand on it. 

For developing the idea into a client facing interface, I was made responsible for conceptualising the product functionality, developing the product roadmap and designing the user flow and user interface. 

<h2>Problem Statement</h2> 

As an organisation, I want to be able to schedule automated tests for my cinema website that are tailored to my specific user journey

<h2>Approach</h2>

As I already had the automated tests set up to cover the different scenarios running through the consol, the challenge then became developing the user interface that would enable users with less techincal abilities to use the product. I began by speaking with cinemas externally as well as the internal QA team to identify the use cases. I then reviewed existing automated testing platforms to get an idea of the user flow and broke down the different requirements:

• It would need to be used internally for scheduling tests for multiple cinemas.<br>
• It would need to be used externally for scheduling tests for individual cinemas.<br>
• It would need to be used both internally and externally for viewing and comparing test results.

This allowed me to prioritise the roadmap based on what I currently had vs what I considered to be a finished product. This was broken down in such a way that would allow me to release parts of the product sooner rather than later but would also allow for me to scale it up as it grew. 

• Develop a prototype user interface where an internal user could log in and view the test results for multiple cinema chains. <br>
• Develop a dashboard for external users to access their test results to track the progress of any bugs identified with the product. <br> 
• Expand the tests so they covered more scenarios ranging from the different payment providers to booking fees etc. <br>
• Integrate the ability to schedule and run tests through the dashboard for internal users so they no longer relied on the tests being run through the consol. <br>
• Make the scheduling and running of tasks available to external users.

<div class="imgblock">
    <img src="/assets/img/nightrider3.jpg"/>
    A visual representation of the Test Planner roadmap
</div>

<h2>Results</h2>

The Boost Test Planner proved a highly successful internal tool that showed great potential for becoming an external product we could sell to the masses. Unfortunately, before we were able to reach the stage where we could sell this externally, the COVID pandemic hit cinemas worldwide and the company were no longer able to invest in the product as they moved their focus towards trying keep cinemas open. 

For me the most enjoyable part of the experience was the enthusiam others had for what started out as a personal project of mine that grew into it's own team. The biggest challenge, however, was finding the balance between a tool that could be used internally by developers with a techincal background and those external users with no initial understanding of the process. 

The experience of conceptualising and designing this product is what inspired me to move forward as a product designer with Giki and expand my design skills further. 

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
    text-decoration: underline;
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
			<img src="/assets/img/nightrider1.jpg" class="portfolioimg" alt="image01">
		</a>
        <div class="lb-overlay" id="image-6">
            <img src="/assets/img/nightrider1.jpg" alt="image01" />
            <a href="#page" class="lb-close">Return to Case Study</a>    
        </div>
	</li>
	<li>
		<a href="#image-7">
			<img src="/assets/img/nightrider2.jpg" class="portfolioimg" alt="image01">
		</a>
        <div class="lb-overlay" id="image-7">
            <img src="/assets/img/nightrider2.jpg" alt="image01" />
            <a href="#page" class="lb-close">Return to Case Study</a>    
        </div>
	</li>
</ul>
