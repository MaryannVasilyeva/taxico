import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend( {
    type: DS.attr(),
    // start_day: DS.attr(),
    // end_day: DS.attr(),
    vehicle_plate_number: DS.attr(),
    vehicle_id: DS.attr(),
    driver_id: DS.attr(),
    driver_name: DS.attr(),

    str_starting_at_date: function(){
        return moment( this.get( 'start_day' ) ).utc().format( 'MM/DD/YYYY' );
    }.property( 'start_day' ),

    str_ending_at_date: function(){
        return moment( this.get( 'end_day' ) ).utc().format( 'MM/DD/YYYY' );
    }.property( 'end_day' ),

    type_into_day: function(){
        switch( this.get( 'type' ) ){
            case 0:
                return 'Sunday';
            case 1:
                return 'Monday';
            case 2:
                return 'Tuesday';
            case 3:
                return 'Wednesday';
            case 4:
                return 'Thursday';
            case 5:
                return 'Friday';
            case 6:
                return 'Saturday';
            default:
                return '';
        }
    }.property( 'type' )

    // type_into_day: function(){
    //     return this.get( 'type', function(){
    //         var type = this.get( 'type' );
    //         if( type === 0 ){
    //             type.set( type, "Sunday" );
    //         } else if( type === 1 ){
    //             type.set( type, 'Monday' );
    //         } else if( type === 2 ){
    //             type.set( type, 'Tuesday' );
    //         } else if( type === 3 ){
    //             type.set( type, 'Wednesday' );
    //         } else if( type === 4 ){
    //             this.set( type, 'Thursday' );
    //         } else if( type === 5 ){
    //             this.set( type, 'Friday' );
    //         } else if( type === 6 ){
    //             this.set( type, 'Sunday' );
    //         } else{
    //             this.set( type, type );
    //         }
    //     } );
    // }.property( 'type' )


} );