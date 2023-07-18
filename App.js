import React from "react";
import ReactDOM from "react-dom/client";

const Title = ()=> (
    <h1 tabIndex="1" className="title">
        This is Using JSX
    </h1>
);

const HeadingComponent = () => (
    <>
        <div id="1st">
            {Title()}
            <Title />
            <h1>Namaste React Functional Component</h1>
        </div> 
        <div id="2nd">
            <h1>hello</h1>
        </div>
    </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

//JSX (transpiled before it reaches to JS) - PARCEL - BABEL
//JSX => Babel transpiles it to React.createElement=>React Element ->JS Object => HTMLElement(render)

root.render(<HeadingComponent />);
root.render(<Title />);