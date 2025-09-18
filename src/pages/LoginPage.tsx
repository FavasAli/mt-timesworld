import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import LoginForm from "../components/LoginForm";
import google_icon from "../assets/google_icon.svg";
import facebook_icon from "../assets/facebook_icon.svg";
import linkedin_icon from "../assets/linkedin_icon.svg";
import twitter_icon from "../assets/twitter_icon.svg";
import loginIllustration from "../assets/login-screen-image.png";

const LoginPage: React.FC = () => {
  return (
    <Container fluid className="login-container container">
      <Row className="w-100">
        <Col xs={12} md={8} className="left-column ">
          <div style={{ width: "364px" }}>
            <div className="login-form">
              <h2>Sign In</h2>
              <p>
                New user? <a href="/signup">Create an account</a>
              </p>
            </div>
            <LoginForm />
            <div className="mb-3 mt-3 d-flex align-items-center justify-content-center">
              <hr className="hr-line" />
              <p className="mb-0 w-100 mx-3">Or Sign In With</p>
              <hr className="hr-line" />
            </div>
            <div className="d-flex justify-content-around align-items-center">
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
          </div>
        </Col>
        <Col xs={12} md={4} className="right-column  d-none d-md-block">
          <div className="image-container">
            <Image
              src={loginIllustration} // Replace with your custom illustration
              alt="Login Illustration"
              fluid
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
