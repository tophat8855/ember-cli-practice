import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  img: DS.attr('string'),
});

//where to fixtures go? with the CLI, how does ember-data work?
