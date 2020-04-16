import React, { Component } from 'react';
import { Button, Jumbotron, Container, Row, Col, Spinner, Card, Toast } from 'react-bootstrap';

// import API function we need
import { getRandomDog } from '../utils/API';

class Discover extends Component {
  state = {
    dogImage: '',
    matchCount: 0,
    hasMatched: false,
    imageLoaded: false,
  };

  // on component mount, get random image
  componentDidMount() {
    this.getDogImage();
  }

  // API call to get random dog image
  getDogImage = () => {
    getRandomDog()
      .then((res) => this.setState({ dogImage: res.data.message, imageLoaded: true }))
      .catch((err) => console.log(err));
  };

  // handleButtonClick method
  handleButtonClick = (voteType) => {
    // if upvote or if downvote
    if (voteType === 'up') {
      return this.handleUpVote();
    }

    this.setState({ imageLoaded: false });
    setTimeout(() => this.getDogImage(), 2000);
  };

  handleUpVote = () => {
    // generate a random number between 1 and 5
    const randomNum = Math.floor(Math.random() * 5) + 1;

    let matchCount = this.state.matchCount;

    // if randomNum is 3, you match
    if (randomNum === 3) {
      matchCount += 1;
    }
    this.setState({ matchCount, imageLoaded: false, hasMatched: matchCount !== this.state.matchCount ? true : false });
    setTimeout(() => this.getDogImage(), 2000);
  };

  render() {
    return (
      <>
        <Jumbotron fluid className='bg-info text-light'>
          <Container className='text-center'>
            <h2 className='display-4'>Meet Your New Doggo Friend</h2>
            <h3>
              You've matched with {this.state.matchCount} {this.state.matchCount === 1 ? 'doggo' : 'doggos'}
            </h3>
          </Container>
        </Jumbotron>
        <Container fluid className='text-center my-4'>
          <Row className='justify-content-center align-items-center' style={{ minHeight: '30vh' }}>
            <Col xs={12} md={8} lg={6}>
              {!this.state.imageLoaded ? (
                <Spinner animation='grow' variant='danger' />
              ) : (
                <Card
                  className='bg-dark'
                  style={{
                    backgroundImage: `url(${this.state.dogImage})`,
                    backgroundSize: 'cover',
                    minHeight: '60vh',
                  }}>
                  <Card.ImgOverlay className='d-flex justify-content-between align-items-end'>
                    <Button
                      size='lg'
                      variant='danger'
                      className='px-4 py-2'
                      onClick={() => this.handleButtonClick('down')}>
                      {' '}
                      <span role='img' aria-label='thumbs down emoji'>
                        👎🏼
                      </span>{' '}
                      No Doggo
                    </Button>

                    <Button size='lg' variant='info' className='px-4 py-2' onClick={() => this.handleButtonClick('up')}>
                      {' '}
                      <span role='img' aria-label='thumbs up emoji'>
                        👍🏼
                      </span>{' '}
                      Yes Doggo
                    </Button>
                  </Card.ImgOverlay>
                </Card>
              )}
            </Col>
          </Row>
          {this.state.hasMatched ? (
            <Toast
              className='bg-success text-light'
              style={{ position: 'fixed', right: 20, bottom: 20 }}
              onClose={() => this.setState({ hasMatched: false })}
              delay={7000}
              autohide>
              <Toast.Body>Woohoo, you've matched with a doggo!</Toast.Body>
            </Toast>
          ) : (
            ''
          )}
        </Container>
      </>
    );
  }
}

export default Discover;
