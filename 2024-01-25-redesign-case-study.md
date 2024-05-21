---
title: "Case Study #2 (Redesign)"
date: 2024-01-25 14:52:00:00 +00:00
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

After implementing the signed off designs there was a significant decrease in the number of users not assigned to a team and team related complaints dropped from several times per month to zero. Client satisfaction also improved and a new potential sales opportunity was identified in which team specific challenges could now be integrated. This would allow Giki to sell challenges to individual teams within an organisation.

<div class="gifblock">
    <img src="/assets/img/casestudy.gif" class="gif"/>
</div>
