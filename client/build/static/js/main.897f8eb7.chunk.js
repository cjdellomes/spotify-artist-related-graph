(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{111:function(e,t,a){e.exports=a(253)},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},253:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(109),r=a.n(i),d=(a(116),a(32)),o=a(33),l=a(1),h=a(35),c=a(34),u=(a(117),a(118),function(e){Object(h.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleChange=n.handleChange.bind(Object(l.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(l.a)(n)),n.handleReset=n.handleReset.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){this.props.onArtistChange(e.target.value)}},{key:"handleSubmit",value:function(e){this.props.onArtistSubmit(this.props.searchValue),e.preventDefault()}},{key:"handleReset",value:function(e){this.props.onGraphReset(),e.preventDefault()}},{key:"render",value:function(){return s.a.createElement("form",{id:"form-box",className:"transparent-blur",onSubmit:this.handleSubmit},s.a.createElement("button",{type:"button",onClick:this.handleReset},"Reset"),s.a.createElement("button",{type:"button",onClick:this.handleSubmit},"Search"),s.a.createElement("div",{id:"search-field"},s.a.createElement("input",{type:"text",value:this.props.searchValue,onChange:this.handleChange,placeholder:"Artist Name"})))}}]),a}(s.a.Component)),g=a(110),p=a.n(g),b=function(e){Object(h.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleArtistChange=n.handleArtistChange.bind(Object(l.a)(n)),n.handleArtistSubmit=n.handleArtistSubmit.bind(Object(l.a)(n)),n.handleGraphReset=n.handleGraphReset.bind(Object(l.a)(n)),n.handleNodeClick=n.handleNodeClick.bind(Object(l.a)(n)),n.getArtistNode=n.getArtistNode.bind(Object(l.a)(n)),n.getRelatedArtistEdge=n.getRelatedArtistEdge.bind(Object(l.a)(n)),n.addArtistToGraph=n.addArtistToGraph.bind(Object(l.a)(n)),n.addRelatedArtistsToGraph=n.addRelatedArtistsToGraph.bind(Object(l.a)(n)),n.drawRelatedArtists=n.drawRelatedArtists.bind(Object(l.a)(n)),n.state={searchValue:"",graph:{nodes:[],edges:[]},drawnNodes:new Set,drawnEdges:new Set,loadedArtists:new Set},n.options={autoResize:!0,layout:{hierarchical:!1},edges:{width:.15,color:{inherit:"from"},smooth:{type:"continuous"}},physics:{enabled:!0,repulsion:{centralGravity:0,springLength:50,springConstant:.01,nodeDistance:200,damping:.09},solver:"repulsion"},interaction:{hover:!0,tooltipDelay:200}},n.events={selectNode:n.handleNodeClick},n}return Object(o.a)(a,[{key:"handleArtistChange",value:function(e){this.setState({searchValue:e})}},{key:"handleArtistSubmit",value:function(e){this.drawArtistAndRelatedArtists(e)}},{key:"handleGraphReset",value:function(){this.setState({searchValue:"",graph:{nodes:[],edges:[]},drawnNodes:new Set,drawnEdges:new Set,loadedArtists:new Set})}},{key:"handleNodeClick",value:function(e){var t=e.nodes[0];this.state.loadedArtists.has(t)||(this.drawRelatedArtists(t),this.state.loadedArtists.add(t))}},{key:"drawArtistAndRelatedArtists",value:function(e){var t=this;fetch("/search/"+encodeURIComponent(e)).then((function(e){return e.json()})).then((function(e){var a=e.artist,n=e.related_artists;t.addArtistToGraph(t.state.graph,a),t.addRelatedArtistsToGraph(t.state.graph,a.id,n)}),(function(e){console.log(e)}))}},{key:"drawRelatedArtists",value:function(e){var t=this;fetch("/related-artists/"+encodeURIComponent(e)).then((function(e){return e.json()})).then((function(a){var n=a.related_artists;t.addRelatedArtistsToGraph(t.state.graph,e,n)}),(function(e){console.log(e)}))}},{key:"getArtistImageOrDefault",value:function(e,t){return e.images.length>0?e.images[e.images.length-1].url:t}},{key:"getArtistNode",value:function(e){if(null==e)return null;var t=this.getArtistImageOrDefault(e,null);return{id:e.id,label:e.name,title:e.name,shape:"circularImage",image:t}}},{key:"getRelatedArtistEdge",value:function(e,t){return null==e||null==t?null:{id:e+":"+t,from:e,to:t}}},{key:"addArtistToGraph",value:function(e,t){if(null!=t){var a=e.nodes.slice(),n=e.edges,s=this.getArtistNode(t);this.state.drawnNodes.has(s.id)||(this.state.drawnNodes.add(s.id),a.push(s)),this.setState({graph:{nodes:a,edges:n}})}}},{key:"addRelatedArtistsToGraph",value:function(e,t,a){if(null!=a){for(var n=e.nodes.slice(),s=e.edges.slice(),i=0;i<a.length;i++){var r=a[i],d=this.getArtistNode(r),o=this.getRelatedArtistEdge(t,d.id);this.state.drawnNodes.has(d.id)||(this.state.drawnNodes.add(d.id),n.push(d)),this.state.drawnEdges.has(o.id)||(this.state.drawnEdges.add(o.id),s.push(o))}this.setState({graph:{nodes:n,edges:s}})}}},{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement(u,{searchValue:this.state.searchValue,onArtistChange:this.handleArtistChange,onArtistSubmit:this.handleArtistSubmit,onGraphReset:this.handleGraphReset}),s.a.createElement("div",{className:"fullscreen"},s.a.createElement(p.a,{graph:this.state.graph,options:this.options,events:this.events})))}}]),a}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[111,1,2]]]);
//# sourceMappingURL=main.897f8eb7.chunk.js.map