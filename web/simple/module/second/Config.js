/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Second.Config
 * @extends Application.service.ModuleConfig
 *
 * Configuration class for the "Second" module
 */

Ext.define('Second.Config', {
    extend: 'Application.service.ModuleConfig',

    config: {
        moduleConfig: {
            active: true,
            title: 'Second Module',
            description: 'The second module of this application.',
            view: 'Second.view.Main',
            xtype: 'second.mainview'
        }
    },

    constructor: function() {
        var me = this;

        me.callParent([me.getModuleConfig()]);
    }
});
