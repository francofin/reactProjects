import React from 'react';
import QuizType from './Quiztype';




function QuizBar(props){

    const quizArray = [
        {
            icon:"dice",
            type:"Regular"
        },
        {
            icon:"dumbbell",
            type:"Weighted"
        },
        {
            icon:"font",
            type:"Random"
        },
        {
            icon:"file-alt",
            type:"Multi"
        },
    ]

    const quizes = quizArray.map((quiz, i) => {
        return(
            <QuizType key={i} icon= {quiz.icon} quizType={quiz.type} userChoice= {props.userChoice}/>
        )
    })

 
    return(
        <div className='quiz-bar'>
            <h1>Choose Your Study Type</h1>
            <ul className="nav nav-pills nav-fill">
                {quizes}
            </ul>
        </div>
    )
}

export default QuizBar