---
layout: example
title: Default Ontodia example
permalink: /example/default
---

<script type="text/javascript">//<![CDATA[
    window.onload=function(){
    function onWorkspaceMounted(workspace) {
        if (!workspace) { return; }
    
        const model = workspace.getModel();
            
        model.importLayout({        
            dataProvider: new Ontodia.SparqlDataProvider({
                endpointUrl: 'https://library-ontodia-org.herokuapp.com/sparql',
                imagePropertyUris: [                
                    'http://xmlns.com/foaf/0.1/depiction',
                    'http://xmlns.com/foaf/0.1/img',
                ],
                queryMethod: Ontodia.SparqlQueryMethod.GET
            }, Ontodia.OWLStatsSettings),
        });
    }
    
    const props = {
        ref: onWorkspaceMounted,    
    };
    
    const container = document.getElementById('ontodia-container');
    ReactDOM.render(React.createElement(Ontodia.Workspace, props), container)
    
    }//]]> 
    
</script>    
    
