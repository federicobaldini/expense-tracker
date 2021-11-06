import classes from "./ExpenseFilter.module.css";

const ExpenseFilter = (props) => {
  const yearsFilter = ["2018", "2019", "2020", "2021", "2022"];

  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className={classes['expenses-filter']}>
      <div className={classes['expenses-filter__control']}>
        <label className={classes['expenses-filter__label']}>Filter by year</label>
        <select className={classes['expenses-filter__select']} value={props.selected} onChange={dropdownChangeHandler}>
          {yearsFilter.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
