import Ember from 'ember';

export default Ember.Controller.extend( {

    // deviceTypes: [
    //     { label: 'Select a Driver' }
    //     // { label: 'Driver_1', val: 0 },
    //     // { label: 'Driver_2', val: 1 },
    //     // { label: 'Driver_3', val: 2 }
    // ],

    actions: {
        addSchedule: function(){
            var self = this;
            var newSchedule = self.store.createRecord( 'schedule', this.get( 'schedule' ) );

            newSchedule.save().then(
                function(){
                    self.notify.success( 'Add to the Schedule', { closeAfter: 5000 } );
                    var route = self.container.lookup( 'route: schedules ' );
                    route.refresh();
                    self.transitionToRoute( 'schedules' );
                }
            );

        }
    }
} );