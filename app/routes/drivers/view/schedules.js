import Ember from 'ember';

export default Ember.Route.extend( {
    model: function( params ){
        return this.store.findRecord( 'schedule', params.driver_id );
    },
    // setupController: function( controller, model ){
    //     controller.store.query( 'schedule', { model: 'Schedule', id: model.id, driver_id: model.driver_id, vehicle_id: model.vehicle_id } ).then( function( schedule ){
    //         controller.set( 'model', schedule );
    //     } );
    //     // controller.set( 'schedule', {
    //     //     driver_id: null,
    //     //     vehicle_id: null,
    //     //     start_day: null,
    //     //     end_day: null
    //     // } );
    //     // controller.set( 'schedule', model );
    // },
    renderTemplate: function(){
        this.render( 'drivers/schedules', {
            into: 'drivers',
            outlet: '',
            controller: 'drivers/view/schedules'
        } );
    }
} );
