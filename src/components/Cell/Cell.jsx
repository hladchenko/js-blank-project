import { useEffect, useState } from "react";
import axios from "axios";

const Cell = (props) => {
  const [value, setValue] = useState(null);
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://lean-interview-default-rtdb.firebaseio.com/ex/sheet/${props.row}/${props.column}.json`
      )
      .then(({ data }) => {
        console.log(data);
        setValue(data.value);
      });
  }, []);

  const changeCell = () =>
    axios.put(
      `https://lean-interview-default-rtdb.firebaseio.com/ex/sheet/${props.row}/${props.column}.json`,
      {
        value: value,
      }
    );

  const onClickHandler = () => {
    setIsEditable(true);
  };

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const onBlurHandler = () => {
    changeCell();
    setIsEditable(false);
  };

  return (
    <td onClick={onClickHandler} onBlur={onBlurHandler}>
      {isEditable ? <input onChange={onChangeHandler} value={value} /> : value}
    </td>
  );
};

export default Cell;
