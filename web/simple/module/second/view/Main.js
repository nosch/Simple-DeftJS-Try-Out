Ext.define('Second.view.Main', {
    extend: 'Ext.panel.Panel',

    requires: [
        'Second.view.North',
        'Second.view.Center',
        'Second.view.PanelOne',
        'Second.view.PanelTwo'
    ],

    xtype: 'second.mainview',

    html: 'Second Module',

    controller: 'Second.controller.Main',

    layout: 'border',

    border: 0,

    defaults: [{
        xtype: 'panel'
    }],

    items: [{
        xtype: 'second.northview',
        region: 'north',
        itemId: 'mainNorth',
        border: 0,
        flex: 2
    }, {
        region: 'west',
        itemId: 'mainWest',
        border: 0,
        margins: '0 1 0 0',
        flex: 2,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'second.paneloneview',
            flex: 4,
            border: 0,
            collapsible: true
        }, {
           xtype: 'second.paneltwoview',
            flex: 4,
            border: 0,
            collapsible: true
        }]
    }, {
       xtype: 'second.centerview',
        region: 'center',
        itemId: 'mainCenter',
        border: 0,
        flex: 4,
        layout: 'fit'
    }]
});
