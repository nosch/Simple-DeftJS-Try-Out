/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class First.Config
 * @extends Application.service.ModuleConfig
 *
 * Configuration class for the "Second" module
 */

Ext.define('Second.Config', {
    extend: 'Application.service.ModuleConfig',

    moduleConfig: {
        employee: {
            title: 'Second Module',
            description: 'The second module of this application.',
            view: 'Second.view.Main',
            xtype: 'second.mainview',
            active: true
        }
    }
});
