import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
	    cancel() {
	     console.log("I'm on the book-component.js");
	     this.sendAction();
	    }
  	}
			
});


