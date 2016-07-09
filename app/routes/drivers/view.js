import Ember from 'ember';
console.log( 'the view route' );
export default Ember.Route.extend( {
    model: function(params){
        return this.store.findRecord( 'driver' , params.driver_id);
    },
    setupController: function( controller, model ){
        controller.set( 'driver', model );
    },
    renderTemplate: function(){
        this.render( 'drivers/view', {
            into: 'drivers'
        } );
    }
} );
