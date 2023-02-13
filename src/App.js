import "./App.css";
import { useState } from "react";
import Success from "./Success";
import Cards from "./Cards";
import CardBack from "./images/bg-card-back.png";
import CardFront from "./images/bg-card-front.png";
import CardLogo from "./images/card-logo.svg";
import FormData from "./FormData";
import Footer from "./Footer";

function App() {
  const [data, setData] = useState({
    cardHolder: "",
    cardNum: "",
    cvc: "",
    month: "",
    year: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    cardNameError: "",
    cardNumberError: "",
    cardCvcError: "",
    cardDateError: "",
  });

  const [valid, setValid] = useState(false);

  function getData(e) {
    e.preventDefault();

    setData((prevData) => {
      return {
        ...prevData,
        [e.target.name]:
          e.target.name === "month" || e.target.name === "year"
            ? e.target.value.slice(0, 2)
            : e.target.name === "cardNum"
            ? e.target.value
                .replace(/\s/g, "")
                .replace(/(.{4})/g, "$1 ")
                .trim()
            : e.target.name === "cvc"
            ? e.target.value.slice(0, 3)
            : e.target.value,
      };
    });
  }

  function handleErrors() {
    setErrorMessage((prevError) => {
      return {
        ...prevError,
        cardNameError: data.cardHolder.replace(/\s/g, "").match(/[^a-zA-Z]/)
          ? "Wrong format, letters only"
          : !data.cardHolder
          ? "Can't be blank"
          : "",
        cardNumberError: data.cardNum.match(/[a-zA-Z]/)
          ? "Wrong format, numbers only"
          : !data.cardNum
          ? "Can't be blank"
          : data.cardNum.length < 19
          ? "Please enter 16 digit number"
          : "",
        cardDateError:
          !data.month || !data.year
            ? "Can't be blank"
            : data.month > 31 ||
              data.month === "00" ||
              data.month.length < 2 ||
              data.month < 1 ||
              data.year.length < 2 ||
              data.year < 1
            ? "Incorrect format"
            : "",
        cardCvcError: !data.cvc
          ? "Can't be blank"
          : data.cvc < 1
          ? "Incorrect format"
          : "",
      };
    });

    for (let error in errorMessage) {
      if (errorMessage[error]) {
        return;
      }
    }

    for (let x in data) {
      if (!data[x]) {
        return;
      }
    }

    setValid(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleErrors();
  }

  return (
    <>
      <main>
        <div className="card">
          <Cards
            CardBack={CardBack}
            CardFront={CardFront}
            logo={CardLogo}
            cardNum={data.cardNum}
            cvc={data.cvc}
            cardHolder={data.cardHolder}
            month={data.month || "00"}
            year={data.year || "00"}
          />
          {!valid && (
            <FormData
              cardHolder={data.cardHolder}
              cardNum={data.cardNum}
              month={data.month}
              year={data.year}
              cvc={data.cvc}
              cardNameError={errorMessage.cardNameError}
              cardNumberError={errorMessage.cardNumberError}
              cardDateError={errorMessage.cardDateError}
              cardCvcError={errorMessage.cardCvcError}
              getData={getData}
              onBlur={handleErrors}
              handleSubmit={handleSubmit}
            />
          )}
          {valid && <Success />}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
