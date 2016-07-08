import Ember from 'ember';
console.log( 'the view route' );
export default Ember.Route.extend( {
    model: function( params ){
        return this.store.findRecord( 'vehicle', params.vehicle_id );
    },
    setupController: function( controller, model ){
        controller.set( 'vehicle', model );
    },
    renderTemplate: function(){
        this.render( 'vehicles/view', {
            into: 'vehicles'
        } );
    }
} );
