---
layout: post
title: "Ontodia integrates with GitHub and WebProtege"
date: 2016-03-21 15:54:46
author: Dmitry Pavlov
categories:
- news
img: /assets/img/blog/img1.jpg
---

Just a couple of days ago we've finished a strongly requested integration
feature for Ontodia.org. Now it accepts links to Github files and links to
WebProtege projects as data sources for diagramming.

Our web service is a simple tool for visualization of semantic datasets and
ontology, hence it needs good integration means with repo hosting services
and ontology production envirenments. To cover the use case of ontology
production with visual verification we implemented integration of Ontodia
with Github and WebProtege.

<!-- more -->

## How to use it

* Log in into Ontodia
* In Dashboard under Data Source panel click "Create" button
* In a dialogue box select either GitHub source or WebProtege project

**For WebProtege Data Source**

* Go to your project in WebProtege, copy the URL from address bar of your browser amd paste it into Ontodia dialogue box as a link to the project

  <p><div class="text-center"><img src="/assets/img/blog/WebProtegeSource.png" alt="Defining WebProtege data source in Ontodia"/></div></p>

* If you want Ontodia to sync with your WebProtege every 30 minutes, tick "Update automatically" checkbox
* You can provide a specific SPARQL query to be run against your WebProtege project under "Additional parameters"

**For GitHub File Data Source**

* Go to your file in GitHub, copy URL from address bar of your browser and paste it into Ontodia dialogue box as a link to your file

  <p><div class="text-center"><img src="/assets/img/blog/GitHubSource.png" alt="Defining GitHub data source in Ontodia"/></div></p>

* In case of GitHub you can connect several files from your GitHub repo to Ontodia data source
* If you want Ontodia to sync with your GitHub file every 30 minutes, tick "Update automatically" checkbox.
* You can provide a specific SPARQL query to be run against your GitHub file under "Additional parameters"
