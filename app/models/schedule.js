import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend( {
    start_day: DS.attr(),
    end_day: DS.attr(),
    vehicle_plate_number: DS.attr(),
    // vehicle_id: DS.attr(),
    driver_id: DS.attr(),
    driver_name: DS.attr(),

    str_starting_at_date: function(){
        return moment( this.get( 'start_day' ) ).utc().format( 'MM/DD/YYYY' );
    }.property( 'start_day' ),

    str_ending_at_date: function(){
        return moment( this.get( 'end_day' ) ).utc().format( 'MM/DD/YYYY' );
    }.property( 'end_day' )
} );