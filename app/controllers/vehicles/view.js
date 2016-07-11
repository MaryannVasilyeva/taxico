import Ember from 'ember';

export default Ember.Controller.extend( {
    actions: {
        updateVehicle: function(){
            var self = this;
            self.get( 'vehicle' ).save().then( function(){
                self.transitionToRoute( 'vehicles' );
            } );
        },
        goBack: function(){
            this.transitionToRoute( 'vehicles' );
        }
    }
} );


