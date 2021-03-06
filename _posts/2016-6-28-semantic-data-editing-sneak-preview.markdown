---
layout: post
title: Semantic data editing - a sneak preview
date: 2016-06-28 15:54:46
author: Dmitry Pavlov
categories:
- news
img: /assets/img/blog/stretching connection.png
---
Going to <a href="http://2016.eswc-conferences.org/">ESWC 2016</a> – one of the most acknowledged conferences on semantic technologies – I was excited having to present at the demo session our newly built preview of data editing functionality. This is the kind of feature we all have been dreaming of making for almost a year but never had a chance or courage to step to it.

<!-- more -->

Finally, the approval for our participation in the conference gave us all a kick of proper motivation to plunge into development frenzy. Daniil Razdyakonov and Olga Belyaeva toughed it up in little over than a week.
Right now the editing capabilities are extremely limited in <a href="http://Ontodia.org">Ontodia</a>. Let me tell you what you can and can’t do with the sneak preview data editing prototype.
You can:
<ul>
<li>Edit datatype properties of any object on the graph by togging to “Properties” panel of the right and modifying the property values</li>
<li>Create new object properties (relations) between objects on the graph  be clicking <img src="/assets/img/blog/stretch connection icon.png " alt="stretch connection icon"/> icon next to the node and stretching the arrow to another node</li>
</ul>

Right now you cannot:
<ul>
<li>Save changes to data sources other than SPARQL endpoint running on Blazegraph. For other sources we keep only temporary history in browser</li>
<li>Create new objects</li>
</ul>

Please visit <a href="http://edit.ontodia.org">edit.ontodia.org</a> to check out the data editing. 

Looking forward to hear your impression on the preview. It is deployed on our testing ground here: dev.ontodia.org
Please feel free to discuss ontodia with us at our <a href="https://groups.google.com/forum/#!forum/ontodia">dedicated newsgroup </a> 
or write to us directly at <a href="mailto:ontodia-people@vismart.biz">ontodia-people@vismart.biz</a>
