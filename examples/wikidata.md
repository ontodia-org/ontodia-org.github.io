---
layout: example
title: Wikidata example
permalink: /example/wikidata
---

<script type="text/javascript">//<![CDATA[
    window.onload=function(){
    function onWorkspaceMounted(workspace) {
        if (!workspace) { return; }
    
        const model = workspace.getModel();
            
        model.importLayout({        
            dataProvider: new Ontodia.SparqlDataProvider({
                endpointUrl: 'https://library-ontodia-org.herokuapp.com/wikidata',
                imagePropertyUris: [                
                    'http://www.wikidata.org/prop/direct/P18',
                    'http://www.wikidata.org/prop/direct/P154',
                ],
                queryMethod: Ontodia.SparqlQueryMethod.POST
            }, Ontodia.WikidataSettings),
        });
    }
    
    const props = {
        ref: onWorkspaceMounted,    
    };
    
    const container = document.getElementById('ontodia-container');
    ReactDOM.render(React.createElement(Ontodia.Workspace, props), container)

}//]]> 

</script>    

