---
layout: page
title: "Welcome to VESHUB Docs"
---

**Please use the navigation on the left to find the topic you are interested in.**

If you have any recommendations for improving these documentation pages, please drop us a quick email at <support@veshub.com>.
	
Please navigate to the [getting started](/getting-started/){: .alert-link} section to get a quick overview how to use the system.
{: .alert .alert-success .text-center}
	
## Introduction {#intro}

VESHUB is a **colaboration platform** to publish and share **schedules of seagoing vessels** between ship owners, charterers, agents, service partners and all other parties involed in ship schedules. Its main purpose is to overcome organizational boundaries regarding the sharing of schedule related information, shorten the time to publish such information and reducing the workload to keep everybody informed. 

The platform is organized similar to a **social network**. Every perticipant has its own personal user account and can create own company representations or become a member of existing ones. Vessels are linked to one or more shipping companies indicating an owner or charterer relationship. Agencies are special company types which can be nominated as the permement agency representation in a port or can be assigned to be the nominated agency for a dedicated port call. 

### Example
To understand the scope of VESHUB we prepared an example of how to use the platform and how different parties are involved.

#### The Owner
Assume *Oscar* is an employee of a shipping company called *Next Generation Shipping*. It owns ten container ships which are all chartered to other companies. *Oscar* signed up on VESHUB and created a **company representation** for *Next Generation Shipping*. 

Further he added all ten ships to the vessel pool of his company. To get the schedule data into the system *Oscar* sent the **VESHUB Onboard Client** to all ships, which allows the crews to easily enter the schedule and agent data and send everthing to VESHUB.

Next *Oscar* invited all his colleagues to register at VESHUB. Then he added everybody to his company to become **company members**. *Oscars* colleague *Ashley* is responsible for managing the schedules of all ships. Thus *Oscar* assigned *Ashley* to the **contributer role** of the company allowing her to edit and change the schedules. *Oscars* boss where assigned to the *administrator role* which enables him to add ships and other members. All other colleagues where assigned to the **reader role** giving read only access.

*Oscars* main job is actually managing four of the mentioned vessels. So he added his ships to his **favorite ship list**. This ensures that he will be informed automatically whenever the schedule of one his ships is changing.

#### The Crew
*Carl* is the captain of one of the ships, which is named *Next Voyager*. He received the **VESHUB client installer** via email from *Oscar* and installed it on a PC in the wheelhouse. Whenever a schedule update is received from the charterers representatives, *Carl* updates the schedule in the VESHUB client and send the update package ashore. His vessels is equipped with an onboard email server, which allows him to setup **direct email delivery** via SMTP.

The charterers agent details come along with the update form the charterers representative. The onboard client allows him to enter all agent contacts for different ports and to assign them easily to port calls. The agent details are then transferred along to the VESHUB platform and will be shown together with the schedule data.

In some ports *Next Generation Shipping* has its own owner agents. They can be added easily as well. Actually it is possible to assign **owner and charterer agent** separetly for each port.

#### The Agent
*Anton* is a shipping agent and runs his own agency in Hamburg which is named *Agency 247*. Whenever a ship from *Next Generation Shipping* is calling Hamburg, his agency is nominated as the owner agent. *Ashley* informed him that they use VESHUB for schedule publishing now. So *Anton* signed up as well and created his own **agency representation**. 

When *Anton* created his company, he got a so called **VESHUB ID** which is unique to his company in VESHUB. Next he included the VESHUB ID in his email signature whenever he is communicating the the ships crew. 

Now *Carl* received the ID of *Agency 247* and added it to the agent details in his onboard client. Whenever *Carl* is creating a port call for Hamburg, *Antons* agency is linked automatically to the respective port call.

Since *Anton* is now the **nominated agent** in VESHUB, he is **entitled to change the schedule details** for this particular port call. Especially in the tactical phase of a port approach, when the schedule can underlie short term changes (e.g. due to berth congestion or bad weather) he can quickly and easily update the arrival or departure time.

All VESHUB users which are registered for this port call or added the respective ship to their favorites **will be informed automatically**. This way *Anton* saves many phone calls and emails to inform all visitors that the schedule has changed.

#### The Charterer
*Charlie* is operational manager in a shipping company called *Future Line* which operates 85 vessels. 40 vessels are owned by *Future Line* and the remaining 45 vessels are chartered from other companies. Three of the chartered vessels are owned by *Next Generation Shipping*.

Also *Charlie* signed up at VESHUB and created a **company representation** for *Future Line*. He asked his assitant *Adam* to enter all 85 vessels. Since several vessels already exist on VESHUB (among others the three vessels from *Next Generation Shipping*) *Adam* contacted the respective owners and asked to link these vessels with his company as well (based on the owner/charterer relationship). *Ashlay* agreed and linked the three vessels with *Future Line* as well.

Since the charterer *Future Line* is actually creating the schedules for all operated vessels, *Charlie* started an internal IT project to publish the schedule information from their internal schedule manageing system to VESHUB via the **REST API (Application Programming Interface)**. Using this technology the schedule data will be published automtically without human interaction.



#### The Service Technician

### Terminology