const frisby = require('frisby');
const petstore = require('../test_data/test-variables');
const petInfo = require('../test_data/pets');

describe('Pets can be found and updated by id', function(){
  const petId = [];  //here the id of a created pet will be stored

  /*
  Creates a new pet and search for it using it's id
  After it checks if data in response matches the data for created pet
   */
  it('Create a pet and find it using id', function(){
    return frisby
      .post(petstore.petBaseUrl, petInfo.newPet)
      .then(function(result){
        petId.push(result.json.id);

        return frisby
          .get(`${petstore.petBaseUrl}/${result.json.id}`)
          .expect('status', 200)
          .expect('bodyContains', 'id', petInfo.newPet.id)
          .expect('bodyContains', 'name', petInfo.newPet.name)
          .expect('bodyContains', 'status', petInfo.newPet.status);
      })
  });

  /*
  Updates pet name and status with new data from pets.js file
  After it checks if data in response macthes data in request
   */
  it('Update created pet with form data', function(){
    return frisby
      .setup({
        request: {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      })
      .post(`${petstore.petBaseUrl}/${petId[0]}`,  {
        'name': petInfo.updatedPet.name,
        'status': petInfo.statuses[1]
      })
      .expect('status', 200)
      .then(function(){
        return frisby
          .get(`${petstore.petBaseUrl}/${petId[0]}`)
          .expect('status', 200)
          .expect('bodyContains', 'id', petId[0])
          .expect('bodyContains', 'name', petInfo.updatedPet.name)
          .expect('bodyContains', 'status', petInfo.statuses[1]);
      });
  });
});