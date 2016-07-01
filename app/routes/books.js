import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		return this.store.findRecord('book',params.book_id);
	},
	// Now the action cancel bubbles up to the application route(came first from the controller)
	actions: {
		cancel(){
			console.log("hello");
			return true;
		}
	}
});
