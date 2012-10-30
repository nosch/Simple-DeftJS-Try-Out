/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Second.Config
 * @extends Application.service.ModuleConfig
 *
 * Configuration class for the "Second" module
 */

Ext.define('Second.Config', {
    extend: 'Application.service.ModuleConfig',

    configuration: {
        active: true,
        title: 'Second Module',
        description: 'The second module of this application.',
        view: 'Second.view.Main',
        xtype: 'second.mainview'
    },

    constructor: function() {
        var me = this;

        me.setModuleConfig(me.configuration);
    }
});
