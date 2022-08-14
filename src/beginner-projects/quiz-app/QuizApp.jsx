import React, {useEffect, useState} from "react";
import {questions} from "./questions.jsx";
import {Button, Card, CardContent, CardHeader} from "@mui/material";

function QuizApp() {
    const [score, setScore] = useState(0)
    const [index, setIndex] = useState(0)
    const [showScore, setShowScore] = useState(false)
    const [question, setQuestion] = useState({
        question: questions[index]?.question,
        choices: [...questions[index]?.incorrectAnswers, questions[index]?.correctAnswer].sort(),
        correctAnswer: questions[index]?.correctAnswer,
        id: questions[index].id
    })
    useEffect(() => {
        if (index < questions.length-1) {
            console.log(question.question)
            setQuestion({
                question: questions[index].question,
                choices: [...questions[index].incorrectAnswers, questions[index].correctAnswer].sort(),
                correctAnswer: questions[index].correctAnswer,
                id: questions[index].id
            })
            console.log(question.question)
        }
        if (index === questions.length-1) {
            setShowScore(true)
        }
    }, [index])

    console.log("runned")
    const handleSubmit = (answer) => {
        console.log("submitted", index)
        if (answer === question.correctAnswer && index < questions.length)
            setScore(score + 1)
        setIndex(index + 1)


        console.log(answer === question.correctAnswer, score, questions.length)
    }

    const handleReplay = ()=>{
        setIndex(0)
        setShowScore(0)
        setScore(0)
    }
    const Score = () => {
        return (
            <div>
                <h1>Your Score is</h1>
                <h2>{score}</h2>
                <Button variant={"contained"} onClick={handleReplay}> Replay the game !</Button>
            </div>
        )
    }

    const ListOfChoices = () => {
        return (
            <div>
                <div className="card-content-left">
                    <h2>{question.question}</h2>
                    <p>Question {index}/{questions.length -1} </p>
                </div>
                <div className="card-content-right">
                </div>

                {
                    question.choices.map(choice => <Button key={question.id + choice}
                                                           onClick={() => handleSubmit(choice)}> {choice}</Button>)
                }
            </div>
        )
    }
    return (
        <div>
            <Card className={"card"}>
                <CardHeader title={"QuizApp"}/>
                <CardContent className={"card-content"}>
                    {
                        showScore ? <Score/> : <ListOfChoices/>
                    }
                </CardContent>
            </Card>
        </div>
    )
}


export default QuizApp