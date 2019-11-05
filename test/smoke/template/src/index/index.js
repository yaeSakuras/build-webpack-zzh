import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import "./test.less";
import login from "../images/logo.png";
import "../common/test";

class Test extends React.Component {
    render() {
        debugger
        return (
            <div className="test">
                <div className="test-h1">test</div>
                <div>test hello world !!!</div>
                <img src={login} alt="pic"/>
            </div>
        )
    }
}

ReactDOM.render(
    <Test/>,
    document.getElementById('root')
);
