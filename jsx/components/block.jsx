'use strict';

import React from 'react';

export default class Block extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="row">
                <div className="col s12">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
