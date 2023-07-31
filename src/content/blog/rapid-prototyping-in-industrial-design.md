---
title: "Rapid Prototyping in Industrial Design"
snippet: "Customer needs are found through either speaking with potential customers, existing clients or drawn from personal experiences. Market and technical research are done to determine what viable solutions and competition exist currently. Each product design identified is evaluated against a scale that includes a few of the team’s techniques on how the problem may be approached."
image: {
  src: "https://miro.medium.com/max/1400/0*nrqjmvU4IHansbR7", 
  alt: "Hand holding pencil creating sketches."
}
author: "Henry Cabral"
publishDate: "2020-12-02"
tags: [rapid-prototyping, design, development]
category: "Articles"
draft: false
---

<div class="ox-hugo-toc toc">
<div></div>

<div class="heading">Table of Contents</div>

- [Introduction](#introduction)
- [Identifying the need](#identifying-the-need)
- [Case study — Sensor bracket](#case-study--sensor-bracket)
  - [Problem](#problem)
  - [Initial Design](#initial-design)
- [Rapid Prototyping](#rapid-prototyping)
  - [Rapid Development Techniques](#rapid-development-techniques)
  - [Choosing which 3D printing process to use](#choosing-which-3d-printing-process-to-use)
  - [Fabrication](#fabrication)
  - [Testing \& Refinement](#testing--refinement)
- [Closing Words](#closing-words)

</div>
<!--endtoc-->

<div class="post-image">
  <img src="https://miro.medium.com/max/1400/0*nrqjmvU4IHansbR7" alt="Hand holding pencil creating sketches."/>
  Photo by <a href="https://unsplash.com/@louismornaud?utm_source=medium&utm_medium=referral">Louis Mornaud</a> on <a href="https://unsplash.com/?utm_source=medium&utm_medium=referral">Unsplash</a>
</div>

## Introduction

**Developing products is an iterative process** that encompasses several stages: generating ideas that satisfy a need, sketching adequate designs suited to validate the product requirements, prototype solutions that can be tested and iterated upon, and finally ending with a [Minimal Viable Product (MVP)](http://www.startuplessonslearned.com/2009/08/minimum-viable-product-guide.html) ready to be manufactured at a large scale.

For this article, I will go through one of the solutions I worked on that solved a need in my workplace. Several key areas in my process include:

- Identifying the need — How the need was discovered and how to base requirements on the need
- Initial Design — Sketch and refined design using software
- Rapid Prototyping— Physical creation of proposed design solution through the use of Additive Manufacturing Process equipment (3D Printers)
- Testing and Refinement — Which design features work? Which do not? And how can we improve upon what we already have?

## Identifying the need

The need is, in essence, the problem but rearranged into what the customer wants.

> Customer needs are found through either speaking with potential customers, existing clients or drawn from personal experiences. Market and technical research are done to determine what viable solutions and competition exist currently. Each product design identified is evaluated against a scale that includes a few of the team’s techniques on how the problem may be approached.

[Design with Purpose](https://uxdesign.cc/how-to-design-prototypes-with-purpose-344a8f057dc6) goes into further detail on identifying needs and why the conception phase of a product is the most important part of any product development process.

Imagine you are going to the beach during the summer (hopefully after COVID-19 passes). You get there and realize that the sun is blazing hot that day and you forgot sunscreen. Now, you’re forced into two questions: *Should I find the nearest store and buy sunscreen, or should I tough it out and stay put.* I hope anyone in this situation always chooses to find the nearest store and buy sunscreen for [various reasons](https://www.ehe.health/blog/always-wear-sunscreen#:~:text=It%20Protects%20Your%20Skin%20from,reducing%20the%20likelihood%20of%20sunburn.&text=It%20Lowers%20Your%20Skin%20Cancer,cancer%20in%20the%20United%20States.).

The problem here is not having sunscreen or a way of protecting your skin from the sun. The need is a way to protect your skin from direct exposure to sunlight. *See how closely related these two are?*

Let’s start by going over a quick analysis of the situation by identifying the problem and need. Typically I walk through what the issue is specifically. I usually rewrite the problem on my own terms with as much specificity as possible to ensure that I know exactly what needs to be solved. In parallel, I start generating requirements or possible guidelines using the needs. This means translating the need into tangible requirements:

- Electrical
- Mechanical
- Software
- Physical
- Environmental
- Safety

Transferring a problem into a need is the first step.

Let’s move on to a real example I encountered recently this month.

## Case study — Sensor bracket

<div class="post-image">
  <img src="https://miro.medium.com/max/1100/1*Z2_xcWMR3LjNXReLJTF_VA.webp" alt="Mechanical drawing of SCARA robot in three different views: Side, Front and Isometric." title="Drawing of SCARA Robot by Author"/>Drawing of SCARA Robot by Author
</div>

### Problem

One of my projects involved a SCARA robot (Selective Compliance Assembly Robot Arm or Selective Compliance Articulated Robot Arm), which was tasked to imprint features on our products. The robot is an individual module, part of a much larger machine used to [3D print dosage-form tablets](https://www.aprecia.com/). The robot’s software governs the positional accuracy and feeds its position back to the operator in real-time.

However, there was one problem.

During production, operators will interact with the robot to ensure proper imprinting is done on the product. If the robot were not accounted for spatially, the software’s established emergency checks would not stop the robot from moving, causing safety issues for the operator and manufacturing equipment.

***In essence, how do we register the robot's position during on and off operational use? We needed a way to detect the robot's position at home and away from home (in-action) position. Can we attach something to the robot, or would we need another solution?***

The problem is: How do we register the robot’s position? The need is: Register the robot’s position (inactive or active) at all times.

To determine its position, we found a laser position sensor that detects what position something is in. Once the robot was out of the sensor’s detectable range, the measurement feedback was sent to the software showing that the robot was in action. Conversely, if the robot was within the detectable range, it was deemed in its home position and out of action.

Finding the sensor was step one of the solution. Now I had to make sure that the sensor had a home.

*How can I attach the sensor to the robot to allow for positional feedback at all times?*

This leads me to another question (because I clearly haven’t asked enough yet): What can we infer and determine from the problem/need?

- We need a holder or some bracket to place the sensor on.
- The holder or bracket should live on the robot.
- The sensor needs to pick up the position of the robot.

I looked at the manufacturer’s website for recommendations on brackets compatible with the sensor, but the design was not suitable for this application. I needed to ensure the sensor can fit the [robot’s T-slot extrusion](https://www.google.com/search?q=scara+t-slot+extrusion&rlz=1C9BKJA_enUS925US925&hl=en-US&prmd=isvn&sxsrf=ALeKk02lCJWMKF5wy4kBhHg3UsDkBi1ejQ:1606788283120&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjLoeDm2KvtAhUkGVkFHTvsAoYQ_AUoAXoECAMQAQ#imgrc=SZCls7hXuC_tWM). Another requirement was the position of the bracket. The position governed how the sensor would read the robot’s mechanical frame. This had to be somewhat precise enough to be identified in the detectable range of the sensor.

As I went along the thought process, I transferred these questions and answers into the design phase.

### Initial Design

The simplest way to solve this issue, given the needs, was to create a bracket that mounts to the robot’s backside. This bracket will keep the sensor static, allowing for detection of the robot’s position to be determined either at home or in action.

I started to work on a sketch of what the bracket could look like:

<div class="post-image">
  <img src="https://miro.medium.com/max/1100/1*Z2_xcWMR3LjNXReLJTF_VA.webp" alt="Mechanical drawing of SCARA robot in three different views: Side, Front and Isometric." title="Quick sketch of a bracket by Author"/>Sketch of bracket of Author
</div>

*Beautiful sketch, I know.*

You can see it’s somewhat of an L-bracket or resembles a Tetris piece (your pick) from the sketch. The reason for this is that I could not find a suitable bracket for my application. I also wanted to recycle a similar design for a similar application to speed up design and development time. *Efficiency, am I right?*

Now that the bracket’s sketch was partially figured out, further refinement of the design was needed.

The next step was transferring the idea sketch into a digital model that I can manipulate further. The following design was created via Solidworks Computer-Aided-Design (CAD) software.

<div class="post-image">
  <img src="https://miro.medium.com/max/1100/1*EgxJ4yM7_KF9_OyPHS6Vtw.webp" alt="Drawing of sensor bracket by Author showing three views: Front, Side and Isometric." title="Drawing of sensor bracket by Author showing three views: Front, Side and Isometric."/>Drawing of sensor bracket by Author showing three views: Front, Side and Isometric.
</div>

The drawing shown above represents the sensor bracket that will house the laser sensor to the SCARA robot.

Notable features of the sensor bracket include:

- M2.5x0.45 tapped through holes.
- M3 counterbore through holes for hex head machine screws
- Height of 55mm, taken from previous design

Now we move on to fabricating the bracket.

## Rapid Prototyping

According to [Protolabs](https://www.protolabs.com/resources/guides-and-trend-reports/rapid-prototyping-processes/):

> Rapid prototyping is used to manufacture parts to test for component fit and function that can aid in bringing your product to market faster than your competition. Adjustments in design, materials, size, shape, assembly, color, manufacturability, and strength can be made following the results of your testing and analysis”.

In a sense, rapid prototyping allows the creator to bring ideas to fruition by quickly developing a test concept or MVP in some cases, depending on the application.

This technique can either:

- Set you up to have an MVP or
- Create a tool fixture for a manufacturing process

Once again, the use of rapid prototyping depends on the application. By rapid prototyping, you can start to figure out the following:

- What materials is the product going to be made out of?
- What are the key design elements of the product that govern its manufacturability?
- How sustainable is the design? It ties *into the previous point*.
- How will the product interact in its application? *For example, what loads of stress will the bracket endure*.

### Rapid Development Techniques

The concept of 3D Printing or Additive Manufacturing started in the 1950s under Raymond F. Jones in “Tools of the Trade,” published as a short story in Astounding Science Fiction. Fast forward to the 1970s where Johannes F. Gottwald patented the [Liquid Metal Recorder](https://patents.google.com/patent/US3596285A/en), which “acted as a metal inkjet printer that allowed quick removal and reuse by remelting.”

This served as a foundation for 3D printing technologies today.

Enter [Fused-Deposition-Modelling](https://www.3dhubs.com/knowledge-base/introduction-fdm-3d-printing/) (FDM) and [Stereolithography](https://formlabs.com/blog/ultimate-guide-to-stereolithography-sla-3d-printing/) (SLA).

FDM-equipped printers incorporate a moving nozzle on a two-direction (typically X & Z if its Cartesian-based) axis ejects molten plastic onto a moveable platform (X & Y-axis). Each line of plastic forms a pattern that’s deposited on the platform. This is referred to as a layer. The nozzle then repeats the process per layer, creating a printed part. FDM printers hold their material in a plastic spool that exists either on or beside the machine.

SLA printers work in a similar layer by layer fashion. The difference arises in how the layers are built. Instead of depositing plastic onto a moveable platform, the platform is submerged into a bath of resin material cured using an ultraviolet laser. As each layer is built and cured, the platform moves upward to allow for the next layer space.

There are currently several [3D printing technologies](https://www.techpats.com/3d-printing-technologies-overview/) in the additive manufacturing space, making [massive strides](https://amfg.ai/industrial-applications-of-3d-printing-the-ultimate-guide/) in [various industries](https://www.autodesk.com/autodesk-university/article/Real-World-Applications-3D-Printing-2015).

### Choosing which 3D printing process to use

Before going into the fabrication of the part, there are a few things you should keep in mind when selecting a 3D printing method:

- Time to produce
- Material library selection and application (use-case)
- Complexity of design
- Material finish and dimensional accuracy

3DHubs has a fantastic guide on [Selecting the right 3D printing process](https://www.3dhubs.com/knowledge-base/selecting-right-3d-printing-process/). Protolabs’ [guide](https://www.protolabs.com/resources/guides-and-trend-reports/rapid-prototyping-processes/) on each process's differences is also important as it goes over key mechanical property differences.

### Fabrication

Taking the bracket design model and printing it was relatively straight forward, given the non-complexity of its design features.

I imported the CAD model into the slicing software, Preform, provided by Formlabs with a host of SLA machines in their pipeline. This application's printer of choice was Form 3, given its reliability, material selection, and material finish.

The settings that I generated for the print job (see image below) include:

- Layer resolution: 100um
- Resin: Grey V4
- Supports: Auto-generated with a density value of 1.00 and touchpoint size of 0.50mm. Be sure to use internal supports and a full raft.

<div class="post-image">
  <img src="https://miro.medium.com/max/1100/1*3vdc0Ty5xChOthP8Ydvc5A.webp" alt="Image of bracket, configured to print with supports using Preform Software, provided by Author." title="Image of bracket, configured to print with supports using Preform Software, provided by Author."/>Image of bracket, configured to print with supports using Preform Software, provided by Author.
</div>

The print job took around 6 hours. After printing, I usually leave the part inside the printer for an additional 3o minutes to get as much resin to leak out into the resin tray as possible. The part was then post-processed using the Form Wash and Form Cure. Settings for both steps included:

Form Wash — Wash time of 15 minutes, followed by an hour dry time.

Form Cure — Cure time of 30 minutes at 60 degrees Celsius.

Once the part was fully cured, I cleaned out all four mounting holes and started to add threads to the top two smaller holes used to mount the sensor. Light sanding was done to ensure a smooth surface finish.

Now I had a better sense of what the final solution would be for mounting the sensor. I could physically manipulate it on the robot to check for figment and adequate positioning of the sensor.

Creating a mock-up speeds up development by allowing the design team to envision what the product is physically but also understand what its intended purpose is on a deeper level. Personally, having a replica of what I consider to be a viable solution helps me understand and immediately try out the product in its intended environment. Which leads me to my next point…

### Testing & Refinement

Right off the bat, I realized that the mounting hole pitches were spot on. This allowed me to mount the bracket to the robot right away, along with the sensor on top. I moved the SCARA into its home position (SCARA close to the sensor with about 0.5” distance) and received feedback from the sensor saying it recognized something was in its detectable range.

I didn’t need to add any further refinement to this initial concept. The sensor was held in place to the robot. The next step for this bracket will be to manufacture it out of 316 Stainless Steel since this bracket will be part of a manufacturing-quality machine process. All materials of construction must adhere to [Good Manufacturing Practices (GMP)](https://www.fda.gov/drugs/pharmaceutical-quality-resources/facts-about-current-good-manufacturing-practices-cgmpshttps://www.fda.gov/drugs/pharmaceutical-quality-resources/facts-about-current-good-manufacturing-practices-cgmps).

## Closing Words

When defining a problem statement, be sure to ask yourself what the problem is. Rewrite the problem as specific as you can. This helps me start to figure out what requirements I need to focus on to solve the issue at hand. Problem statements and customer needs are directly related. Both identity the obvious; however, problem statements show the issue present while the need acts as a mediator between the problem and the solution.

As the needs are extracted from the problem statement, they must be translated into requirements (Mechanical, Electrical, Software, etc.) to ensure any perceived complexity is captured early on. This will save time during the design and development phase.

During the design and development phase, specifically when rapid prototyping, be sure to identify which process best suits your application. The key here is to find the process that will best emulate the environment the product will live in so that you can have viable test results and gain valuable insights when testing occurs. Test it in the application it is meant to be used. Refine where needed and if further machining or material finishing is required, proceed.

Designing in-house allows you to quickly find custom initial solutions without depending on traditional manufacturers to develop for you.
