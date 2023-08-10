import React from "react";
import "./../assets/css/global.css"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Card } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
    <Card className="text-center">
      <Card.Body>
        <Card.Text>
          SKIPPER NDT, <br />
         Paris Paris, Paris
        </Card.Text>

        <div className="icons">
          <FaFacebook className="fb" />
          <FaYoutube />
          <FaInstagram />
        </div>
      </Card.Body>
      <Card.Footer className="text-muted">
        Développé par Sabrine BEN SASSI
      </Card.Footer>
    </Card>
    </div>
  );
};

export default Footer;
