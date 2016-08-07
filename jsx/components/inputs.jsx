'use strict';

import React from 'react';
import {
    TextInput,
    EmailInput,
    PasswordInput,
    Switch,
    RadioButton,
    Checkbox,
    Modal,
    ModalContent,
    ModalFooter,
    Button,
    FlatButton,
    LargeButton,
    FloatingButton
} from 'react-html-components';

export default class Inputs extends React.Component{
    constructor(props){
        super(props);

        this._triggerModal = this._triggerModal.bind(this);
    }

    _triggerModal(e){
        console.log("Open modal");
        this.refs.modalBS.open();
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




                <div className="row">
                    <div className="col s6">
                        <Button classes={["waves-effect", "waves-light"]}
                                clickCallback={this._triggerModal}>Modal</Button>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <LargeButton classes={["waves-effect", "waves-light"]}
                                clickCallback={function(){alert('clicked')}}>Large</LargeButton>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <FlatButton classes={["waves-effect", "waves-light"]}
                                     clickCallback={function(){alert('clicked')}}>Flat</FlatButton>
                    </div>
                </div>
                <div className="row">
                    <div className="col s6">
                        <FloatingButton classes={["waves-effect", "waves-light"]}
                                     clickCallback={function(){alert('clicked')}}>Floating</FloatingButton>
                    </div>
                </div>



                <Modal ref="modal">
                    <ModalContent>
                        <h4>Modal Header</h4>
                        <p>A bunch of text</p>
                    </ModalContent>
                    <ModalFooter>
                        <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
                    </ModalFooter>
                </Modal>
                <Modal type="modal-fixed-footer" ref="modalFF">
                    <ModalContent>
                        <h4>Modal Header</h4>
                        <p>A bunch of text</p>
                    </ModalContent>
                    <ModalFooter>
                        <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
                    </ModalFooter>
                </Modal>
                <Modal type="bottom-sheet" ref="modalBS">
                    <ModalContent>
                        <h4>Modal Header</h4>
                        <p>A bunch of text</p>
                    </ModalContent>
                    <ModalFooter>
                        <FlatButton classes={["modal-action","modal-close","waves-effect","waves-green"]}>Agree</FlatButton>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
