import React, { useState, useEffect, useRef, useReducer, useContext, FC } from 'react';
import './Learnings.css'
import { UpdateMultipleState } from '../components/Learnings/UpdateMultipleState';
import { UseContext } from '../components/Learnings/UseContext';
import { UseEffectOneStateDependsOnAnother } from '../components/Learnings/UseEffectOneStateDependsOnAnother';
import { UseReducer } from '../components/Learnings/UseReducer';
import { UseRef } from '../components/Learnings/UseRef';


const Learnings: FC = () => {
    return (
        <div className='learningContainer'>
            <h1>Learning Hooks</h1>
            <UpdateMultipleState />
            <hr></hr>
            <UseEffectOneStateDependsOnAnother />
            <hr></hr>
            <UseRef />
            <hr></hr>
            <UseReducer />
            <hr></hr>
            <UseContext />
        </div>

    )
};

export default Learnings;