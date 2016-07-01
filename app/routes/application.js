import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.findAll('book');
	},
	actions:{
		cancel(){
			console.log("an finally on the application route");
			this.transitionTo('application');
		},
		goToNew(){
			this.transitionTo('new');
		}
	
	}
});
