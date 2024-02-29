import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={12} className="text-center">
          <p>Copyright © {currentYear} Dirken Jarne. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
