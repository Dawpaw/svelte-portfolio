import{A as e}from"./assets.DYAWT7UX.js";const u=(n,...t)=>{const r={...n};return Object.keys(r).forEach(s=>{t.includes(s)&&delete r[s]}),r},m=`# Svelte

---

[\`Svelte\`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.

The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.

<br/>

Svelte is :

- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.
- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.
- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.

<br/>

## Example

\`\`\`ts
<script>
    let count = 1;
    $: doubled = count * 2;
<\/script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>

// comment here
\`\`\`

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.
`,a=n=>n,d=[a({name:"Programming Languages",slug:"pro-lang"}),a({name:"Frameworks",slug:"framework"}),a({name:"Libraries",slug:"library"}),a({name:"Languages",slug:"lang"}),a({name:"Databases",slug:"db"}),a({name:"ORMs",slug:"orm"}),a({name:"DevOps",slug:"devops"}),a({name:"Testing",slug:"test"}),a({name:"Dev Tools",slug:"devtools"}),a({name:"Markup & Style",slug:"markup-style"}),a({name:"Design",slug:"design"}),a({name:"Soft Skills",slug:"soft"})],o=n=>{const t=u(n,"category");return n.category&&(t.category=d.find(r=>r.slug===n.category)),t},h=(...n)=>i.filter(t=>n.length===0?!0:n.includes(t.slug)),O=n=>{const t=[],r=[];return i.forEach(s=>{if(n.trim()&&!s.name.toLowerCase().includes(n.trim().toLowerCase()))return;if(!s.category){r.push(s);return}let l=t.find(g=>{var c;return g.category.slug===((c=s.category)==null?void 0:c.slug)});l||(l={items:[],category:s.category},t.push(l)),l.items.push(s)}),r.length!==0&&t.push({category:{name:"Others",slug:"others"},items:r}),t},p="Skills",i=[o({slug:"js",color:"yellow",description:"TODO",logo:e.JavaScript,name:"Javascript",category:"pro-lang"}),o({slug:"ts",color:"blue",description:"TODO",logo:e.TypeScript,name:"Typescript",category:"pro-lang"}),o({slug:"py",color:"blue",description:"TODO",logo:e.Python,name:"Python",category:"pro-lang"}),o({slug:"java",color:"orange",description:"TODO",logo:e.Java,name:"Java",category:"pro-lang"}),o({slug:"css",color:"blue",description:"TODO",logo:e.CSS,name:"CSS",category:"markup-style"}),o({slug:"html",color:"orange",description:"TODO",logo:e.HTML,name:"HTML",category:"markup-style"}),o({slug:"tailwind",color:"orange",description:"TODO",logo:e.Tailwind,name:"Tailwind",category:"markup-style"}),o({slug:"fastapi",color:"green",description:"TODO",logo:e.FastApi,name:"FastApi",category:"library"}),o({slug:"django",color:"green",description:"TODO",logo:e.Django,name:"Django",category:"library"}),o({slug:"flask",color:"black",description:"TODO",logo:e.Flask,name:"Flask",category:"library"}),o({slug:"ollama",color:"black",description:"TODO",logo:e.Ollama,name:"Ollama",category:"framework"}),o({slug:"langchain",color:"black",description:"TODO",logo:e.Langchain,name:"LangChain",category:"framework"}),o({slug:"svelte",color:"orange",description:m,logo:e.Svelte,name:"Svelte",category:"framework"}),o({slug:"postgresql",color:"blue",description:"TODO",logo:e.PostgreSQL,name:"PostgreSQL",category:"db"}),o({slug:"neo4j",color:"blue",description:"TODO",logo:e.Neo4j,name:"Neo4J",category:"db"}),o({slug:"git",color:"orange",description:"TODO",logo:e.Git,name:"Git",category:"devtools"}),o({slug:"docker",color:"blue",description:"TODO",logo:e.Docker,name:"Docker",category:"devtools"}),o({slug:"jupyter",color:"orange",description:"TODO",logo:e.Jupyter,name:"Jupyter Notebooks",category:"devtools"}),o({slug:"ant",color:"orange",description:"TODO",logo:e.Ant,name:"Ant",category:"devtools"}),o({slug:"maven",color:"orange",description:"TODO",logo:e.Maven,name:"Maven",category:"devtools"}),o({slug:"uml",color:"orange",description:"TODO",logo:e.UML,name:"UML",category:"devtools"}),o({slug:"en",color:"orange",description:"TODO",logo:e.English,name:"English",category:"lang"}),o({slug:"es",color:"orange",description:"TODO",logo:e.Spanish,name:"Spanish",category:"lang"}),o({slug:"jp",color:"orange",description:"TODO",logo:e.Japanese,name:"Japanese",category:"lang"}),o({slug:"de",color:"orange",description:"TODO",logo:e.German,name:"German",category:"lang"})],b={title:p,items:i};export{b as S,h as a,O as g};
