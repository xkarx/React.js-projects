import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";

import quizService from "./quizService";

class Quizey extends Component{
    state = {
        questionBank : [] //Instantiating local state within the array
    }; //this type of declaration is possible in js, thanks to babel

    //Invoking quizService
    getQuestions = () => {
        quizService().then(question => {
            this.setState({
                questionBank: question
            });
        });
    };

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
                    this.state.questionBank.length > 0 && 
                    this.state.questionBank.map(
                        ({question, answers, correct, questionId}) => <h4>{question}</h4>
                    )
               }
            </div>
        );
    }
}

ReactDOM.render(<Quizey/>, document.getElementById("root"));