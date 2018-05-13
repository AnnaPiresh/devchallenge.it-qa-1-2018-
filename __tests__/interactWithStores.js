const frisby = require('frisby');
const stores = require('../test_data/test-variables');
const petInfo = require('../test_data/pets');
const order = require('../test_data/orders');

describe(`Possible to place orders for various pets`, function(){

  /*
  Checks whether it's possible to get pets statuses
  And at least 1 status is returned
   */
  it('Return available pet inventories by statuses', function(){
    return frisby
      .get(`${stores.storeBaseUrl}/inventory`)
      .expect('status', 200)
      .then(function(result){
        expect(Object.keys(result.json).length).not.toBe(0);
      })
  });

  /*
  Create a pet and purchase it in order
  Verify response contains data specified in orders.js
   */
  it('Created pet can be purchased', function(){
    return frisby
      .post(stores.petBaseUrl, petInfo.newPet)
      .expect('status', 200)
      .then(function(result){
        order.orderDetails.petId = result.json.id;

        return frisby
          .post(`${stores.storeBaseUrl}/order`, order.orderDetails)
          .expect('status', 200)
          .expect('bodyContains', 'id', order.orderDetails.id)
          .expect('bodyContains', 'petId', result.json.id)
          .expect('bodyContains', 'quantity', order.orderDetails.qty)
          .expect('bodyContains', 'status', order.orderDetails.status)
          .expect('bodyContains', 'complete', order.orderDetails.complete);
      })
  });

  /*
  Find a created order using it's id
  Verify response matches data specified in orders.js
   */
  it('Created order can be found by id', function(){
    return frisby
      .get(`${stores.storeBaseUrl}/order/${order.orderDetails.id}`)
      .expect('status', 200)
      .expect('bodyContains', 'id', order.orderDetails.id)
      .expect('bodyContains', 'petId', order.orderDetails.petId)
      .expect('bodyContains', 'quantity', order.orderDetails.qty)
      .expect('bodyContains', 'status', order.orderDetails.status)
      .expect('bodyContains', 'complete', order.orderDetails.complete);
  });

  /*
  Delete a created order
  Verify searching for this order results in 404 status
   */
  it('Created order can be deleted', function(){
    return frisby
      .del(`${stores.storeBaseUrl}/order/${order.orderDetails.id}`)
      .expect('status', 200)
      .then(function(){
        return frisby
          .get(`${stores.storeBaseUrl}/order/${order.orderDetails.id}`)
          .expect('status', 404);
      });
  });
});
