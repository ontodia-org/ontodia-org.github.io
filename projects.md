---
layout: page
title: Projects
permalink: /projects/
---

<h2>Business topology<br><small>A visualization of and navigation over the data from National business registry of Russia</small></h2>

<div class="alert alert-info" role="alert">
    <p>The challenge was to adjust ontodia library to accommodate to some specific use cases and tune its behavior to business intelligence domain. It all took some major changes to how Ontodia looks, feels and behaves.
    </p>
    <p>We were quite surprised at how Ontodia was fitting into our scenario in the first place. At the very beginning of our project we realized that graph representation of the data would be the best way to facilitate the user and to give him the power to explore. Ontodia provided just exactly what we expected and a great flexibility on the top of that. It was impressive how we manage to adjust ontodia to our sketchups of UI in a matter of a month.</p>
</div>
<div style="text-align: right">
  <img src="/assets/img/Isaev.png" width="80px">
    
  <h4><small>Sergey Isaev<br>CEO of DataFabric</small></h4>
</div>
<hr class="featurette-divider">
<div class="text-center" style="margin-top:40px"><h2 id="what-it-took-to-implement-our-ideas-on-ontodia-platform">What it took to implement our ideas on Ontodia platform</h2>
    <img src="/assets/img/Hlyzov.png" width="120px">
    
    <h4><small>Evgeniy Hlyzov<br>CTO of DataFabric</small></h4>
</div>

<p>From day 1 we decided that one of our technical advantages will be the use of graph data under the hood and thus all 
the benefits, which it brings. Why graphs? Well, our goal was to mesh data from various sources to deliver the 
maximum awareness to the user. Let’s say for example, you’d like to know the most about the particular company you are 
dealing with or planning to engage with. There are a number of state registries that publish relevant data, 
but it all comes in various formats and is hardly readable. Our offer is to combine them all together and present 
in a form of a highly interactive user-friendly web application.</p>

<div class="table-responsive text-center">
  <table class="table">
    <thead>
      <tr>
        <th style="text-align: center"><h2>21 dev days</h2></th>
        <th style="text-align: center"><h2>18 commits</h2></th>
        <th style="text-align: center"><h2>333 Gb</h2></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border-top: 1px solid #384452; text-align: center; margin: 10px"><p>Front-end developer to adjust the library</p></td>
        <td style="border-top: 1px solid #384452; text-align: center;margin: 10px" ><p>It took 22 commits to adjust Ontodia</p></td>
        <td style="border-top: 1px solid #384452; text-align: center; margin: 10px"><p>The data set size is quite large</p></td>
      </tr>
    </tbody>
  </table>
</div>

<p>“What?” question had very direct answer but the question “How?” was still on agenda. So we started looking around 
and realized that there are no so many tools out there that are capable of step-by-step navigation over data graphs 
combined with highly flexible visual templating mechanisms. When we accidentally came across ontodia we sought no 
further.</p>

<div class="container-fluid" id="slick-obj">
    <div class="slick-slide text-center" style="text-align:center">
        <img class="text-center block-center" src="/assets/img/blog/Searchresults.png">
    </div>
    <div class="text-center block-center">
        <img src="/assets/img/blog/ontodiafirststep.png">
    </div>
    <div class="text-center block-center">
        <img src="/assets/img/blog/ontodiasecondstep.png">
    </div>
</div>


<p><br /></p>

<p>The other advantage that we greatly enjoy about Ontodia is its ability to work over huge data sources. For instance, 
only the registry of commercial entities contains over 10 mil records. Each record about company has approximately 
20-30 facts about it, which brings the total number of facts to 300 mil! And Ontodia coupled with a decent triple 
store can handle that with grace. The solution lies in incremental expansion of graph, which Ontodia spells out as 
the main usage scenario.</p>

<table>
  <tbody style="padding:10px">
    <tr>
      <td style="padding:10px"><img src="/assets/img/blog/Pastedimageat2017_02_0112_31PM.png" alt="" /></td>
      <td style="padding:10px"><img src="/assets/img/blog/ontodiasecondstep.png" alt="" /></td>
    </tr>
    <tr>
      <td><h5 style="text-align: center">Default visualization templates in Ontodia prior to start of the project</h5></td>
      <td><h5 style="text-align: center"> Ontodia data visualization upon completion of customization</h5></td>
    </tr>
  </tbody>
</table>

<p><br /></p>

<p>We had very strict requirements towards user interface. We employed one of the best specialists available in the area to do the 
mockup of UI and think through the user experience. Ontodia stood the test of pixel hunting quite well and managed to 
adjust to our initial images without any compromise from design point of view.</p>
