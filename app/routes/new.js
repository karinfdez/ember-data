import Ember from 'ember';

export default Ember.Route.extend({
	// Action bubbles up to the application route
	actions: {
		cancel(){
			console.log("I'm on the new route");
			return true;
		}
	}
});
