describe('Testing Routes', function () {

beforeEach(module('RelifeApp'));

it('Should test routes',
inject(function ($route) {

  expect($route.routes['/'].controller).toBe('');
  expect($route.routes['/'].templateUrl).toEqual('templates/home.html');

  expect($route.routes['/about'].controller).toBe('');
  expect($route.routes['/about'].templateUrl).toEqual('templates/about.html');

  expect($route.routes['/faq'].controller).toBe('');
  expect($route.routes['/faq'].templateUrl).toEqual('templates/faq.html');

  expect($route.routes['/contact'].controller).toBe('');
  expect($route.routes['/contact'].templateUrl).toEqual('templates/contact.html');

  expect($route.routes['/register'].controller).toBe('RegistrationController');
  expect($route.routes['/register'].templateUrl).toEqual('templates/register.html');

  expect($route.routes['/success'].controller).toBe('');
  expect($route.routes['/success'].templateUrl).toEqual('templates/success.html');

  expect($route.routes['/fail'].controller).toBe('');
  expect($route.routes['/fail'].templateUrl).toEqual('templates/fail.html');

}));

});