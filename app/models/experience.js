import DS from 'ember-data';

var Experience = DS.Model.extend({
  description: DS.attr('string'),
  img: DS.attr('string'),
});

Experience.reopenClass({
  FIXTURES: [
    {id: 1, description: "Fussbudget", img: "assets/images/fuss.jpg"},
    {id: 2, description: "Own Psychiatric Practice for 3 Years", img: "assets/images/psych.jpg"},
    {id: 3, description: "Role of Christmas Queen in Christmas Play", img: "assets/images/queen.jpg"},
    {id: 4, description: "Right Fielder for local baseball team", img: "assets/images/baseball.jpg"},
    {id: 5, description: "Collected Halloween candy for kids trapped in delusions of the Great Pumpkin", img: "assets/images/halloween.jpg"},
    {id: 6, description: "Assists local kids in football punting practice", img: "assets/images/football.jpg"},
    ]
});

export default Experience;
