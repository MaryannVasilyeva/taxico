import Ember from 'ember';

export default Ember.Route.extend( {
    model: function( params ){
        return this.store.findRecord( 'schedule', params.schedule_id );
    },

    setupController: function( controller, model ){
        controller.set( 'schedule', model );
    },
    renderTemplate: function(){
        this.render( 'schedules/view', {
            into: 'schedules',
            outlet: '',
            controller: 'schedules/view',
            templateName: 'schedules/view'
        } );
    }
} );
