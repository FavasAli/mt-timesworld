import { Col, Container, Image, Row } from "react-bootstrap";
import google_icon from "../assets/google_icon.svg";
import facebook_icon from "../assets/facebook_icon.svg";
import linkedin_icon from "../assets/linkedin_icon.svg";
import twitter_icon from "../assets/twitter_icon.svg";

const Footer = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <div className="d-flex justify-content-center align-items-center">
            <Image
              width={48}
              height={48}
              src={google_icon}
              alt="Google Icon"
              fluid
            />
            <Image
              width={48}
              height={48}
              src={facebook_icon}
              alt="Google Icon"
              fluid
            />
            <Image
              width={48}
              height={48}
              src={linkedin_icon}
              alt="Google Icon"
              fluid
            />
            <Image
              width={48}
              height={48}
              src={twitter_icon}
              alt="Google Icon"
              fluid
            />
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center mt-4">
            <p>admin.timesworld@gmail.com</p>
            <p>Copyright © 2022 Timesworld. All rights reserved</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
