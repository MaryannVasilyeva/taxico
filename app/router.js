import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend( {
    location: config.locationType
} );

Router.map( function(){
    this.route( 'vehicles' );
    this.route( 'drivers' );
    this.route( 'schedules', { path: '/' } );
} );

export default Router;
