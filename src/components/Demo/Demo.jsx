import "./Demo.style.css";
import { CatFacts } from "../CatFacts";

const Demo = () => {
  return (
    <div className="demo-container">
      <div className="content">
        <h1>Front End Exercises with Ruslan, Matt Potts & Mykyta Roilian</h1>
        <span>Monday, February 19 ⋅ 12:00PM – 01:30PM</span>
        <div className="data">
          <CatFacts />
        </div>
      </div>
    </div>
  );
};

export default Demo;
