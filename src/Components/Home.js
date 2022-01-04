import Header from "./Header";
import Footer from "./Footer";
import { Navbar, Container, Row, Col} from 'react-bootstrap';

function Home() {
    return (
      <div >
        <Header/>
        <Container>
            <Row>
                <Col md={4}>
                    <div className="banner-img">
                        <img src="images/banner.png"/>
                    </div>
                </Col>
                <Col className="align-self-center" md={8}>
                    <div className="">
                        <h1 className="banner-heading">
                            The Unimex Network is an interconnected ecosystem of DeFi applications.
                        </h1>
                        <p className="banner-text">
                        The main idea behind the network is to generate mutual incentive structures for the flow of capital. This is intended to create a long-term feedback loop where value is redistributed between ecosystem token stakers and lenders, from across various chains and products.
                        </p>
                        <button className="primary-btn">Buy UMX</button>
                    </div>
                </Col>
            </Row>
            
        </Container>
        <div className="netbnner">
        </div>
            <Container>
                <Row>
                    <Col md={4}>
                        <div className="sub-card">
                            <img className="" src="images/bns.png"/>
                            <h2>Degen Protocol</h2>
                            <p className="">Easy going</p>
                            <button className="primary-btn">Buy UMX</button>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="sub-card">
                            <img className="" src="images/bns2.png"/>
                            <h2>Apemex Network</h2>
                            <p className="">Easy going</p>
                            <button className="primary-btn">Buy UMX</button>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="sub-card">
                            <img className="" src="images/bns3.png"/>
                            <h2>Farm Space</h2>
                            <p className="">Easy going</p>
                            <button className="secondary-btn">Buy UMX</button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="netbnner2">
            </div>
        <Footer/>
      </div>
    );
  }
  
  export default Home;