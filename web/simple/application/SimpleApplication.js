/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Application.SimpleApplication
 * @extends Deft.mvc.Application
 *
 * Template class for the application
 */

Ext.define('Application.SimpleApplication', {
    extend: 'Deft.mvc.Application',

    requires: [
        'Application.view.Viewport'
    ],

    init: function() {
        Deft.Injector.configure({
            welcomeMessage: {
                value: 'Welcome to Ext + Deft!'
            }
        });

        var viewport = Ext.create('Application.view.Viewport');

        viewport.show();
    }
});
