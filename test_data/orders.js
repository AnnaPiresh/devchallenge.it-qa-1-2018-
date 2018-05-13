const orderId = Math.floor(Math.random()*10);
const date = new Date();

const orderDetails = {
  "id": orderId,
  "petId": 0,
  "quantity": 0,
  "shipDate": date,
  "status": "placed",
  "complete": false
};

module.exports ={orderId, orderDetails};