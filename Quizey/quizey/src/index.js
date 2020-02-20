import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";

import quizService from "./quizService";

import QuestionBox from "./components/QuestionBox";

import Result from "./components/Result";


class Quizey extends Component{
    state = {
        questionBank : [], //Instantiating local state within the array
        score: 0,
        responses: 0

    }; //this type of declaration is possible in js, thanks to babel

    //Invoking quizService
    getQuestions = () => {
        quizService().then(question => {
            this.setState({
                questionBank: question
            });
        });
    };

    //check if users answer matches the correct answer, if yes then update count
    computeAnswer = (answer, correctAnswer) => {
        if(answer === correctAnswer) {
            this.setState({
                score: this.state.score + 1
            });
        }
        this.setState({
            responses: this.state.responses < 5 ? this.state.rsponses + 1 : 5
        })
    }

    //to run the above when a component loads up, componentDidMount LifeCycleMethod is used
    componentDidMount(){
        this.getQuestions();
    }

    render(){
        return(
            <div className = "container">
                <div className = "title">Quizey</div>
               {//“How somebody is different?? Not different but genius?? (Find the answer, that's my quiz for you... No, jokers it's to easy with jokers)”
               }
               {// to render componentDidMount()
               }

               {    this.state.questionBank.length > 0 && 
                    this.state.responses < 5 &&
                    this.state.questionBank.map(
                        ({question, answers, correct, questionId}) => (
                            <QuestionBox 
                                question = {question} 
                                options = {answers} 
                                key={questionId}
                                selected = {answer => this.computeAnswer(answer,correct)}
                            />
                        )
                    
                    )}
                    {this.state.responses === 5? (<Result score = {this.state.score} playAgain= {this.playAgain} />
                        )    :null}
            </div>
        );
    }
}

ReactDOM.render(<Quizey/>, document.getElementById("root"));