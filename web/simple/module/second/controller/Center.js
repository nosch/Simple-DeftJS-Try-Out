Ext.define('Second.controller.Center', {
    extend: 'Deft.mvc.ViewController',

    requires: [
        'Second.service.MessageBus'
    ],

    init: function() {
        var me = this;

        console.debug('INIT Second.controller.Center');
    }
});
