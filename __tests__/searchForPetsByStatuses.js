const frisby = require('frisby');
const petstore = require('../test_data/test-variables');
const petInfo = require('../test_data/pets');

describe('Check that pets can be found by various statuses', function () {

  /*
  Search for a first of available statuses specified in pets.js
   */
  it(`Pets can be found by status '${petInfo.statuses[0]}'`, function () {
    return frisby
      .get(`${petstore.baseUrl}/pet/findByStatus?status=${petInfo.statuses[0]}`)
      .expect('status', 200)
      .expect('header', 'content-type', 'application/json')
      .then(function(result){
        expect(result.json[0].status).toBe(petInfo.statuses[0]);
      });
  });


  /*
  Search for a second of available statuses specified in pets.js
   */
  it(`Pets can be found by status '${petInfo.statuses[1]}'`, function () {
    return frisby
      .get(`${petstore.baseUrl}/pet/findByStatus?status=${petInfo.statuses[1]}`)
      .expect('status', 200)
      .expect('header', 'content-type', 'application/json')
      .then(function(result){
        expect(result.json[0].status).toBe(petInfo.statuses[1]);
      });
  });


  /*
  Search for a third of available statuses specified in pets.js
   */
  it(`Pets can be found by status '${petInfo.statuses[2]}'`, function () {
    return frisby
      .get(`${petstore.baseUrl}/pet/findByStatus?status=${petInfo.statuses[2]}`)
      .expect('status', 200)
      .expect('header', 'content-type', 'application/json')
      .then(function (result) {
        expect(result.json[0].status).toBe(petInfo.statuses[2]);
      });
  });

});