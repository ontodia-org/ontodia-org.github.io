---
layout: post
title: "Question answering service running over wikidata.org"
date: 2017-03-20 16:47:00
author: Dmitry Pavlov
categories:
- news
img:  /assets/img/blog/QA.png
---
As a showcase of integration between [Ontodia ](http://ontodia.org/)and [metaphactory ](http://www.metaphacts.com/product)working as a semantic platform back-end we’ve recently launched a question answering demo based on [wikidata ](https://www.wikidata.org/)data set. 

<!-- more -->
## What it is for

Suppose you’d like to know how Mozart’s family was involved in music, or, in other words, did he have musical roots and was the only one gifted in his clan?

Besides, you happen to be also keen on sharing your newly acquired knowledge about the composer with others. 
Your typical way of approaching this will be to google mozart, probably find a wikipedia article and navigate to "Early life" section of the corresponding wiki page, then, finally, to distribute the knowledge you probably will send the link to your friends with some comments of explanation. 

Our solution introduces an alternative - a visual and interactive exploration of knowledge contained in wikidata to find your answers and lots more. 

## How to use it

To start searching the web of data in a semantic way you first need to go to metafactory start page - [https://wikidata.metaphacts.com/](https://wikidata.metaphacts.com/), then type in "Mozart" just exactly as you do on google search. The first auto-suggestion will be the Mozart that you need - Wolfgang Amadeus Mozart. 
![metaphactory start page](/assets/img/blog/StartPage.png)

By clicking the right Mozart you already start exploring the semantic data about him. Metaphactory will take you to his page containing some basic facts about him like date and place of birth and etc. But these facts will not give you a good perspective about his family’s musical background. So you might want to use the graph exploration for it - go to "ontodia” tab and click "View in Ontodia” link. 

![matephactory mozart resource page](/assets/img/blog/MozartPage.png)

Once Ontodia library kicks in you are on your path of visual exploration. Quite expectedly on the graph you’ll be starting from Mozart. 

We tried to make the theoretical passage below sound easy, but you are free to skip ip if we did not succeed. 

> At this point it is the right time to explain the nature of wikidata.org and **Linked open data** (LOD). Let’s start with **Linked data** first and as we get over it, it’ll become real simple. **Linked data** is a way of and the set of standards for organizing data so that it could be easily interlinked, linked with external sources and queried as one uniform data set. **Linked open data** is linked data published and open for usage on the web. **Wikidata.org** is a general knowledge Linked open dataset where you can find answers about almost anything, but you have to be using semantic querying. That’s exactly where it gets tricky, since not all the people in the world know how to write semantic queries. Being aware of that we’ve built a visual exploration tool for everyone to navigate and discover the world of linked open data. 

Now when you’re familiar with what’s going on under the hood, let’s start playing around. The quickest way is to click navigation ![Navigation icon in Ontodia](/assets/img/blog/NavigateIcon.png)icon located to the right on the Mozart’s node and you’ll see all of his relations (links) that he has with other things. 

![Context menu for navigation in Ontodia](/assets/img/blog/ContextMenuMozart.png)

If you’re still interested in his family, it will make sense to open up the links "spouse", “child”, “sibling”. In several steps you’ll get something like this (see below). The diagram will reflect the Mozart’s family in a couple of generations to trace. Don’t forget that you can move the nodes around on your diagram to make it more convenient. 

![A diagram of Mozart's family in Ontodia](/assets/img/blog/MozartFamilyOntodia.png)

Now let’s find out how related this family was to music and composing. To do that go to Mozart again and open up his links through the same navigation icon, choose "occupation" link and simply click “add selected” button to add all Mozart’s occupations.  You’ll realize that many members of his family were somehow involved with music. The second observation that catches an eye is that Mozart himself received the gift of composing and playing music solely from his father but he managed to transfer this gift on to his descendents. If the graph gets too cluttered, you can get rid of extra musical occupations by clicking ![Close Node Icon in Ontodia](/assets/img/blog/CloseNodeIconOntodia.png)beside each node. 

![Mozart's family and composing music](/assets/img/blog/MozartFamilyComposersOntodia.png)

Since we’ve acquired the visual answer to our question we can now save the diagram in metaphactory platform and share the link with others. Here is the link to mine - [https://wikidata.metaphacts.com/resource/?uri=http%3A%2F%2Fwikidata.metaphacts.com%2Fcontainer%2FontodiaDiagramContainer%2FMozart%27s_family_and_music_occupations](https://wikidata.metaphacts.com/resource/?uri=http%3A%2F%2Fwikidata.metaphacts.com%2Fcontainer%2FontodiaDiagramContainer%2FMozart%27s_family_and_music_occupations)

We’d be happy to hear your impressions on the tool, please write us at [ontodia-people@vismart.biz](mailto:ontodia-people@vismart.biz)

## User evaluation

We went as far as organized a small-scale user evaluation of our question answering tool. We distributed the list of general knowledge questions and asked the users to find answers with our solution. We are still summarizing the results and will publish them in the middle of April. In the meantime, you are more than welcome to try finding answers for yourself. 

Just one last thing - some of the answers you’re looking for might be in properties drop-down box - you can open it by clicking ![Properties expand icon in Ontodia](/assets/img/blog/ExpandPropertiesIconOntodia.png)the icon beneath each node. 

<img alt="Mozart's properties in Ontodia" src="/assets/img/blog/MozartPropertiesOntodia.png" height = "350">

