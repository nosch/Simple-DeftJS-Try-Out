/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Application.controller.Viewport
 * @extends Deft.mvc.ViewController
 *
 * ViewController for the applications viewport container
 */

Ext.define('Application.controller.Viewport', {
    extend: 'Deft.mvc.ViewController',

    requires: [
        'Application.service.MessageBus'
    ],

    inject: {
        message: 'welcomeMessage'
    },

    control: {
        centerPanel: true
    },

    init: function() {
        var me = this;

        me.getCenterPanel().setTitle(me.message);
    }
});
