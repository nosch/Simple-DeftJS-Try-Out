Ext.define('Second.controller.Main', {
    extend: 'Deft.mvc.ViewController',

    requires: [
        'Second.service.MessageBus'
    ],

    control: {

    },

    init: function() {
        var me = this;

        console.debug('INIT Second.controller.Main');
    }
})