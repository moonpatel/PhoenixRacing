import React from "react";
import Card from "./card";
import alumni from "./data";
import "./alumni.css";

function CreateEntry(alum) {
  return (
    <Card
      key={alum.id}
      name={alum.name}
      position={alum.position}
      img={alum.image}
      url={alum.url}
    />
  );
}
function Alumni() {
  let [graduatingYear, changeYear] = React.useState("");
  const [filteredAlumni, setFilteredAlumni] = React.useState(
    alumni.filter((alum) => alum.year === "2023")
  );
  React.useEffect(() => {
    let filteredData = alumni.filter((alum) => alum.year === graduatingYear);
    setFilteredAlumni(filteredData);
  }, [graduatingYear]);
  React.useEffect(() => {
    let initialFilteredData = alumni.filter((alum) => alum.year === "2023");
    setFilteredAlumni(initialFilteredData);
  }, []);
  const handleButtonClick = (value) => {
    changeYear(value);
  };
  console.log(graduatingYear);
  return (
    <div className="alumni-container">
      <div className="alumni-bar">
        <div className="alumni-bar-contain">
        <button
          value={2023}
          onClick={() => {
            handleButtonClick(2023);
          }}
        >
          2023
        </button>
        <button
          value={2022}
          onClick={() => {
            handleButtonClick(2022);
          }}
        >
          2022
        </button>
        <button
          value={2021}
          onClick={() => {
            handleButtonClick(2021);
          }}
        >
          2021
        </button>
        <button
          value={2020}
          onClick={() => {
            handleButtonClick(2020);
          }}
        >
          2020
        </button>
        </div>
      </div>
      <h1>Alumni</h1>
      <div className="alumni-year">
        {" "}
        {filteredAlumni.length > 0 ? (
          <div className="alumni-year-child">
            <h2 className="gradyear">{graduatingYear}</h2>
            {filteredAlumni.map(CreateEntry)}
          </div>
        ) : (
          <div className="alumni-year-child">
          <h2 className="alumni-gradyear">Over the Years</h2>
          {alumni.map(CreateEntry)}
          </div>
        )}
      </div>
    </div>
  );
}
export default Alumni;
