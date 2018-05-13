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

  it('Created pet could be purchased', function(){
    return frisby
      .post(petstore.petBaseUrl, petInfo.newPet)
      .expect('status', 200)
      .then(function(result){
        order.orderDetails.petId = result.json[0].id;

        return frisby
          .post(`${stores.storeBaseUrl}/order`, order.orderDetails)
          .expect('status', 200)
          .inspectBody()
      })
  });
});