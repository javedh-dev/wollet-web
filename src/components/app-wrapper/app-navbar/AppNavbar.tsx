import React from "react";
import { Container, Form, Navbar } from "react-bootstrap";
import "./AppNavbar.css";

export default class AppNavbar extends React.Component<{}, {}> {
  render() {
    return (
      <Navbar bg={"white"} expand="lg" className={"app-nav"}>
        <Container fluid>
          <Navbar.Brand href="#" className={"app-nav-icon"}>
            Wollet
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className={"justify-content-end"}>
            <Form className="d-flex ">
              {/*<Avatar googleId="118096717852922241760" size="100" round={true}/>*/}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
