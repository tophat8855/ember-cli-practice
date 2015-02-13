import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('connect');
  this.resource('about', function() {});
  this.resource('personal', function() {});
});

export default Router;
