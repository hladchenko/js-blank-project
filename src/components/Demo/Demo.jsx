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
