Ext.define('Second.controller.North', {
    extend: 'Deft.mvc.ViewController',

    requires: [
        'Second.service.MessageBus'
    ],

    init: function() {
        var me = this;

        console.debug('INIT Second.controller.North');
    }
});
