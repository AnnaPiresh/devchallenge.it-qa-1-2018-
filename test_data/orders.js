const number = Math.floor(Math.random()*10);
const date = new Date();

const orderDetails = {
  "id": number,
  "petId": 0,
  "quantity": number,
  "shipDate": date,
  "status": "placed",
  "complete": false
};

module.exports ={orderDetails};