const createElement = (elementType, props, ...children)=>{
    return {
        elementType,
        props,
        children: children.flat()
    };
};
const buildDOM = (vnode)=>{
    // handle text vnode
    if (typeof vnode === "string") return document.createTextNode(vnode);
     // handle function components
    if (typeof vnode.elementType === "function") return buildDOM(vnode.elementType({
        ...vnode.props,
        children: vnode.children
    }));
     // create node
    let node = document.createElement(vnode.elementType); // assign node attributes
    for(prop in vnode.props)node.setAttribute(prop, vnode.props[prop]);
     // render children
    for (child of vnode.children)node.appendChild(buildDOM(child));
    return node;
};
const render = (vdom, container)=>{
    container.appendChild(buildDOM(vdom));
};
const starters = [
    {
        name: "bulbasaur",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    {
        name: "charmander",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },
    {
        name: "squirtle",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    }
];
const TitleBox = ({ title , children  })=>{
    return createElement("div", {
        style: `padding: 2em;`
    }, createElement("h3", null, title), children);
};
const App = ()=>{
    return createElement("div", {
        style: "text-align: center;"
    }, createElement(TitleBox, {
        title: "Pokemon"
    }, starters.map(({ name , img  })=>createElement("div", null, createElement("img", {
            src: img
        }), createElement("p", null, name)))));
};
const container = document.getElementById("root"); // Our HTML document's body element
render(createElement(App, null), container);

//# sourceMappingURL=index.81027b9f.js.map
