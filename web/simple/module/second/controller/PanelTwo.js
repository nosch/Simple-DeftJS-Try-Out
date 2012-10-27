Ext.define('Second.controller.PanelTwo', {
    extend: 'Deft.mvc.ViewController',

    requires: [
        'Second.service.MessageBus'
    ],

    init: function() {
        var me = this;

        console.debug('INIT Second.controller.PanelTwo');
    }
});
