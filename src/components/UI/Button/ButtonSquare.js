import classes from "./ButtonSquare.module.css";

const ButtonSquare = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`${classes["button"]} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default ButtonSquare;
