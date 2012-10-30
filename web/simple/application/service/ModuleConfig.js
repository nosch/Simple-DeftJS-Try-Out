/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Company.service.ModuleConfig
 *
 * Abstract configuration class for application modules
 */

Ext.define('Application.service.ModuleConfig', {
    defaultConfig: {
        active: false,
        title: '',
        description: '',
        view: '',
        xtype: '',
        requires: [],
        dependencies: {
            allowInjection: false,
            values: null
        }
    },

    config: {
        moduleConfig: null
    },

    constructor: function(config) {
        var me = this;
        var moduleConfig = (config) ? config : me.defaultConfig;

        me.setModuleConfig(moduleConfig);

        me.initConfig(config);
    },

    applyModuleConfig: function(moduleConfig) {
        var me = this;

        if (Ext.isObject(moduleConfig)) {
            return Ext.apply(
                {},
                moduleConfig,
                me.defaultConfig
            );
        }
    }
});
