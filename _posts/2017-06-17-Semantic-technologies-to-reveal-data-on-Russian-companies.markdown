---
layout: post
title: "Semantic technologies to reveal data on Russian companies"
date: 2017-06-17 10:54:46
author: Dmitry Pavlov
categories:
- news
img: /assets/img/blog/Cover_TopologyOfBusinessWithOntodia.png
---
Two companies, [DataFabric](http://datafabric.cc/) and [Vismart Ltd.](https://vismart.biz/) have joined forces in building a commercial [service](http://tree-i8n.apps.datafabric.cc/) to investigate, explore and analyze the information about any organization registered in Russia. The [service](http://tree-i8n.apps.datafabric.cc/) encourages exploration through relations of the legal entity with other entities and people. It helps find a company of interest and learn about its shareholders, executives, locations, subsidiaries, shares in other companies, etc. The entire exploration process is carried out on interactive graph by means of incremental expansion of nodes.
<!-- more -->+

The legal entities registry explorer (Topology of Business) is targeted to Russian market, but we have made an almost fully functional English version in order to broaden the exposure of the Russian open data to other countries. Currently, we may lack the translation of directory with codes of field of activities and a couple of other things, but it’s in our plans to have it in English soon. Generally, the service allows anyone to investigate any organization in Russia from outside of Russia, which is quite unheard of!

For example, this is the graph of our own company, [Vismart Ltd.](https://vismart.biz/) (It is actually quite trivial and holds no special insights)

![Graph of VISmart company in Topology of Business driven by Ontodia](/assets/img/blog/VISmartGraph_TopologyOfBusinessWithOntodia.png)

# Who and why made "Topology of Business"

The registry explorer or "[Topology of Business](http://tree-i8n.apps.datafabric.cc/)", as we call it, was conceived and is officially launched as a commercial service for businesses to check the stability and analyze the operations of business partners as well as to provide solid ground for choosing the best communication strategy and collaboration approach. For instance, it is really a great help to know who owns the company: is it GO or is it privately owned? are shareholders individuals or other companies? what is the role of your contact person in your partner company? does your contact hold a share?

The service belongs to [DataFabric](http://datafabric.cc/), which provides the ontology and ETL pipelines for processing the data of National Tax Service. The UI part was developed in a close partnership with [Vismart](https://vismart.biz/) thanks to decision to use [Ontodia library](https://github.com/ontodia-org/ontodia) as a graphical platform.

# The role of semantic technologies in the project: pros and cons

It was truly hard for us to settle on semtech in this project. Let me briefly outline our rationale for locking ourselves on semantic technologies and standards. 

## Pros

* _Semantic web is eventually a set of standards already tested by practical use._ Standards are well documented, widely adopted and extensively discussed on the web. This all allows a quicker on-boarding for new people as well as contributes greatly to transparency of data interfaces. And we were lucky enough to be familiar with most of them

* _Semtech is all about graphs, which is well in line with our UI approach._ When we try to explain something to others we take a pen and draw nodes and connections, which is naturally a graph. We could say that the concept of a graph is intuitive and friendly to most people. Storing and visualizing everything in graphs requires less data transformations and simplifies code base. 

* _Semantic web is supposed to be good for making sense of data coming from multiple data sources with mismatching data structures._ In the close future we will have to arrive to a single enormous graph combining the data from very heterogeneous data sources and then query it as one. In the long run, data structures expressed in accordance with semantic web philosophy will be easier to bring together, merge, update and maintain. 

* _With very high probability of evolution of data structures, semantic web standards will ensure the lower cost of system updates._ Russian legislation changes rapidly and endlessly, which will lead to significant changes in data models. Since we formalize our knowledge in ontology, which is transparent to human and readable to machines, we can quickly and cheaply adopt to the ever changing world around us. Open world assumption as a cornerstone concept for data modelling in semantic web does help in that.

* _Should you plan to publish the data, it will be more readable and easier to consume if converted to semantic data._ We use the backbone ontology in our system as another channel of publicity and visibility for our project. We’ve published the[ ontology](https://github.com/DataFabricRus/ontology-fts) on github and let others use it. As a side effect we get bug reports and conceptual remarks from domain experts and business consultants community. Publishing our datasets together with underlying ontology will certainly increase the overall value and accessibility.

## Cons

As you might expect, the application of semtech did not go very smooth. We have collected all possible pitfalls along the way and eagerly share them with you together with suggestions on how to handle them:

* _Semtech developers and knowledge engineers are hard to find._ No telling, they are! So before you start coding, make sure you have at least one person, who can provide practical experience in constructing applications running on semtech. The other hint is about developing ontologies - it is quite possible that there will be no trained people around to do this. If so, find a university involved in semantic technologies research and try to scout for expertise there.

* _The data models (ontologies) that you ever receive from knowledge engineers and domain experts are not ready for industrial use._ We came up with some technical measures to deal with this complication - we introduce an extra layer of logic over the initial ontology. This knowledge, in our understanding, could be expressed as another ontology or as a number of rules applied to initial data model. Right now we are testing both approaches.

* _The development tools are immature._ We adopt to this by creating our own ones. That is exactly why we use our own[ Ontodia.org](http://ontodia.org/) service in development. We visualize data structures in Ontodia for familiarization with new data models and for further writing of meaningful and effective queries.

# Ontodia as a front-end platform

In "Topology of Business" we tested the applicability of [Ontodia library](https://github.com/ontodia-org/ontodia) as a platform for building the end-user applications involving data exploration process over the graph. It turned out that Ontodia library:

* allows to make quite radical changes to user interface with reasonable effort - we have managed to reproduce UI in almost pixel-to-pixel precision.

* reduces the costs of development because most of the graph interaction functionality is available out of the box - we have used all Ontodia's features in this project and added some new ones to the open source library.

* speeds up delivery of the product to the end-user - the project duration is 4 only months

To support my statement about high flexibility of Ontodia in customizing UI and UX I’ll post here the default and the customized appearance of the graph.

_Default rendering of the graph._

![Default rendering of graph in Ontodia](/assets/img/blog/DefaultRenderingOntodia.png)

_Customized rendering for Topology of business_

![Customized rendering of graph in Ontodia](/assets/img/blog/CustomizedRenderingOntodia.png)

## How Ontodia library proved to be effective in the project

Based on experience acquired in the project we, together with our partner, can sum up the benefits that developer might gain by embedding Ontodia library in his solution:

* The library provides the end-users with convenient navigation on graph.

* Internal data model is very simple and specifically tailored for data visualization and navigation scenarios - it speaks in terms of vertexes, edges, labels etc. 

* Ontodia library offers preset templates for rendering nodes and connections, but the developer can design his own ones with HTML+CSS or write them on ReactJS.

* The library is based on semantic web standards - it talks SPARQL, RDF and now is getting close to offer an adequate visualization for OWL.

* It supports linked open data (LOD) - we are almost there with releasing the new version that will navigate seamlessly between the data sources within the LOD cloud with the use of IRIs.

* We maintain the library, develop it actively, regularly and openly on github, provide support and consultancy around it.

* The library has been tested not only by us, but by several independent companies, it has been integrated into a number of platforms.

# We'd appreciate your feedback!

Topology of Business is at the very initial stage, we plan to do so much more to enhance it! I’ll be back soon with some updates on new feature.

We’d be happy to know your opinion about the service!

