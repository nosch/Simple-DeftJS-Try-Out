Ext.define('Application.controller.Center', {
    extend: 'Deft.mvc.ViewController',

    requires: [
        'Application.service.MessageBus'
    ],

    inject: [
        'moduleConfig'
    ],

    messageBus: null,

    moduleConfig: null,

    init: function() {
        var me = this;

        me.messageBus = Application.service.MessageBus;

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

        view.removeAll();

        Ext.Loader.require(
            me.moduleConfig[moduleName].view,
            function() {
                var moduleViewComponent = Ext.create(me.moduleConfig[moduleName].view);

                view.add(moduleViewComponent);
            }
        );
    }
});
