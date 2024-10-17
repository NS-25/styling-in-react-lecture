import "./Button.css";
const Button1 = ({ buttonText }) => {
  return (
    <>
    <h2 className="h2">Normal CSS</h2>
    <button className="btn">
      {buttonText}
    </button>
    </>
  );
};

export default Button1;
