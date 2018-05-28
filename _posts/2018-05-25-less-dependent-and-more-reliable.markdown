---
layout: post
title: "Less dedepndent and more reliable"
date: 2018-05-25 16:47:00
author: Dmitry Pavlov
categories:
- news
img: /assets/img/blog/Cover_collage_OntodiaSite.jpg
---

# Initial bootstrapping with JointJS

From the very beginning [Ontodia](http://ontodia.org/), which we position as a graph exploration tool, carried a heavy dependency. It critically relied on [JointJS ](https://www.jointjs.com/)library. JointJS is a front-end component that enables visualization and creation of many types of diagrams in user interface. It was a huge help for us at the start. With the very good quality of code we had a significant portion of Ontodia functionality covered by this open source library and we are very thankful to its developers. We were selecting this component carefully and cautiously and it served us well for a while.
<!-- more -->

But as the time went on, we realized that Ontodia performance tends to become intolerable when it came to displaying graphs exceeding 100 nodes and links. Ontodia proved to be practically incapable of handling 200+ vertexes. How come? Well, you have to keep in mind that we never wanted to compete with WebGL technology boasting fluent operation with huge networks of thousands of nodes. Analytics and exploration tool such as Ontodia does not need to splash such busy graphs on users. However, our clients expected Ontodia to operate reasonably well with rather large ontologies like [FIBO ](https://www.edmcouncil.org/financialbusiness)and [CIDOC-CRM](http://www.cidoc-crm.org/). So we accepted the challenge and started looking for the ways to accommodate to it.

# Learning why slow or crashing

It took extended debugging session and analysis of runtime performance in "Performance" panel of Chrome consloe. The small internal research yielded unexpected results. With large graphs, it was particularly JointJS that should be accounted for lack of performance due to inefficient mechanism of rendering. Technically, JointJS does not calculate docking point coordinates when visualizing connections between nodes - it orders the browser to render the entire graph in memory and then tells it return the X and Y positions for the docking points. The number of called browser re-draws are somewhat close to the amount of edges on the diagram. Thus, taking JointJS out of the picture and controlling rendering entirely by Ontodia code could speed up rendering process tremendously - such was our hypothesis. We obviously hit the natural limitation of JointJS, because it was not designed to be used in such scenarios.

As it was additionally discovered Ontodia would crash if the number of edges on the diagram exceeds 300. It was not acceptable for our customers and for us as well.

# How the new one is better

The cover image of this post proves hypothesis turned out to be correct. But let's have a closer look at the experiment that we performed to support our claim.

## Experiment setup

1. We took two versions of Ontodia: 0.61 version is dependable of JointJS while 0.80 version performs rendering on its own.

2. As hardware we used quite ordinary Lenovo thinkpad laptop with the following sepcs: Thinkpad L450, CPU: Intel i5-5200U at 2.2GHz, RAM: 16GB, GPU: Intel HD Graphics 5500.

3. We selected FIBO ontology to be the test sample data because: a) its domain belongs to general knowledge and could be understood with no special training, b) the graph that one arrives at when visualizing ontology is relatively densely interconnected, c) it's large enough to prove that Ontodia can survive large graphs (983 vertexes and 1112 edges)

4. We tested the performance of two versions of Ontodia on: a) full FIBO and b) subset of FIBO with only 400 entities and 124 connections (the SPARQL queries for both options are provided in "Assets of experiment")

# Experiment results

## Dataset "Subset of FIBO": First 400 entities of FIBO, 124 connections

*Ontodia V. 0.61*

![Loading of FIBO in Ontodia V.061 with JointJS as depenency](/assets/img/blog/fibo_v0.6.x_400elements_phases.PNG)

The figure above illustrates the main processes that takes place when Ontodia V. 0.61 loads the dataset. The full rendering time is 65 000 ms, which translates to 1 minute and 5 seconds. If we divide the process into stages (stages are numbered on console screenshot, the same numbers for stages are used in charts) the timings would be as shown on the chart.

![Timings of rendering tasks of FIBO first 400 entities in Ontodia V.061 with JointJS as depenency](/assets/img/blog/diagram-0-6.png)

Evidently, the most effort in rendering goes to rendering edges (stage 3) as it was discovered through debugging.

Now let's check whether the new version really outperforms the older one - see the screenshot of a browser console below.

*Ontodia V. 080*

![Loading of FIBO first 400 entities in Ontodia V.080 without JointJS as depenency](/assets/img/blog/fibo_v0.8.x_400elements_phases.PNG)

The entire rendering process takes 7 200 ms, equals to 7.2 sec. The new Ontodia visualizes the same dataset 9 (!) times faster.

The time of rendering in our calculation does not include the intervals of waiting till data is fed.

The stages timings look totally different now and more uniform - see the chart below.

![Timings of rendering tasks of FIBO first 400 entities in Ontodia V.061 with JointJS as depenency](/assets/img/blog/diagram-0-8.png)

Quite striking detail: stage 3, which was in previous version the most time-consuming, now executed almost instantly.

## Dataset "Full FIBO": 983 entities, 1112 connections

*Ontodia V. 0.61*

The older Ontodia simply crashes after 32 minutes of hard work and having consumed 3 Gb of RAM.

*Ontodia V. 080*

![Loading of FIBO in full in entities in Ontodia V.080 without JointJS as depenency](/assets/img/blog/fibo_v0.8.x_full_phases.PNG)

The newer Ontodia stands the test of 983 vertexes and 1112 edges with rendering result of 29 sec. Please, once again, bear in mind that we neglected the time when rendering was halted till data upload is complete.

![Timings of rendering tasks of FIBO in full in Ontodia V.061 with JointJS as depenency](/assets/img/blog/diagram-0-8-Full.png)

And even with full FIBO the stage "rendering edges" is almost disappearing in the chart comparing to other timings.

And finally, just to show you how big FIBO ontology actually is...

![Full FIBO visualization in Ontodia](/assets/img/blog/fibo_v0.8.x_full_result.jpg)

Feel free to jump to[ live demo](http://fibo.apps.vismart.biz/) to explore FIBO ontology by yourself.

# Conclusions

* Ontodia has become faster and does not crash when visualizing large ontologies all at once.

* Apart from becoming more stable and faster in performance, Ontodia has cut itself loose from heavy-weight dependency, such as JointJS.

# Assets of experiment

## FIBO ontology

The ontology in TTL format can be downloaded from EDN Council[ here](https://spec.edmcouncil.org/fibo/). Scroll down to the bottom of the page and find "Turtle" column in the table, and locate the "FIBO (Production) (zip)" row.

## SPARQL queries

To fetch FIBO in full you will need this SPARQL query:
```
CONSTRUCT {
    ?s <http://example.com/prop> "prop"
} WHERE {
    ?s a ?type 
    VALUES ?type { owl:Class rdfs:Class }
    FILTER NOT EXISTS {
        ?s rdfs:subClassOf? ?blockedTypes. 
        VALUES ?blockedTypes {
            <https://spec.edmcouncil.org/fibo/ontology/FBC/DebtAndEquities/Debt/FloatingInterestRate>
            <https://spec.edmcouncil.org/fibo/ontology/IND/InterestRates/InterestRates/ReferenceInterestRate>
        }
    } 
}
```
To fetch only first 400 entities and their relations you can query like this:
```
CONSTRUCT {
    ?s <http://example.com/prop> "prop"
} WHERE {
    ?s a ?type 
    VALUES ?type { owl:Class rdfs:Class }
    FILTER NOT EXISTS {
        ?s rdfs:subClassOf? ?blockedTypes. 
        VALUES ?blockedTypes {
            <https://spec.edmcouncil.org/fibo/ontology/FBC/DebtAndEquities/Debt/FloatingInterestRate>
            <https://spec.edmcouncil.org/fibo/ontology/IND/InterestRates/InterestRates/ReferenceInterestRate>
        }
    }
ORDER BY ?s OFFSET 1800 LIMIT 400
}
```
## Two version of Ontodia

* Version 0.61 (with JointJS) could be downloaded from open source Ontodia repository on Github:[ https://github.com/ontodia-org/ontodia/releases/tag/v0.6.1](https://github.com/ontodia-org/ontodia/releases/tag/v0.6.1)

* Version 0.80 (without JointJS) could be downloaded from open Ontodia repository on Github:[ https://github.com/ontodia-org/ontodia/releases/tag/v0.8.0](https://github.com/ontodia-org/ontodia/releases/tag/v0.6.1)

