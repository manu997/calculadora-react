import React, { Component } from "react";
import Input from "bootstrap";

class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initial: true,
            number: 0
        }
    }
    render() {
        return (
            <div>
                <Input value={this.state.number} />
            </div>
        );
    }
}

export default Display;