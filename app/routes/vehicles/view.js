import Ember from 'ember';
console.log( 'the view route' );
export default Ember.Route.extend( {
    model: function( params ){
        return this.store.findRecord( 'vehicle', params.vehicle_id );
    },
    setupController: function( controller, model ){
        controller.set( 'vehicle', model );
        controller.store.query( 'schedule', { vehicle_id: model.id } ).then( function( schedule ){
            controller.set( 'schedules', schedule );
        } );
    },
    renderTemplate: function(){
        this.render( 'vehicles/view', {
            into: 'vehicles',
            outlet: '',
            controller: 'vehicles/view',
            templateNmae: 'vehicles/view'
        } );
    }
} );
