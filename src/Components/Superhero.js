import { Card, Container, Row, Col } from "react-bootstrap"
import FilmSubtitle from "../assets/movienetAsset/film_subtitle.jpg"
import BgSubtitle from "../assets/movienetAsset/bgasset.jpg"

const Superhero = () => {
    return(
        <div className="sheetmargin">
        <Container id="superhero">
            <h1 className="text-white">Superhero Movies</h1>
            <Row>
                <Col md={4} className="padimage">
                    <Card className="bg-dark text-white movieImage">
                    <Card.Img src={FilmSubtitle} alt="film subtitle" className="images" />
                    <div className="p-2 m-2">
                    <Card.Title className="text-center">Robloxian Film</Card.Title>
                    <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                  </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </Card>
                </Col>
                <Col md={4} className="padimage">
                    <Card className="bg-dark text-white movieImage">
                    <Card.Img src={FilmSubtitle} alt="film subtitle" className="images" />
                    <div className="p-2 m-2">
                    <Card.Title className="text-center">Robloxian Film</Card.Title>
                    <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                  </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </Card>
                </Col>
                <Col md={4} className="padimage">
                    <Card className="bg-dark text-white movieImage">
                    <Card.Img src={FilmSubtitle} alt="film subtitle" className="images" />
                    <div className="p-2 m-2">
                    <Card.Title className="text-center">Robloxian Film</Card.Title>
                    <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                  </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </Card>
                </Col>
                <Col md={4} className="padimage">
                    <Card className="bg-dark text-white movieImage">
                    <Card.Img src={FilmSubtitle} alt="film subtitle" className="images" />
                    <div className="p-2 m-2">
                    <Card.Title className="text-center">Robloxian Film</Card.Title>
                    <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                  </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </Card>
                </Col>
                <Col md={4} className="padimage">
                    <Card className="bg-dark text-white movieImage">
                    <Card.Img src={FilmSubtitle} alt="film subtitle" className="images" />
                    <div className="p-2 m-2">
                    <Card.Title className="text-center">Robloxian Film</Card.Title>
                    <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                  </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </Card>
                </Col>
                <Col md={4} className="padimage">
                    <Card className="bg-dark text-white movieImage">
                    <Card.Img src={FilmSubtitle} alt="film subtitle" className="images" />
                    <div className="p-2 m-2">
                    <Card.Title className="text-center">Robloxian Film</Card.Title>
                    <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                  </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                    </div>
                </Card>
                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default Superhero