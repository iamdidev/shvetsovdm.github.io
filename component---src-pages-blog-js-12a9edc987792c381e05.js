(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{129:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});a(29);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(137),s=function(e){var t=e.frontmatter,a=t.title,n=t.date,i=t.formatedDate,o=e.fields.slug;return r.a.createElement("article",{className:"sdm-article"},r.a.createElement("a",{className:"sdm-multiline-link",href:o},a),r.a.createElement("div",{className:"sdm-article__date"},r.a.createElement("time",{dateTime:n},i)))},l=function(e){var t=e.data,a=t.allMarkdownRemark.edges.map(function(e){return e.node});return r.a.createElement(c.a,null,r.a.createElement("section",{className:"sdm-layot__block"},r.a.createElement("h1",null,"Blog"),a.map(function(e,t){return r.a.createElement(s,Object.assign({key:t},e))})))};s.propTypes={frontmatter:o.a.object,fields:o.a.object},l.propTypes={data:o.a.object};var u="884041138";t.default=l},135:function(e,t,a){var n;e.exports=(n=a(139))&&n.default||n},136:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(134),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(135),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var d=a(28);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},137:function(e,t,a){"use strict";a(141);var n=a(138),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(142),l=a.n(s),u=a(14),d=a(136),m=(a(140),function(e,t){return RegExp(e).test(t)}),p=function(e){var t=e.children;return i.a.createElement(d.StaticQuery,{query:"4202367756",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"author",content:"Dmitry Shvetsov"},{name:"og:title",content:e.site.siteMetadata.title},{name:"og:url",content:e.site.siteMetadata.host},{name:"og:description",content:e.site.siteMetadata.description},{name:"og:image",content:e.site.siteMetadata.gravatar}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(u.Location,null,function(e){var t=e.location;return"/"===t.pathname?null:i.a.createElement("nav",{className:"sdm-nav"},m("^/blog/?$",t.pathname)&&i.a.createElement(d.Link,{to:"/"},"Main page"),m("^/blog/.+$",t.pathname)&&i.a.createElement(d.Link,{to:"/blog"},"All articles"))}),i.a.createElement("div",{className:"sdm-layout"},t,i.a.createElement("footer",{className:"sdm-layout__block sdm-layout__block--footer"},i.a.createElement("p",null,"© Dmitry Shvetsov, 2016-2019"))))},data:n})};p.propTypes={children:c.a.node.isRequired},t.a=p},138:function(e){e.exports={data:{site:{siteMetadata:{title:"Dmitry Shvetsov, Fullstack Developer",description:"Full stack web developer. I use with love Ruby, Node.js, JavaScript, SQL, NoSQL databases. Based in Vladivostok, Russia.",host:"https://shvetsovdm.github.io/",gravatar:"https://www.gravatar.com/avatar/b8c8cd15abf09e505baec08c61a054a7"}}}}},139:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(46),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},140:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-blog-js-12a9edc987792c381e05.js.map