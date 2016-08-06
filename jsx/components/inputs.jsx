'use strict';

import React from 'react';
import {
    TextInput,
    EmailInput,
    PasswordInput,
    Switch,
    RadioButton,
    Checkbox
} from 'react-html-components';

export default class Inputs extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <div className="row">
                    <div className="col s12">
                        <TextInput label="Test text input"
                                   name="testTextInput"
                                   value="test"
                                   required={true} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <PasswordInput label="Test text input"
                                       name="testTextInput"
                                       placeholder="Password"
                                       required={true} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <EmailInput label="Test text input"
                                    id="testId"
                                   name="testTextInput"
                                   required={true}
                                   errorMessage="Fix it!!!"
                                   successMessage="Fixed!!!" />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <Switch label="Test text input"
                                checked={false}
                                name="switch5"
                                id="switch1" />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <Switch label="Test text input"
                                name="switch2"
                                id="switch2"
                                disabled={true} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <RadioButton label="Test text input" checked={false}
                                name="switch" />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <RadioButton label="Test text input"
                                     checked={true}
                                     name="switch" />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <RadioButton label="Test text input"
                                name="switch"
                                disabled={true} />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="first_name" type="text" className="validate" />
                            <label htmlFor="first_name">First Name</label>
                    </div>
                </div>
            </div>
        );
    }
}
