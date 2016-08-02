'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Inputs from '../components/inputs.jsx';
import Layout from '../components/layout.jsx';
import Block from '../components/block.jsx';

var container = document.getElementById('entry-point');
if (container){
    ReactDOM.render(
        <Layout>
            <Block>
                <Inputs name="testInput" placeholder="Let`s test it!!!" />
            </Block>
        </Layout>
            , container
    );
}
