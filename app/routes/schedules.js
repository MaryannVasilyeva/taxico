import Ember from 'ember';

export default Ember.Route.extend( {
    model: function(){
        return this.store.findAll( 'schedule' );
    },
    setupController: function( controller, model ){
        controller.store.query( 'driver', { model: 'Driver', id: model.id } ).then( function( drivers ){
            controller.set( 'driver', drivers );
        } );
        controller.store.query( 'vehicle', { model: 'Vehicle', id: model.id } ).then( function( vehicles ){
            controller.set( 'vehicle', vehicles );
        } );
        controller.set( 'schedule', {
            type: null,
            // start_day: null,
            // end_day: null,
            vehicle_id: null,
            driver_id: null,
            vehicle_plate_number: null,
            driver_name: null
        } );
        controller.set( 'model', model );
    }
} );