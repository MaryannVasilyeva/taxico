import Ember from 'ember';

export default Ember.Controller.extend( {
    actions: {
        addSchedule: function(){
            var self = this;
            var newSchedule = self.store.createRecord( 'schedule', {
                driver_name: self.get( 'schedule.driver_name' ),
                vehicle_plate_number: self.get( 'schedule.vehicle_plate_number' ),
                start_day: self.get( 'schedule.start_day' ),
                end_day: self.get( 'schedule.end_day' )
            } );
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