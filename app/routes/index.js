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

export default Ember.Route.extend({
  model() {
    return submissions;
  },
});
