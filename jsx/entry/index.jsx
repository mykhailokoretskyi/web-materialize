'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Inputs from '../components/inputs.jsx';

var container = document.getElementById('entry-point');
if (container){
    ReactDOM.render(
        <Inputs name="testInput" placeholder="Let`s test it!!!" />, container
    );
}
