Ext.define('Application.controller.Navigation', {
    extend: 'Deft.mvc.ViewController',

    requires: [
        'Application.service.MessageBus'
    ],

    control: {
        firstModuleButton: {
            click: 'onFirstModuleButtonClick'
        },
        secondModuleButton: {
            click: 'onSecondModuleButtonClick'
        },
        helpButton: {
            click: 'onHelpButtonClick'
        },
        loginButton: {
            click: 'onLoginButtonClick'
        }
    },

    messageBus: null,

    init: function() {
        var me = this;
    },

    onFirstModuleButtonClick: function(button) {
        console.debug('Load "First" module!');
    },

    onSecondModuleButtonClick: function(button) {
        console.debug('Load "Second" module!');
    },

    onHelpButtonClick: function(button) {
        var me = this;

        me._showInfoMessage();
    },

    onLoginButtonClick: function(button) {
        var me = this;

        me._showInfoMessage();
    },

    _showInfoMessage: function() {
        Ext.MessageBox.show({
            title: 'Info',
            msg: 'Not implemented yet.',
            icon: Ext.MessageBox.INFO,
            buttons: Ext.Msg.OK
        });
    }
});