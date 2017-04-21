---
layout: example
title: DBpedia example
permalink: /example/dbpedia
---

<script type="text/javascript">//<![CDATA[
    window.onload=function(){
    function onWorkspaceMounted(workspace) {
        if (!workspace) { return; }
    
        const model = workspace.getModel();
            
        model.importLayout({        
            dataProvider: new Ontodia.SparqlDataProvider({
                endpointUrl: 'http://dbpedia.org/sparql',
                imagePropertyUris: [                
                    'http://xmlns.com/foaf/0.1/depiction',
                    'http://xmlns.com/foaf/0.1/img',
                ],
                queryMethod: Ontodia.SparqlQueryMethod.GET
            }, Ontodia.DBPediaSettings),
        });
    }
    
    const props = {
        ref: onWorkspaceMounted,    
    };
    
    const container = document.getElementById('ontodia-container');
    ReactDOM.render(React.createElement(Ontodia.Workspace, props), container)

}//]]> 

</script>    
   
