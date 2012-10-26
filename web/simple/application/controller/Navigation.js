Ext.define('Application.controller.Navigation', {
    extend: 'Deft.mvc.ViewController',

    requires: [
        'Application.service.MessageBus'
    ],

    control: {
        firstModuleButton: {
            click: 'onNavigationButtonClick'
        },
        secondModuleButton: {
            click: 'onNavigationButtonClick'
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

        me.messageBus = Application.service.MessageBus;
    },

    onNavigationButtonClick: function(button) {
        var me = this;

        me.messageBus.fireEvent('moduleChange', button.moduleView)
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