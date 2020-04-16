import React, { Component } from 'react';
import { Button, Form, Jumbotron, Container, Row, Col, Card } from 'react-bootstrap';

// import API function we need
import API from '../utils/API';

class Search extends Component {
  state = {
    dogBreedList: [],
    dogBreedImages: [],
    breedSearch: '',
  };

  // on component mount, get random image
  componentDidMount() {
    this.getListOfBreeds();
  }

  // API call to get random dog image
  getListOfBreeds = () => {
    API.getBreedList()
      .then((res) => this.setState({ dogBreedList: res.data.message.flat() }))
      .catch((err) => console.log(err));
  };

  getBreedImages = (query) => {
    API.getDogBreedImages(query)
      .then((res) => this.setState({ dogBreedImages: res.data.message, breedSearch: '' }))
      .catch((err) => console.log(err));
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    if (!this.state.breedSearch) {
      return false;
    }

    this.getBreedImages(this.state.breedSearch);
  };

  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid className='bg-info text-light'>
          <Container className='text-center'>
            <h2 className='display-4'>
              <span role='img' aria-label='dog emoji'>
                🐶
              </span>{' '}
              See Dogs by Breed
            </h2>
            <Form>
              <Form.Group>
                <Form.Row className='justify-content-center'>
                  <Col xs={12} md={6}>
                    <Form.Control
                      size='lg'
                      type='text'
                      id='dogbreed-list'
                      placeholder='Dog Breed'
                      list='breed-list'
                      name='breedSearch'
                      value={this.state.breedSearch}
                      onChange={this.handleInputChange}
                    />
                    <datalist id='breed-list'>
                      {this.state.dogBreedList.map((breed) => (
                        <option key={breed} value={breed}>
                          {breed.charAt(0).toUpperCase() + breed.slice(1)}
                        </option>
                      ))}
                    </datalist>
                  </Col>
                  <Col xs={12} md={2}>
                    <Button onClick={this.handleFormSubmit} variant='dark' size='lg'>
                      Find Doggo
                    </Button>
                  </Col>
                </Form.Row>
              </Form.Group>
            </Form>
          </Container>
        </Jumbotron>
        <Container className='text-center my-4'>
          <Row>
            {this.state.dogBreedImages.map((img) => {
              return (
                <Col key={img} xs={6} md={3} lg={2} className='mb-3'>
                  <Card
                    className='bg-dark'
                    style={{
                      backgroundImage: `url(${img})`,
                      backgroundSize: 'cover',
                      minHeight: '20vh',
                    }}></Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Search;
