import Ember from 'ember';
console.log( 'the view route' );
export default Ember.Route.extend( {
    model: function(){
        return this.store.findAll( 'schedule' );
    },
    renderTemplate: function(){
        this.render( 'schedules/view', {
            into: 'schedules'
        } );
    }
} );
