import DS from 'ember-data';

export default DS.Model.extend( {
    first_name: DS.attr(),
    last_name: DS.attr(),
    driver_license_number: DS.attr(),
    status: DS.attr(),

    full_name: function(){
        return this.get( 'first_name' ) + ' ' + this.get( 'last_name' );
    }.property( 'first_name', 'last_name' )
} );