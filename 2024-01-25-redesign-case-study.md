---
title: "Case Study #2 (Problem Solving)"
date: 2023-10-18 14:52:00:00 +00:00
author: Scott
layout: post
image: /assets/img/icons/puzzle.svg
icon: puzzle
tags: casestudy, testing, design
---

<h2>Summary</h2>

Giki Zero is an employee engagement platform that allows staff to calculate their individual carbon footprint and take sustainable steps to lower it. Often, challenges are run where users can compete to see who can take the most steps. Below is an example of one of the many design solutions I was responsible for implementing on this product.

Previously, the only way to join a team was through the Join Teams page which users would often ignore. To try and resolve this, Giki introduced a ‘compulsory teams’ setting that would force a user onto the Join Teams page where a user would then need to select their team before they could access any other Pro functionality on the platform. The problem here was that users would often join the wrong team or none at all and then stop engaging with the platform altogether. They had also tested various ideas such as introducing this during the onboarding process or as a pop up which all failed to solve the problem. This was identified through the complaints of admin users and backed up by data. 

I was tasked to resolve this issue and to find a way that would get users into the correct team without interfering with the users engagement.

<img src="/assets/img/jointeams.png"/>

<h2>Problem Statement</h2> 

As an organisation, I want users sorted into their correct teams because they currently aren’t joining when prompted.

<h2>Approach</h2>

My first task was to break down the problem statement into the different issues that would need to be solved as part of this project. This required defining the type of users that were likely to be impacted by this problem, developing user personas with the needs and requirements of each.

* How can we ensure new users join the correct team when signing up?
* How can we ensure existing users are sorted into the correct team after already signing up?
* How can we ensure the engagement of all users isn’t impacted by the changes made?
* How can we ensure all types of users join the correct teams?

My next task was to carry out market research on platforms that have similar functionality. This led me to discover that, in the vast majority of cases, the assignment of teams is the responsibility of an admin user and not the user themselves which played a large role in changing the spec. 

By updating the problem statement, I was able to establish control over the team assignment, as well as keeping with the original requirements by not interfering with user engagement and simplifying the problem breakdown: 

* How can we give an admin user the ability to assign a new user to a team?
* How can we give an admin user the ability to assign existing users to a team?

In order to assign new users to a team, I reviewed the user flow to establish the best place for these updates to feature and referred to the engineering team to find out any limitations before testing wireframe concepts with existing admin users where users would be assigned a team at the invitation stage. I also tested ways for admin users to edit and assign teams to existing users before settling on the agreed solution below:

<div class="imgblock">
    <img src="/assets/img/wireframecasestudy.png"/>
</div>

<h2>Results</h2>

After implementing the signed off designs there was a significant decrease in the number of users not assigned to a team and team related complaints dropped from several times per month to zero. Client satisfaction also improved and a new potential sales opportunity was identified in which team specific challenges could now be integrated. This would allow Giki to sell challenges to individual teams within an organisation. For me the most interesting part of this experience was the research phase and learning to think outside the box and see the problem from a new perspective. 

<div class="gifblock">
    <img src="/assets/img/casestudy.gif" class="gif"/>
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
			<img src="/assets/img/zero1.jpg" class="portfolioimg" alt="image01">
		</a>
        <div class="lb-overlay" id="image-6">
            <img src="/assets/img/zero1.jpg" alt="image01" />
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
