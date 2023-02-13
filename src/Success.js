import img from "./images/icon-complete.svg";
export default function Success() {
  return (
    <div className="success">
      <div className=" container success__container">
        <img src={img} alt="" />
        <h3>Thank you</h3>
        <p>We've added your card details</p>
        <button className="btn" onClick={() => window.location.reload(false)}>
          Continue
        </button>
      </div>
    </div>
  );
}
