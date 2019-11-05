import React from "react";
import ReactDOM from "react-dom";
import "../common/test";

class Serach extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Text:null
        }
    }

    onClick(){
        import("./text.js").then(Text => {
            this.setState({
                Text:Text.default
            })
        })
    }
    render() {
        const {Text} = this.state;
        return (
            <div>
                <div className="test-h1">search</div>
                <button onClick={this.onClick.bind(this)}>button</button>
                {
                    Text? <Text /> : null
                }
            </div>
        )
    }
}

ReactDOM.render(
    <Serach/>,
    document.getElementById('root')
);
