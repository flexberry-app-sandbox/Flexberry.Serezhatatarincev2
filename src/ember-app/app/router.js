import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-serezhatatarincev2-вендор-l');
  this.route('i-i-s-serezhatatarincev2-вендор-e',
  { path: 'i-i-s-serezhatatarincev2-вендор-e/:id' });
  this.route('i-i-s-serezhatatarincev2-вендор-e.new',
  { path: 'i-i-s-serezhatatarincev2-вендор-e/new' });
  this.route('i-i-s-serezhatatarincev2-операции-l');
  this.route('i-i-s-serezhatatarincev2-операции-e',
  { path: 'i-i-s-serezhatatarincev2-операции-e/:id' });
  this.route('i-i-s-serezhatatarincev2-операции-e.new',
  { path: 'i-i-s-serezhatatarincev2-операции-e/new' });
  this.route('i-i-s-serezhatatarincev2-пользователь-l');
  this.route('i-i-s-serezhatatarincev2-пользователь-e',
  { path: 'i-i-s-serezhatatarincev2-пользователь-e/:id' });
  this.route('i-i-s-serezhatatarincev2-пользователь-e.new',
  { path: 'i-i-s-serezhatatarincev2-пользователь-e/new' });
  this.route('i-i-s-serezhatatarincev2-рабочее-место-l');
  this.route('i-i-s-serezhatatarincev2-рабочее-место-e',
  { path: 'i-i-s-serezhatatarincev2-рабочее-место-e/:id' });
  this.route('i-i-s-serezhatatarincev2-рабочее-место-e.new',
  { path: 'i-i-s-serezhatatarincev2-рабочее-место-e/new' });
  this.route('i-i-s-serezhatatarincev2-тип-l');
  this.route('i-i-s-serezhatatarincev2-тип-e',
  { path: 'i-i-s-serezhatatarincev2-тип-e/:id' });
  this.route('i-i-s-serezhatatarincev2-тип-e.new',
  { path: 'i-i-s-serezhatatarincev2-тип-e/new' });
  this.route('i-i-s-serezhatatarincev2-филиал-l');
  this.route('i-i-s-serezhatatarincev2-филиал-e',
  { path: 'i-i-s-serezhatatarincev2-филиал-e/:id' });
  this.route('i-i-s-serezhatatarincev2-филиал-e.new',
  { path: 'i-i-s-serezhatatarincev2-филиал-e/new' });
});

export default Router;
