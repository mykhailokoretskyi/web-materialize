'use strict';

import React from 'react';

export default class Layout extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="layout">
                <div className="header" />
                <div className="bodyContent">
                    <div className="leftSideMenu" />
                    <div className="mainContent">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
