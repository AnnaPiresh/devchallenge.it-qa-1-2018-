const frisby = require('frisby');
const petstore = require('../test-variables');

it('Request should return 200 status', function () {
  return frisby
    .get(`${petstore.baseUrl}/pet/findByStatus?status=${petstore.statuses[0]}`)
    .expect('status', 200);
});

it('Content type of response should be application/json', function(){
  return frisby
    .get(`${petstore.baseUrl}/pet/findByStatus?status=${petstore.statuses[0]}`)
    .expect('header', 'content-type', 'application/json');
});