import React from "react";
import ReactDOM from "react-dom";

interface CardData {
  clue: string;
  answer: string;
}
interface CardsProps {
  data: CardData[];
}

const Cards = (props: CardsProps) => {
  return (
    <ul>
      {props.data.map((element) => {
        return (
          <li key={element.answer}>
            {element.clue} : {element.answer}
          </li>
        );
      })}
    </ul>
  );
};

window.onload = () => {
  const data = JSON.parse(document.getElementById("cards-data").innerHTML);
  ReactDOM.render(<Cards data={data} />, document.getElementById("root"));
};
