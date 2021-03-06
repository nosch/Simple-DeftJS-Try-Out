/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Application.controller.Navigation
 * @extends Deft.mvc.ViewController
 *
 * ViewController for the applications main navigation bar
 */

Ext.define('Application.controller.Navigation', {
    extend: 'Deft.mvc.ViewController',

    requires: [
        'Application.service.MessageBus'
    ],

    inject: [
        'modulesRegistry'
    ],

    control: {
        helpButton: {
            click: 'onHelpButtonClick'
        },
        loginButton: {
            click: 'onLoginButtonClick'
        }
    },

    messageBus: null,

    modulesRegistry: null,

    init: function() {
        var me = this;
        var view = me.getView();
        var position = 0;

        me.messageBus = Application.service.MessageBus;

        Ext.Object.each(me.modulesRegistry, function(key, value) {
            view.insert(position, {
                xtype: 'button',
                moduleName: key,
                text: value.title,
                tooltip: value.description,
                listeners: {
                    click: me.onNavigationButtonClick,
                    scope: me
                }
            });

            position ++;
        });
    },

    onNavigationButtonClick: function(button) {
        var me = this;

        me.messageBus.fireEvent('moduleChange', button.moduleName);
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
