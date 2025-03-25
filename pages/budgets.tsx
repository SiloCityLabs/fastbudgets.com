import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Budgets() {
  return (
    <>
      <Head>
        <title>Budgets</title>
        <meta name="description" content="This is the privacy policy." />
        <meta name="keywords" content="privacy policy" />
      </Head>
      <div className="main-container">
        <Header />
        <Container className="main-content" fluid>
          <Row>
            <Col>
              <h2 className="text-center">Budgets</h2>

              <Container
                id="privacy-policy"
                className="shadow-lg p-3 mb-5 bg-body rounded text-center"
              >
                <Row className="justify-content-md-center">
                  <Col lg={8}>
                    <p>
                      This page is not ready yet. Please check back later.
                    </p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
}
