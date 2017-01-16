import Ember from 'ember';

var submissions = [{
  id: 1,
  username: "ForPizzaSake",
  city: "Austin",
  question: "Best pizza place?",
  body: "I'm looking for the best place to eat pizza."
}, {
  id: 2,
  username: "ChristopherStalkin",
  city: "Portland",
  question: "Best IPA beers?",
  body: "What are some breweries with killer IPAs?"
}];

// var answers = [{
//   id: 1,
//   username: "NachoTaco",
//   answer: "Via 313 if you like deep dish. Backspace for Neapolitan style."
// }, {
//   id: 2,
//   username: "Thund3rDome",
//   answer: "Great Notion, Breakside, Fat Heads and Deschutes."
// }];

export default Ember.Route.extend({
  model() {
    return submissions;
  },
});
