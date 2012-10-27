Ext.define('First.controller.PanelOne', {
    extend: 'Deft.mvc.ViewController',

    requires: [
        'First.service.MessageBus'
    ],

    init: function() {
        var me = this;

        console.debug('INIT First.controller.PanelOne');
    }
});
