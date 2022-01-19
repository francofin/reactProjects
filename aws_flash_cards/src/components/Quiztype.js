import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faFont, faFileAlt, faDice, faCompass } from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
library.add(faDumbbell);
library.add(faFont);
library.add(faFileAlt);
library.add(faDice);
library.add(faCompass);

function QuizType(props){
    return(

        <li className='col-sm-2 text-center offset-sm-1'>
            <div className="nav-card" onClick={()=>{props.userChoice(props.quizType)}}>
            <FontAwesomeIcon icon={props.icon} size="4x"/>
            <span>{props.quizType}</span>
            </div>
        </li>
    )
}

export default QuizType