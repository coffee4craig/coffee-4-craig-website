import React, { useState } from "react";

const FaqCard = ({title, description}) => {
  const [clicked, setClicked] = useState(false);
  const [closingTransition, setClosingTransition] = useState(false);
  const backgroundChange = {
    backgroundColor: "#2db88e"
  };
  const colorChange = {
    color: "#2db88e"
  };

  const closingTrans = {
    animation: "0.4s linear shrink"
  };
  const handleClosingTransition = () => {
    setClosingTransition(true);
    setTimeout(() => {
      setClicked(false);
      setClosingTransition(false);
    }, 400);
  };
  return (
    <div className="faq-card">
      <div className="faq-rail" style={clicked ? backgroundChange : null} onClick={() => {clicked == false ? setClicked(true) : handleClosingTransition()}}>
        <p className="faq-card-title">{title}</p>
        {!clicked ? (
          <div className="faq__icon__container">
            <div className="faq-icon" >
              +
            </div>
          </div>
        ) : (
          <div className="faq__icon__container">
            <div
              className="faq-icon faq-icon--minus"
              style={clicked ? colorChange : null}
            >
              -
            </div>
          </div>
        )}
      </div>
      {clicked ? (
        <div
          style={closingTransition ? closingTrans : null}
          className="faq-content"
        >
          {description}
        </div>
      ) : null}
    </div>
  );
};

export default FaqCard;
