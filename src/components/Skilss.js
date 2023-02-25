import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from '../assets/img/2.jpg'
import img2 from '../assets/img/3.jpg'
import img3 from '../assets/img/4.jpg'
import img4 from '../assets/img/5.jpg'


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

return (
  <section className="skill" id="skills">
    <Container>
        <Row>
            <Col>
            <div className="skill-bx">
                <h2>Skills</h2>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                    <div className="item">
                    <img src={img3} alt="photos"/>
                    <h5>Web Development</h5>
                    </div>
                    <div className="item">
                    <img src={img2} alt="photos"/>
                    <h5>Brand Identify</h5>
                    </div>
                    <div className="item">
                    <img src={img1} alt="photos"/>
                    <h5>Design</h5>
                    </div>
                    <div className="item">
                    <img src={img4} alt="photos"/>
                    <h5>Something</h5>
                    </div>
                </Carousel>
            </div>
            </Col>
        </Row>
    </Container>
  </section>
 )
}
 
