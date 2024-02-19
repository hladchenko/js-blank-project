import "./Demo.style.css";
import { Table } from "react-bootstrap";
import { Cell } from "../Cell";

const Demo = () => {
  const rowsCount = 2;
  const columnsCount = 2;

  const rows = Array.from({ length: rowsCount }, (_, index) => index + 1);
  const columns = Array.from({ length: columnsCount }, (_, index) => index + 1);

  return (
    <div className="demo-container">
      <div className="content">
        <h1>Front End Exercises with Ruslan, Matt Potts & Mykyta Roilian</h1>
        <span>Monday, February 19 ⋅ 12:00PM – 01:30PM</span>
        <div className="data">
          <Table striped bordered hover>
            <tbody>
              {rows.map((rowIndex) => (
                <tr>
                  {columns.map((columnIndex) => (
                    <Cell row={rowIndex} column={columnIndex} />
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Demo;
