export default function FormData({
  cardHolder,
  getData,
  onBlur,
  cardNameError,
  cardNumberError,
  cardNum,
  cardDateError,
  month,
  year,
  cardCvcError,
  cvc,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="form__container">
          <div className="form__container__details">
            <div className="form__container__card--name card__data">
              <label htmlFor="name">Cardholder name</label>
              <input
                className={cardNameError ? "input__error" : ""}
                id="name"
                type="text"
                name="cardHolder"
                value={cardHolder}
                maxLength={25}
                placeholder="e.g. Jane Appleseed"
                onChange={getData}
                onBlur={onBlur}
              />
              <span className="error-message">{cardNameError}</span>
            </div>
            <div className="form__container__card--number card__data">
              <label htmlFor="number">Card number</label>
              <input
                className={cardNumberError ? "input__error" : ""}
                id="number"
                name="cardNum"
                value={cardNum}
                maxLength={19}
                placeholder="1234 5678 9123 0000 "
                onChange={getData}
                onBlur={onBlur}
              />
              <span className="error-message">{cardNumberError}</span>
            </div>
            <div className="form__container__card--info card__data two__columns">
              <div className="date">
                <label>Exp. date (mm/yy)</label>
                <div className="two__columns">
                  <input
                    className={!month && cardDateError ? "input__error" : ""}
                    type="number"
                    name="month"
                    value={month.slice(0, 2)}
                    placeholder="MM"
                    onChange={getData}
                    onBlur={onBlur}
                  />
                  <input
                    className={!year && cardDateError ? "input__error" : ""}
                    type="number"
                    name="year"
                    value={year.slice(0, 2)}
                    maxLength={2}
                    placeholder="YY"
                    onChange={getData}
                    onBlur={onBlur}
                  />
                </div>
                <span className="error-message">{cardDateError}</span>
              </div>
              <div className="cvc card__data">
                <label htmlFor="cvc">CVC</label>
                <input
                  className={cardCvcError ? "input__error" : ""}
                  type="number"
                  name="cvc"
                  value={cvc.slice(0, 3)}
                  maxLength={3}
                  placeholder="e.g. 123"
                  onChange={getData}
                  onBlur={onBlur}
                />
                <span className="error-message">{cardCvcError}</span>
              </div>
            </div>
            <button className="form__container__button btn">Confirm</button>
          </div>
        </div>
      </div>
    </form>
  );
}
