import Ember from 'ember';
console.log( 'schedule route' );
export default Ember.Route.extend( {
    model: function(){
        return this.store.findAll( 'schedule' );
    },
    setupController: function( controller, model ){
        controller.set( 'schedule', {
            start_day: null,
            end_day: null,
            vehicle_plate_number: null,
            driver_name: null
        } );
        controller.set( 'model', model );
    }
    // renderTemplate: function( controller, model ){
    //     this.render( '/' );
    // }
} );
