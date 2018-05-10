const frisby = require('frisby');
const petstore = require('../test-variables');

describe('Check that pets can be found by various statuses', function () {

  it(`Pets can be found by status '${petstore.statuses[0]}'`, function () {
    return frisby
      .get(`${petstore.baseUrl}/pet/findByStatus?status=${petstore.statuses[0]}`)
      .expect('status', 200)
      .expect('header', 'content-type', 'application/json')
      .then(function(result){
        expect(result.json[0].status).toBe(petstore.statuses[0]);
      });
  });

  it(`Pets can be found by status '${petstore.statuses[1]}'`, function () {
    return frisby
      .get(`${petstore.baseUrl}/pet/findByStatus?status=${petstore.statuses[1]}`)
      .expect('status', 200)
      .expect('header', 'content-type', 'application/json')
      .then(function(result){
        expect(result.json[0].status).toBe(petstore.statuses[1]);
      });
  });

  it(`Pets can be found by status '${petstore.statuses[2]}'`, function () {
    return frisby
      .get(`${petstore.baseUrl}/pet/findByStatus?status=${petstore.statuses[2]}`)
      .expect('status', 200)
      .expect('header', 'content-type', 'application/json')
      .then(function (result) {
        expect(result.json[0].status).toBe(petstore.statuses[2]);
      });
  });
});