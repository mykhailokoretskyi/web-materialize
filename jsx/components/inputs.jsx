'use strict';

import React from 'react';
import {EmailInput, Switch} from 'react-html-components';

export default class Inputs extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <div className="row">
                    <div className="col s8 offset-s2">
                        <EmailInput label="Test text input"
                                   name="testTextInput"
                                   required={true}
                                   validate={true}
                                   errorMessage="Fix it!!!"
                                   successMessage="Fixed!!!" />
                    </div>
                </div>
            </div>
        );
    }
}
