/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Application.view.Navigation
 * @extends Ext.toolbar.Toolbar
 *
 * Main navigation bar of the application
 */

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
