import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      <h1>Expense Tracker</h1>
      <Navigation
        onLogout={props.onLogout}
      />
    </header>
  );
};

export default MainHeader;
