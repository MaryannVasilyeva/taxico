import Ember from 'ember';

export default Ember.Route.extend( {
    model: function( params ){
        return this.store.findRecord( 'driver', params.driver_id );
    },

    setupController: function( controller, model ){
        controller.set( 'driver', model );
        controller.store.query( 'schedule', { filter: { driver_id: model.id } } ).then( function( schedule ){
            controller.set( 'schedule', schedule );
        } );
        // controller.store.query( 'schedule', { model: 'Schedule', id: model.id, driver_id: model.driver_id, vehicle_id: model.vehicle_id } ).then( function( schedule ){
        //     controller.set( 'schedule', schedule );
        // } );
    },
    renderTemplate: function(){
        this.render( 'drivers/view', {
            into: 'drivers',
            outlet: '',
            controller: 'drivers/view',
            templateName: 'drivers/view'
        } );
    }
} );
