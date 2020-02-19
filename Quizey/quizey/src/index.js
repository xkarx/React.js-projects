import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";

class Quizey extends Component{
    render(){
        return(
            <div className = "container">
                <div className = "title">Quizey</div>
               {//“How somebody is different?? Not different but genius?? (Find the answer, that's my quiz for you... No, jokers it's to easy with jokers)”
               }
            </div>
        );
    }
}

ReactDOM.render(<Quizey/>, document.getElementById("root"));