import React from "react";
import inspectionData from "./../../data/InspectionData.json";
import { Button, Card } from "react-bootstrap";
import "./../../assets/css/global.css";
import { Link } from "react-router-dom";
const InspectionList = () => {
  let { inspections } = inspectionData;
  return (
    <div>
      <h1 className="title-insp">Liste des Inspections</h1>
      <div className="inspection-container">
        {inspections.map((insp, index) => {
          return (
            <Card
              key={index}
              style={{ width: "18rem", height: "15rem", margin: "1%" }}
            >
              <Card.Body>
                <Card.Title>{insp.name}</Card.Title>
                <Card.Text>
                  Societé : {insp.company}
                  <br />
                  Type : {insp.type}
                  <br />
                </Card.Text>
                <Link to={`/inspection/${index + 1}`}>
                  {" "}
                  <Button variant="success" className="btn">
                    En Savoir plus
                  </Button>{" "}
                </Link>
              </Card.Body>
              <Card.Footer className="text-muted">
                Année de construction : {insp.constructionYear}
              </Card.Footer>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default InspectionList;
