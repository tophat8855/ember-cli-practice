import DS from 'ember-data';

var Interest = DS.Model.extend({
  description: DS.attr('string'),
  img: DS.attr('string'),
});

Interest.reopenClass({
  FIXTURES : [
    {id: 1, description: "Classical Musicians", img: "assets/images/classical.jpg"},
    {id: 2, description: "Warm Puppies", img: "assets/images/puppy.jpg"},
    {id: 3, description: "Crashing busts of Beethoven", img: "assets/images/busts.gif"},
    {id: 4, description: "Stomping out germs", img: "assets/images/germs.jpg"},
    {id: 5, description: "Harassing baby brothers", img: "assets/images/rerun.jpg"},
  ]
});

export default Interest;
