import Ember from 'ember';

export default Ember.Controller.extend({
	info: {},
	actions:{
		newText(){
			let inf=this.get('info');
			let newBook=this.store.createRecord('book',{
				title: inf.title,
				author: inf.author,
				year: new Date(inf.year)
			},()=>{
				console.log('failded');
			});
			newBook.save().then(()=>{
				this.transitionToRoute('application');
				this.set('info',{});
			});
		},
		// it return true so the controller is not handling this action.
		//This action will be bubbled up to be handle by the new route
		cancel(){
			console.log("I'm on the new controller");
			return true;
		}
	}
});
