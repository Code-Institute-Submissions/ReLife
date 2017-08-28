describe('Testing Routes', function () {

beforeEach(module('RelifeApp'));

it('Should test routes',
inject(function ($route) {

  expect($route.routes['/'].templateUrl).toEqual('templates/home.html');

  expect($route.routes['/about'].templateUrl).toEqual('templates/about.html');

  expect($route.routes['/faq'].templateUrl).toEqual('templates/faq.html');

  expect($route.routes['/contact'].templateUrl).toEqual('templates/contact.html');

  expect($route.routes['/register'].controller).toBe('RegistrationController');
  expect($route.routes['/register'].templateUrl).toEqual('templates/register.html');

  expect($route.routes['/success'].templateUrl).toEqual('templates/success.html');

  expect($route.routes['/fail'].templateUrl).toEqual('templates/fail.html');

}));

});