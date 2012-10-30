/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Company.service.ModuleConfig
 *
 * Abstract configuration class for application modules
 */

Ext.define('Application.service.ModuleConfig', {
    config: {
        moduleConfig: {}
    },

    defaults: {
        active: false,
        title: '',
        description: '',
        view: '',
        xtype: '',
        requires: [],
        dependencies: {
            allowInjection: false,
            values: {}
        }
    },

    constructor: function(cgf) {
        var me = this;

        me.initConfig(cfg);
    },

    applyModuleConfig: function(moduleConfig) {
        var me = this;

        return Ext.apply({}, moduleConfig, me.defaults);
    }
});
