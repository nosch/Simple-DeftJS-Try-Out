Ext.define('Application.view.Navigation', {
    extend: 'Ext.toolbar.Toolbar',

    requires: [
        'Ext.window.MessageBox',
        'Ext.toolbar.TextItem'
    ],

    controller: 'Application.controller.Navigation',

    xtype: 'application.navigationview',

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            items: [{
                xtype: 'button',
                itemId: 'firstModuleButton',
                text: 'First Module',
                moduleXtype: 'first.mainview'
            }, {
                xtype: 'button',
                itemId: 'secondModuleButton',
                text: 'Second Module',
                moduleXtype: 'second.mainview'
            }, {
                xtype: 'button',
                itemId: 'helpButton',
                text: 'Help'
            }, {
                xtype: 'tbfill'
            }, {
                xtype: 'tbtext',
                text: 'You are logged in as: nosch'
            }, {
                xtype: 'tbseparator'
            }, {
                xtype: 'button',
                itemId: 'loginButton',
                text: 'Logout'
            }]
        });

        me.callParent(arguments);
    }
});