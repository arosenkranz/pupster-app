import axios from 'axios';

// create GET request for random dog image
// https://dog.ceo/api/breeds/image/random
export function getRandomDog() {
  return axios.get('https://dog.ceo/api/breeds/image/random');
}

// create GET request to get images of dogs of a certain breed
// https://dog.ceo/api/breed/<breed-name>/images
export function getDogBreedImages(breedName) {
  return axios.get(`https://dog.ceo/api/breed/${breedName}/images`);
}

// create GET request to get list of all dog breeds
// https://dog.ceo/api/breeds/list
export function getBreedList() {
  return axios.get('https://dog.ceo/api/breeds/list');
}

export default {
  getRandomDog,
  getDogBreedImages,
  getBreedList,
};
