import Ember from 'ember';

export default Ember.Route.extend({
	// Action bubbles up to the application route
	actions:{
		cancel(){
			return true;
		}
	}
});
