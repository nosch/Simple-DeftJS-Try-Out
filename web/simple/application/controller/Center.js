Ext.define('Application.controller.Center', {
    extend: 'Deft.mvc.ViewController',

    requires: [
        'Application.service.MessageBus'
    ],

    messageBus: null,

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

    changeModule: function(moduleXtype) {
        var me = this;

        var me = this;
        var view = me.getView();

        view.removeAll();

        view.add({
            xtype: moduleXtype
        });
    }
});