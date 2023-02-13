export default function Images(props) {
  return (
    <div className="img__container">
      <div className="img__container--details container">
        <div className="card__img--back card__img">
          <img src={props.CardBack} alt="" />
          {props.cvc ? (
            <p className="card__img--back__number">{props.cvc}</p>
          ) : (
            <p className="card__img--back__number">000</p>
          )}
        </div>

        <div className="card__img--front card__img">
          <img src={props.CardFront} alt="" />
          <div className="card__img--front__info">
            <img className="logo" src={props.logo} alt="" />
            <div className="card__img--front__text">
              {props.cardNum ? (
                <p className="card__img--front__number">{props.cardNum}</p>
              ) : (
                <p className="card__img--front__number">0000 0000 0000 0000</p>
              )}

              <div className="two__columns">
                {props.cardHolder ? (
                  <p className="card__img--front__name">{props.cardHolder}</p>
                ) : (
                  <p className="card__img--front__name">Jane Appleseed</p>
                )}
                {props.month || props.year ? (
                  <p className="card__img--front__date">
                    {props.month}/{props.year}
                  </p>
                ) : (
                  <p className="card__img--front__date">00/00</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
