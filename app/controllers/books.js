import Ember from 'ember';

export default Ember.Controller.extend({
	
	actions:{
		updateText(){
			let book=this.get('model');
			book.set('year',new Date(book.get('year')));
			book.save();
			this.transitionToRoute('application');
		},
		// bubbles up to the books route
		cancel(){
			console.log("I'm on the books controller");
			return true;
		}
	}
});
