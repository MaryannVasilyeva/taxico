import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend( {
    location: config.locationType
} );

Router.map( function(){
    this.route( 'vehicles', function(){
        this.route( 'view', { path: '/:vehicle_id' } );
    } );
    this.route( 'drivers', function(){
        this.route( 'view', { path: '/:driver_id' }, function(){
            this.route( 'schedules', { path: '/schedules' } );
        } );
    } );
    this.route( 'schedules', { path: '/' }, (
        this.route( 'view', { path: '/:schedule_id' } )
    ) );
} );

export default Router;
