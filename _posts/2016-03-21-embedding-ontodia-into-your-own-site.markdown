---
layout: post
title: "Embedding Ontodia into your own site"
date: 2016-03-21 16:47:00
author: Alexey Morozov
categories:
- tutorial
img:
---

Here’s how it will look when embedded:

<img class="featurette-image img-responsive embed-tutorial-image" src="/assets/img/blog/emdeddingExample.png">

<!-- more -->

You can embed either an already prepared diagram or create a diagram on-the-fly for your user from your data source.

* Embedding static diagram allows you to share diagram constructed once (elements and their positions stay intact,
changes in properties of your data, like element names, classes, etc. are reflected on diagram)
* Embedding on-the-fly diagram allows you to specify a SPARQL query to be executed each time the diagram is
displayed (It will be automatically updated, and will reflect the changes in data, new elements will come and go).
* The query can be parametrized and you can control what data your user will see. This sparql query is executed
every time your visitor sees the diagram (with some caching applied), so the data shown is always up-to-date.

## Embedding diagram

Creating static diagram is very simple.

* Make sure you have an aсtive Ontodia account
* While on **Diagram** tab press <span class="glyphicon glyphicon-user" aria-hidden="true"></span> icon on pop-up box over diagram or
press Share button when editing diagram:

  <img class="img-responsive embed-tutorial-image" src="/assets/img/blog/publish.png">

* Click **Publish** button on the **Share your diagram with** form to generate link and embed diagram on your site
using <code><iframe></code> tag, for example:

  ```
  <iframe src="http://www.ontodia.org/embedded?sharedDiagram=edd98c34-3c08-4bab-aff7-149bc12c7ca9"></iframe>
  ```
Please, make sure that when copying the link from sharing form to <code><iframe></code> tag you substitute **diagram?** for **embedded?**. 
## Embedding on-the-fly diagram

To create on-the-fly diagram you should create and share data source.

* Make sure you have an active Ontodia account
* When creating data source, fill in SPARQL query for **Scope of elements** and for **Connection types** under **Additional parameters**.
  * Scope of elements is a SPARQL fragment that restricts what elements are to be placed on canvas. You can use restrictions
    on <code>?class</code> or <code>?inst</code>. By default it is meant that <code>?inst</code> a <code>?class</code> and you
    don’t need to specify that.

    <code>?inst</code> are elements to be displayed on canvas. Prefixes are defined only for <code>rdf:</code>,
    <code>rdfs:</code> and <code>owl:</code>. So, to display your ontology classes on canvas you should specify <code>?inst</code> a owl:Class.

    To get Plato as a philosopher from DBPedia to be displayed on canvas:

    ```
    bind(<http://dbpedia.org/resource/Plato> as ?inst)
    ```

    You can go for complex queries like unions that are supported by SPARQL 1.1:

    ```
    {bind(<http://dbpedia.org/resource/Plato> as ?inst)}
    UNION
    {<http://dbpedia.org/resource/Plato> <http://dbpedia.org/ontology/influencedBy>+ ?inst}
    ```

  * **Connection types** are newline-separated list of properties that are fetched from the endpoint, for example:

    ```
    rdfs:subClassOf
    rdf:type
    http://dbpedia.org/ontology/influencedBy
    ```

    Bear in mind that connections are fetched only between instances restricted above.

* *[Optional]*  You can introduce parameters to sparql query in the following syntax:

  ```
  {bind (<${personURI}> as ?inst)}
  UNION
  {<${personURI}> <http://erlangen-crm.org/current/P131_is_identified_by> ?inst}
  ```

  Here 'personURI' is query parameter, it can be used multiple times in query. You could use more than one parameter if you wish.

* Press **Share** button on the toolbar and then **Publish** button on **Share your diagram with** dialogue box then select **Publish** to get published data source link.
  If you've introduced no parameters, this link should work straight away and you can use it in your <code><iframe></code>
* *[Optional]* If you've introduced parameters, you should provide them to Ontodia when you embed the diagram like this:

  ```
  <iframe src="http://www.ontodia.org/embedded?sharedDataSource=[PublicSharingKey]&[paramName]=[paramValue]"></iframe>
  ```

  For example:

  ```
  <iframe src="http://www.ontodia.org/embedded?sharedDataSource=6e5eff26-6bd5-4ad4-af71-e4b834da5b7c&personURI=http://culturecloud.ru/resource/person/606"></iframe>
  ```

That's it! Go on and embed your diagrams in your projects and sites!
