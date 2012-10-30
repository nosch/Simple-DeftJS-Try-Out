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
        'Ext.tip.QuickTipManager',
        'Application.service.ModuleRegistry',
        'Application.view.Viewport'
    ],

    init: function() {
        Deft.Injector.configure({
            modulesRegistry: {
                value: Application.service.ModuleRegistry.getRegistry()
            }
        });

        Ext.tip.QuickTipManager.init();

        var viewport = Ext.create('Application.view.Viewport');
    }
});
