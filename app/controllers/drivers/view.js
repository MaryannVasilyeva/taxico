import Ember from 'ember';

export default Ember.Controller.extend( {
    actions: {
        updateDriver: function(){
            var self = this;
            self.get( 'driver' ).save().then( function(){
                self.transitionToRoute( 'drivers' );
            } );

        },
        goBack: function(){
            this.transitionToRoute( 'drivers' );
        }
    }
} );


