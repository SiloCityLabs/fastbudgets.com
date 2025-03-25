import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
        <meta
          name="description"
          content="Simple budgeting app to help you manage your finances."
        />
        <meta
          name="keywords"
          content="budgets, budgeting, finance, finances, money, save, spending, tracker"
        />
      </Head>
      <div className="main-container">
        <Header />
        <Container className="main-content">
          <h3 className="text-center my-3">SiloCityPages</h3>
          <Row className="shadow-lg p-3 bg-body rounded">
            <Col lg={8} className="mx-auto">
              <p>
                Welcome to Fast Budget! This is a simple budgeting app to help
                you manage your finances. You can create budgets, add expenses,
                and track your spending. You can also view reports to see how
                you are doing.
              </p>
              <p>
                To get started, click on the "Budgets" link in the navigation
                bar. From there, you can create a new budget by clicking on the
                "Add Budget" button. You can also view and edit existing budgets
                by clicking on the "View Budgets" button.
              </p>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
}
