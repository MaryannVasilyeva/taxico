import Ember from 'ember';

export default Ember.Controller.extend( {
    actions: {
        addVehicle: function(){
            var self = this;
            var newVehicle = self.store.createRecord( 'vehicle', {
                plate_number: self.get( 'vehicle.plate_number' ),
                status: 0
            } );
            newVehicle.save().then(
                function(){
                    var route = self.container.lookup( 'route:vehicles ' );
                    route.refresh();
                    self.transitionToRoute( 'vehicles' );
                }
            );

        },
        remove: function( vehicle ){
            var self = this;
            vehicle.destroyRecord().then(
                function(){
                    var route = self.container.lookup( 'route:vehicles' );
                    route.refresh();
                    self.transitionToRoute( 'vehicles' );
                }
            );
        }
    }
} );