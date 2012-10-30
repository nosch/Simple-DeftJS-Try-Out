/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Application.controller.Center
 * @extends Deft.mvc.ViewController
 *
 * ViewController for the applications center panel container, the main content area
 */

Ext.define('Application.controller.Center', {
    extend: 'Deft.mvc.ViewController',

    requires: [
        'Application.service.MessageBus',
        'Application.service.ModuleInjector'
    ],

    inject: [
        'modulesRegistry'
    ],

    messageBus: null,

    moduleInjector: null,

    modulesRegistry: null,

    init: function() {
        var me = this;

        me.messageBus = Application.service.MessageBus;
        me.moduleInjector = Application.service.ModuleInjector;

        me.messageBus.on({
            moduleChange: {
                fn: me.changeModule,
                scope: me
            }
        });
    },

    changeModule: function(moduleName) {
        var me = this;
        var view = me.getView();
        var moduleConfig = me.modulesRegistry[moduleName];
        var requires = Ext.Array.push(
            [moduleConfig.view],
            moduleConfig.requires
        );

        view.removeAll();

        Ext.Loader.require(
            requires,
            function() {
                me.moduleInjector.injection(moduleConfig);

                var moduleViewComponent = Ext.create(moduleConfig.view);

                view.add(moduleViewComponent);
            }
        );
    }
});
