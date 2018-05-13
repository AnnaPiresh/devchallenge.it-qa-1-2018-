const casual = require('casual');
const id = casual.unix_time;

const statuses = ['available', 'pending', 'sold'];

const newPet = {
  "id": id,
    "category": {
    "id": 0,
      "name": "string"
  },
  "name": `${casual.word}`,
    "photoUrls": [
    "string"
  ],
    "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
    "status": "available"
};

const updatedPet = {
  "id": id,
    "category": {
    "id": 0,
      "name": "string"
  },
  "name": `${casual.word}`,
    "photoUrls": [
    "string"
  ],
    "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
    "status": "available"
};


module.exports = {statuses, newPet, updatedPet};
