Ext.define('Second.controller.PanelOne', {
    extend: 'Deft.mvc.ViewController',

    requires: [
        'Second.service.MessageBus'
    ],

    init: function() {
        var me = this;

        console.debug('INIT Second.controller.PanelOne');
    }
});
