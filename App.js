const root = ReactDOM.createRoot(document.getElementById("root"))
const heading = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{id:"heading"},"This is from React h1!"),
        React.createElement("h2",{id:"heading2"},"This is from React h2!")
    ]
    ),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{id:"heading"},"This is from React h1!"),
        React.createElement("h2",{id:"heading2"},"This is from React h2!")
    ]
    )
]

)
console.log(heading) //object
root.render(heading)