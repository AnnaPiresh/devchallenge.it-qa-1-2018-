const frisby = require('frisby');
const petstore = require('../test_data/test-variables');
const petInfo = require('../test_data/pets');

describe('New pets can be successfully added to a store and updated', function() {

  /*
  Creates a new pet with data specified in pets.js file
  After it checks whether id, name and status in response match data in request
   */
  it(`Add a new pet with id ${petInfo.newPet.id}`, function(){
    return frisby
      .post(`${petstore.petBaseUrl}`, petInfo.newPet)
      .expect('status', 200)
      .expect('bodyContains', 'id', petInfo.newPet.id)
      .expect('bodyContains', 'name', petInfo.newPet.name)
      .expect('bodyContains', 'status', petInfo.newPet.status);
  });

  /*
    Updates new created pet with data specified in pets.js file
    After it checks whether id, name and status in response match data in request
   */
  it(`Pet name should be changed from '${petInfo.newPet.name}' to '${petInfo.updatedPet.name}'`, function () {
    return frisby
      .put(`${petstore.petBaseUrl}`, petInfo.updatedPet)
      .expect('status', 200)
      .expect('bodyContains', 'id', petInfo.updatedPet.id)
      .expect('bodyContains', 'name', petInfo.updatedPet.name)
      .expect('bodyContains', 'status', petInfo.updatedPet.status);
  });


  /*
  Deletes a created pet
  Checks that deleted pet cannot be found by id
   */
  it(`Created pet with id ${petInfo.updatedPet.id} can be deleted`, function(){
    return frisby
      .del(`${petstore.petBaseUrl}/${petInfo.updatedPet.id}`)
      .expect('status', 200)
      .then(function(){
        return frisby
          .get(`${petstore.petBaseUrl}/${petInfo.updatedPet.id}`)
          .expect('status', 404);
      });
  });
});