Ext.define('First.controller.PanelOne', {
    extend: 'Deft.mvc.ViewController',

    requires: [
        'First.service.MessageBus'
    ],

    inject: [
        'employeesStore'
    ],

    employeesStore: null,

    init: function() {
        var me = this;

        me.employeesStore.load();
    }
});
