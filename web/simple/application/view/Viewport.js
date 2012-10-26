/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Application.view.Viewport
 * @extends Ext.container.Viewport
 *
 * Viewport container of the application
 */

Ext.define('Application.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.layout.container.Border',
        'Application.view.Navigation',
        'Application.view.Center'
    ],

    controller: 'Application.controller.Viewport',

    layout: 'border',

    style: {
        backgroundColor: 'white'
    },

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            items: [{
                xtype: 'panel',
                itemId: 'northPanel',
                region: 'north',
                border: 0,
                margins: 1,
                dockedItems: [{
                    xtype: 'application.navigationview',
                    itemId: 'navigation',
                    dock: 'top',
                    border: 0
                }]
            }, {
                xtype: 'panel',
                itemId: 'westPanel',
                region: 'west',
                width: 200,
                // layout: 'fit', // bug, not possible with collapsible: true
                collapsible: true,
                collapsed: true,
                border: 1,
                margins: '0 1 1 1'
            }, {
                xtype: 'application.centerview',
                itemId: 'centerPanel',
                region: 'center',
                border: 1,
                margins: '0 1 1 0',
                layout: 'fit'
            }, {
                xtype: 'panel',
                itemId: 'southPanel',
                region: 'south',
                border: 1,
                margins: '0 1 1 1'
            }]
        });

        me.callParent(arguments);
    }
});
