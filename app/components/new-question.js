import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    submissionForm() {
      this.set('addNewQuestion', true);
    },

    saveQuestion1() {
      var params = {
        username: this.get('username'),
        city: this.get('city'),
        question: this.get('question'),
        message: this.get('message')
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveSubmission2', params);
    }
  }
});
