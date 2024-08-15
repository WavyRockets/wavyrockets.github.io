---
title: "Case Study #3 (Problem Solving)"
date: 2023-10-18 14:52:00:00 +00:00
author: Scott
layout: post
image: /assets/img/icons/puzzle.svg
icon: puzzle
tags: casestudy, testing, design
---

<h2>Summary</h2>

Giki Zero is an employee engagement platform that uses steps for lowering your carbon footprint to encourage engagement within organizations. A step's status can be categorised as either Trying, Already do this, or Not Applicable. These allow users to accurately track their progress on the platform.

While competitions are a common feature on the Giki Zero platform, there has long been a problem with cheating. This occurs in a number of ways but most commonly when users take on more steps than are realistically achieveable. This is most frequently reported by organizations themselves, particuarly when a prize is offered outside of the product for the user that commits to the most steps.

<div class="imgblock">
    <img src="/assets/img/finisheddesigns.png"/>
    A UI representation of the design solution implemented on the website
</div>

<h2>Problem Statement</h2> 

As an organisation, I want measures to be taken that will make it harder for users to cheat during a competition.

<h2>Approach</h2>

My first task was to meet with the engineering team in order to brainstorm the different solutions that were technically possible on the platform. From this session we idenfied 5 possible solutions of different levels of difficulty: 

• Create a hard time limit custom to each step that will prevent the user completing a step currently in progress until the set time has passed
• Create a soft time limit custom to each step that will alert the user they are completing the step too quickly and recommend assiging a step status of 'Already do this'
• Implement a step count that would prevent users from completing more than a certain amount of steps per day
• Implement a rule that would prevent users from having too many steps in progress at the one time
• Implement a feature that would allow admin users to flag suspicious activity that would remove the account from the competition leaderboards until further notice

My next task was to identify all the different areas likely to be affected by each solution and how these would impact the different types of users. From here, I was able to create wireframes for the different ideas that were initially presented to the Product Owner and Head of Product explaining the user flow and level of difficulty for each of the solutions. After providing feedback, we then identified the best solutions to take forward to the organizations by performing a risk and reward assessment to measure the impact and effort required.

<div class="imgblock">
    <img src="/assets/img/wireframecheating.png"/>
    A visual representation of the high-fidelity wireframe concepts we used for testing 
</div>

After organizations provided feedback on the presented solutions, this was implemented and tested before UI designs were created.

<h2>Timescale</h2>

Brainstorming solutions: 1 day
Research and initial wireframing: 2 weeks 
Gathering and implementing feedback: 2 weeks
Risk and reward assessment: 1 day
UI designs: 1 week

<h2>Results</h2>

[...]

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
	width: 103px;
	position: relative;
	padding: 10px;
	background: #F5F5F5;
	border-radius: 16px;
    margin-bottom: 20px;
}

.lb-album li > a span{
	position: absolute;
	width: 103px;
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
    width: 80px;
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
			<img src="/assets/img/zero1.png" class="portfolioimg" alt="image01">
		</a>
        <div class="lb-overlay" id="image-6">
            <img src="/assets/img/zero1.png" alt="image01" />
            <a href="#page" class="lb-close">Return to Case Study</a>    
        </div>
	</li>
	<li>
		<a href="#image-7">
			<img src="/assets/img/zero2.png" class="portfolioimg" alt="image01">
		</a>
        <div class="lb-overlay" id="image-7">
            <img src="/assets/img/zero2.png" alt="image01" />
            <a href="#page" class="lb-close">Return to Case Study</a>    
        </div>
	</li>
    	<li>
		<a href="#image-8">
			<img src="/assets/img/zero3.png" class="portfolioimg" alt="image01">
		</a>
        <div class="lb-overlay" id="image-8">
            <img src="/assets/img/zero3.png" alt="image01" />
            <a href="#page" class="lb-close">Return to Case Study</a>    
        </div>
	</li>
    	<li>
		<a href="#image-9">
			<img src="/assets/img/zero4.jpg" class="portfolioimg" alt="image01">
		</a>
        <div class="lb-overlay" id="image-9">
            <img src="/assets/img/zero4.jpg" alt="image01" />
            <a href="#page" class="lb-close">Return to Case Study</a>    
        </div>
	</li>
        	<li>
		<a href="#image-10">
			<img src="/assets/img/zero5.png" class="portfolioimg" alt="image01">
		</a>
        <div class="lb-overlay" id="image-10">
            <img src="/assets/img/zero5.png" class="portfoliomobile" alt="image01" />
            <a href="#page" class="lb-close">Return to Case Study</a>    
        </div>
	</li>
</ul>
