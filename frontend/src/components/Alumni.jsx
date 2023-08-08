import React from "react";
import Card from "./card";
import alumni from "./data";
import "./alumni.css";


const alumni2025 = [
  {
    "name": "Jignesh Barad",
    "image": "https://drive.google.com/open?id=1mcbN-wP6UAqy1t2quf73JvC8Q3bpncWO",
    "position": "Assistant Manager",
    "year": "2022",
    "text": "https://www.linkedin.com/in/jignesh-barad-9424a71a6"
  },
  {
    "name": "Oorja Dorkar",
    "image": "https://drive.google.com/open?id=1J8WGKxa27h93T7OWdr4GLrVBcYWXy3Gz",
    "position": "Assistant Manager, Bajaj Auto",
    "year": "2022",
    "text": "https://www.linkedin.com/in/oorja-dorkar-04b365179"
  },
  {
    "name": "Siddharthkumar B Zadafiya",
    "image": "https://drive.google.com/open?id=13DoW_MMBRKiH_BnMyZmDCIxn0T9ENmKt",
    "position": "Executive Sr. Engineer",
    "year": "2022",
    "text": "https://www.linkedin.com/in/siddharthkumarzadafiya/"
  },
  {
    "name": "Savai Thakkar",
    "image": "https://drive.google.com/open?id=1xVquIIZda7GCgm6m08aZkdRM19XYVEol",
    "position": "Pursuing MBA",
    "year": "2021",
    "text": "https://www.linkedin.com/in/savai-thakkar-921610176"
  },
  {
    "name": "Dhola Nikunj",
    "image": "https://drive.google.com/open?id=19tv5G_9z0VVMGofTOfHvTUuefd5Qvdpb",
    "position": "Jewellery Business",
    "year": "2022",
    "text": "http://linkedin.com/in/nikunj-dhola-5672751b5"
  },
  {
    "name": "Hemish Gangajaliya",
    "image": "https://drive.google.com/open?id=16rKrNnIDxx0djkAunh5b303r_2FwVzTA",
    "position": "Family Business",
    "year": "2021",
    "text": ""
  },
  {
    "name": "Mihir Panchal",
    "image": "https://drive.google.com/open?id=1Z-hed2ZG6AE--vvRe_n_6MIISEI7dAjB",
    "position": "Job",
    "year": "2021",
    "text": "https://www.linkedin.com/in/mihir-panchal-693b40172"
  },
  {
    "name": "Nikunj Hiteshkumar Dave",
    "image": "https://drive.google.com/open?id=1s06QuwHiBb3y-zqD7YuRKEdd-dEQjqsk",
    "position": "Executive Trainee",
    "year": "2023",
    "text": "https://www.linkedin.com/in/nikunj9"
  },
  {
    "name": "Kurvesh Darji",
    "image": "https://drive.google.com/open?id=1zU4jTh5lZ9VSZ-bOSqDfA6bolps-sNq3",
    "position": "Msc Aerospace engineering.",
    "year": "2021",
    "text": "https://www.linkedin.com/in/kurvesh-darji-a90b72179"
  },
  {
    "name": "Tirth Lodhiya",
    "image": "https://drive.google.com/open?id=1yCxmus87E-f783F2KRQairWLso3j5wnT",
    "position": "Job",
    "year": "2022",
    "text": "https://www.linkedin.com/in/lodhiyatirth"
  },
  {
    "name": "Ayush Jain",
    "image": "https://drive.google.com/open?id=1ZufnEEOaXDmDkK62UzTH0mVP4vRF62y1",
    "position": "Business Analyst",
    "year": "2022",
    "text": "https://www.linkedin.com/in/ayush-jain-a48291185"
  },
  {
    "name": "Jhalak Gandhi",
    "image": "https://drive.google.com/open?id=11xhzhXPnUI8HERxH6qBuH0OeEzBke91W",
    "position": "Supply Chain Materials Engineer",
    "year": "2018",
    "text": "https://www.linkedin.com/in/jhalak-gandhi-701267123"
  },
  {
    "name": "Akash Ravindra Kolhe",
    "image": "https://drive.google.com/open?id=1VHHJm_Ajge8NkxczBlTrvAa_T4hOJFZ0",
    "position": "Mechanical Design Engineer",
    "year": "2020",
    "text": "linkedin.com/in/akashrkolhe/"
  },
  {
    "name": "Ayush Jain",
    "image": "https://drive.google.com/open?id=1nZ4oO7m8E-bnAIM1JXPylc9UtnXV_4P_",
    "position": "Business Analyst",
    "year": "2022",
    "text": "https://www.linkedin.com/in/ayush-jain-a48291185"
  },
  {
    "name": "K Vamsi",
    "image": "https://drive.google.com/open?id=1DWuipXCRx8ZBERBETBs8iW7EdWU82DCG",
    "position": "Student",
    "year": "2021",
    "text": ""
  },
  {
    "name": "Shaan Polra",
    "image": "https://drive.google.com/open?id=12B5HOqRHQUAFmkUGHF929cWhMw6WpSm1",
    "position": "Pursuing Master degree",
    "year": "2022",
    "text": "https://www.linkedin.com/in/shaan-polra/"
  },
  {
    "name": "HANS RAJ PANWAR",
    "image": "https://drive.google.com/open?id=1Iihjdv1iJGf5-nx-aQsRmRJSmVZYSh4Z",
    "position": "Manager- Automobile Manufacturing",
    "year": "2018",
    "text": "https://www.linkedin.com/in/hans-raj-panwar-7a38221a9"
  },
  {
    "name": "Daksharajsinh Jadeja",
    "image": "https://drive.google.com/open?id=1ZcZ5WIR7BFMDd_D25av-ZGK5Z7zRyTdc",
    "position": "Job",
    "year": "2018",
    "text": "https://www.linkedin.com/in/daksharaj-jadeja-56266315a/"
  },
  {
    "name": "Arman Mansuri",
    "image": "https://drive.google.com/open?id=16IFcRzDe0zYmTGdRWQaRvXDkrilRB8ut",
    "position": "Product Manager",
    "year": "2020",
    "text": "https://drive.google.com/open?id=16IFcRzDe0zYmTGdRWQaRvXDkrilRB8ut"
  },
  {
    "name": "Avnish Dholakiya",
    "image": "https://drive.google.com/open?id=1tzJbLvLL4HUW4dZeMuL7V9o8KPOBLcGK",
    "position": "MT",
    "year": "2019",
    "text": "https://www.linkedin.com/in/avnish-dholakiya"
  },
  {
    "name": "Amol Shinde",
    "image": "https://drive.google.com/open?id=1PmG2xTH9ZB4ZQ6Ch98PqB-MNHNVKmxUG",
    "position": "Senior Manager",
    "year": "2017",
    "text": "https://www.linkedin.com/in/amol06shinde"
  }
]



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
