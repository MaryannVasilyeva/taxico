import Ember from 'ember';

export default Ember.Route.extend( {
    model: function(){
        return this.store.findAll( 'driver' );
    },
    setupController: function( controller, model ){
        controller.store.query( 'schedule', { filter: { driver_id: model.id } } ).then( function( schedule ){
            controller.set( 'schedule', schedule );
        } );
        // controller.store.query( 'schedule', { model: 'Schedule', id: model.id } ).then( function( schedule ){
        //     controller.set( 'schedule', schedule );
        // } );
        controller.set( 'driver', {
            first_name: null,
            last_name: null,
            driver_license_number: null,
            status: null
        } );
        controller.set( 'model', model );
    }
} );
