---
title: Use Cases
description: ""
date: 2022-05-25T10:09:57.627Z
name: use-cases
oxa: oxa:EplL6AlILV3RGEDPzj5U/Ewz1XGs9N0mKdQqCLTAw
---

+++ {"oxa":"oxa:EplL6AlILV3RGEDPzj5U/fWzhjZXQJwn8Yc3wJ87D.1"}

- local folder → just a folder with no `curvenote.yml` in it
- local site → a local folder that contains a `curvneote.yml` with `project` and `site` sections
- remote → a project that exists on curvenote.com

+++ {"oxa":"oxa:EplL6AlILV3RGEDPzj5U/FZryUdpJF8HymZ2xEpCc.3"}

# Currently Supported

## Scenario: deploy a new website from content in a [curvenote.com](curvenote.com) project

*Motivation: I have a project with all my content on* [*curvenote.com*](curvenote.com) *and I want to deploy a new website. This project has never been used to deploy a website before. I understand that on the way to this goal, I will have a local site on my computer with the website configuration files.*

## Scenario: create a new local site from content in a local folder

*Motivation: I have a local folder with* `md` *and* `ipynb` *files that I want to publish on a website, I may have cloned this project from my GitHub repo. I want to be able to easily create and deploy my website.*

**How to:**

1. …

## Scenario: Add new content to local site root

*Motivation: I already have a local site and have deployed it. I want to add new content and have new* `md` *and* `ipynb` *files in my folder that are ready to go. I’m happy that everything in my folder can go live on my website.*

**How to:**

1. …

## Scenario: Selectively publish content from my local site

*Motivation: I already have a local site and have deployed it. All my content is local and in the root folder, I have a new* `md` *and* `ipynb` *file ready to publish, but I also have a bunch of new work-in-progress file but I need to deploy my ready to go changes now.*

**How to:**

1. …

## Scenario: Add new content for a local site in a subfolder

*Motivation: I already have a local site and have deployed it multiple times. I now have a lot of content and want to better organise it on my website, there are some natural groupings I would like to make and organise multiple pieces of content into those groupings.*

Note: is this coupled with the scenario below 👇 ?

## Scenario: Add new content for a local site in a subfolder

*Motivation: I already have a local site and have deployed it multiple times. I have now collected lot’s of* `md` *and* `ipynb` *files in my local folder and it. is getting hard to manage. I want to re-organise files locally into some logical groupings so that it is easier to work with.*

## Scenario: Edit the titles shown in the table of contents or navigation bar on my website

*Motivation: I already have a local site and I am reviewing it. I’m not happy with the default titles that are showing up and want to edit those. Some are too long, and for others I want to change the capitalization.*

## Scenario: Reorder the items in my table of contents

*Motivation: I already have a local site and I am reviewing it. The default order in which my articles appear is not what I want, I’d like to reorder these without having to rename any local files.*

## Scenario: Add content from a project on [curvenote.com](curvenote.com) to a local site

*Motivation: I already have a local site and I am reviewing it. I want to include content from one of my team’s* [*curvenote.com*](curvenote.com) *projects as a subsection on my site*

## Scenario: Nest multiple projects under a sub-menu on the navigation bar

*Motivation #1: I already have a local site and I am reviewing it. After starting my project locally I have added 5 different projects from curvenote.com, I now want to nest all of that content under a sub-menu.*

*Motivation #2: I already have a local site and I am reviewing it. All my content is local and I have already grouped them into different sections in my navigation, I now want to nest all of that content under a sub-menu.*

## Scenario: Pull any updated remote content in a local site

Motivation: *I already have a local site and want to update remote content. I want to get all updates in one go and issue a command from the root folder. I am happy that any local changes will be overwritten*

## Scenario: Pull any updated remote content for a specific part of a local site

Motivation: *I already have a local site and want to update content for only one of the remote projects I have added. I want to issue the command from the root folder of my local site.*

## 

# Stretch / Next

Meaning this requires integration of “sites” into the platform

## Scenario: pin a single piece/file of remote content to a specific version to prevent updates when pulling

*Motivation:*

## Scenario: push a local site to a new remote

*Motivation: The site was created locally from files in a local folder via* `curvenote init` *but now I want to collaborate on that site with others, or get it published back into my team’s workspace on* [*curvenote.com*](curvenote.com) *so anyone can clone it later.*

## Scenario: get a copy of a deployed website that has already been pushed to [curvenote.com](curvenote.com), by me or my team, as a local site that I can work on, re-deploy and then push back

*Motivation: Rowan has already published our report, and I need to locally update content and re-deploy, but I don’t have anything setup on my local machine yet.*

**How to:**

1. `curvenote clone` \[steve: maybe? tbd\]
2. `curvnote init` → Import from curvenote → follows clone sequence \[steve: maybe? tbd\]

## Scenario: Pull any updated remote content without overwriting local changes

Motivation:

## Scenario: Add content from another site already deployed on curve.space

*Motivation:*

## Scenario: deploy a second new website from content in a [curvenote.com](curvenote.com) project

*Motivation: I have a project with all my content on* [*curvenote.com*](curvenote.com)*, and I already have a website deployed and have already “pushed” the site configuration back to my project. now I want to deploy the same content to a new website.*

