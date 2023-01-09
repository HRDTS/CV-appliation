import React, { Component } from "react";
import Educational from "./educational";
import Overview from "./overview";
import './css/render.css'


class Render extends Component {
    constructor() {
        super();
    }
    
    

    render() {
        return (
            <div className="render">
                <div className="personalSegment"> personal</div>
                <div className="educationalSegment">educational</div>
                <div className="professionalSegment">professional</div>
            </div>
        )
    }
}

export default Render;