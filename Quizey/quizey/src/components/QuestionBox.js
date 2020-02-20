import React, {useState} from "react";

//for managing state in a function component, react offers a plug and play API known as HOOKS
// thus useState method is imported above

// selected used below is a prop
const QuestionBox = ({question, options, selected}) => {
  const [answer, setAnswer] = useState(options); //creating state variable answer, initial value set from the options
  // setAnswer is used to update the value of the variable
  return (
    <div className="questionBox">
      <div className="question">{question}</div>
      
    {// rendering a series of buttons
    }
	  {answer.map((text, index) => (
        <button
          key={index}
          className="answerBtn"
          onClick={() => {
            setAnswer([text]);
            selected(text);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default QuestionBox;
