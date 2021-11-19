import classes from "./ButtonRound.module.css";

const ButtonRound = (props) => {
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

export default ButtonRound;
