import React from "react";
import { Link, useParams } from "react-router-dom";
import inspectionData from "./../../data/InspectionData.json";
import { ListGroup } from "react-bootstrap";
import { SlArrowLeftCircle } from "react-icons/sl";
const InspectionDetails = () => {
  let { id } = useParams();
  id = parseInt(id) - 1;
  let { inspections } = inspectionData;
  let inpection = inspections[id];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "1%",
      }}
    >
      <ListGroup action style={{ width: "25rem", margin: "1%" }}>
        <ListGroup.Item as="li" action variant="success">
          {inpection.name}{" "}
        </ListGroup.Item>
        <ListGroup.Item as="li">
          Type d'installation : {inpection.installationType}
        </ListGroup.Item>
        <ListGroup.Item as="li" disabled>
          Année de construction : {inpection.constructionYear}
        </ListGroup.Item>
        <ListGroup.Item as="li" disabled>
          Societé : {inpection.company}
        </ListGroup.Item>
        <ListGroup.Item as="li" disabled>
          Type : {inpection.type}
        </ListGroup.Item>
        <ListGroup.Item as="li" disabled>
          Diametre : {inpection.diameter}
        </ListGroup.Item>
        <ListGroup.Item as="li" disabled>
          Matériel : {inpection.material}
        </ListGroup.Item>
        <ListGroup.Item as="li" disabled>
          Revêtement : {inpection.coating}
        </ListGroup.Item>
      </ListGroup>

      <Link to="/" className="backTo">
        <div>
          <p>Retour </p>
          <SlArrowLeftCircle />
        </div>
      </Link>
    </div>
  );
};

export default InspectionDetails;
