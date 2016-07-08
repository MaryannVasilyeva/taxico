import Ember from 'ember';

export default Ember.Route.extend( {
    model: function(){
        return this.store.findAll( 'vehicle' );
    },
    setupController: function( controller, model ){
        controller.set( 'vehicle', {
            plate_number: null,
            status: null
        } );
        controller.set( 'model', model );
    }
} );
