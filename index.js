const express = require('express');
const cors = require("cors");
const lodash = require('lodash');

const app = express();

app.use(cors());

const bears = [
  {
    "id": 1,
    "name": "Brown bear",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/330px-2010-kodiak-bear-1.jpg",
    "latinName": "Ursus arctos",
    "habitat": [
      "Eurasia",
      "North America"
    ]
  },
  {
    "id": 2,
    "name": "Polar bear",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg/330px-Polar_Bear_-_Alaska_%28cropped%29.jpg",
    "latinName": "Ursus maritimus",
    "habitat": [
      "Arctic circle"
    ]
  },
  {
    "id": 3,
    "name": "American black bear",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/01_Schwarzb%C3%A4r.jpg/330px-01_Schwarzb%C3%A4r.jpg",
    "latinName": "Ursus americanus",
    "habitat": [
      "North America"
    ]
  },
  {
    "id": 4,
    "name": "Giant panda",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/330px-Grosser_Panda.JPG",
    "latinName": "Ailuropoda melanoleuca",
    "habitat": [
      "China"
    ]
  }
];

const randomFailure = () => {
  const random = Math.floor(Math.random() * 10);
  return random === 1;
};

const generateRandomDelay = () => {
  const random = Math.floor(Math.random() * 5);
  return [100, 300, 600, 1100, 2000][random];
};

app.get('/', (req, res) => {
  return res.send('Hello world');
});

app.get('/bears', (req, res) => {
  const leanBears = bears.map(bear => lodash.omit(bear, ['latinName', 'habitat']));
  const randomDelay = generateRandomDelay();

  setTimeout(() => {
    return randomFailure() ? res.status(500).send('Unexpected error') : res.json(leanBears);
  }, randomDelay);

});

app.get('/bears/:bearId', (req, res) => {
  const bearId = Number(req.params.bearId);
  const randomDelay = generateRandomDelay();
  const bear = bears.find(bear => bear.id === bearId);

  setTimeout(() => {
    if (bear) {
      return randomFailure() ? res.status(500).send('Unexpected error') : res.json(bear);
    }

    return res.status(404).send('Bear not found');
  }, randomDelay);
  
});

app.listen(8080, () =>
  console.log(`Bear API listening on port 8080!`),
);