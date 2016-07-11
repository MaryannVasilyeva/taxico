import Ember from 'ember';

export default Ember.Controller.extend( {
    actions: {
        addDriver: function(){
            var self = this;
            var newDriver = self.store.createRecord( 'driver', {
                first_name: self.get( 'driver.first_name' ),
                last_name: self.get( 'driver.last_name' ),
                driver_license_number: self.get( 'driver.driver_license_number' ),
                status: 0
            } );
            newDriver.save().then(
                function(){
                    var route = self.container.lookup( 'route: drivers' );
                    route.refresh();
                    self.transitionToRoute( 'drivers' );
                }
            );

        },
        
        remove: function( driver ){
            var self = this;
            driver.destroyRecord().then(
                function(){
                    var route = self.container.lookup( 'route:drivers' );
                    route.refresh();
                    self.transitionToRoute( 'drivers' );
                }
            );
        }
    }
} );

