Ext.define('First.view.Main', {
    extend: 'Ext.panel.Panel',

    requires: [
        'First.view.Center',
        'First.view.PanelOne',
        'First.view.PanelTwo',
        'First.view.PanelThree'
    ],

    xtype: 'first.mainview',

    html: 'First Module',

    controller: 'First.controller.Main',

    layout: 'border',

    border: 0,

    items: [{
        region: 'west',
        itemId: 'mainWest',
        border: 0,
        margins: '0 1 0 0',
        flex: 1,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'first.paneloneview',
            flex: 2,
            border: 0,
            collapsible: true
        }, {
            xtype: 'first.paneltwoview',
            title: 'Panel II',
            flex: 4,
            border: 0,
            collapsible: true
        }, {
            xtype: 'first.panelthreeview',
            title: 'Panel III',
            flex: 4,
            border: 0,
            collapsible: true
        }]
    }, {
        xtype: 'first.centerview',
        region: 'center',
        itemId: 'mainCenter',
        border: 0,
        flex: 2,
        layout: 'fit'
    }]
});
