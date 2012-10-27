Ext.define('First.controller.PanelThree', {
    extend: 'Deft.mvc.ViewController',

    requires: [
        'First.service.MessageBus'
    ],

    init: function() {
        var me = this;

        console.debug('INIT First.controller.PanelThree');
    }
});
