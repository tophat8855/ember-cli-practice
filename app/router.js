import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('connect');
  this.resource('about', function() {
    this.route('experience', {path: '/:experience_id'});
  });
  this.resource('personal', function() {
    this.route('interest', {path: '/:interest_id'});
  });
});

export default Router;
