import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend( {
    plate_number: DS.attr(),
    status: DS.attr(),
    created_at: DS.attr(),

    str_created_at_date: function(){
        return moment( this.get( 'created_at' ) ).utc().format( 'MM/DD/YYYY' );
    }.property( 'created_at' )
} );