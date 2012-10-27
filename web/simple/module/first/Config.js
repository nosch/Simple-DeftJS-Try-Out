/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class First.Config
 * @extends Application.service.ModuleConfig
 *
 * Configuration class for the "First" module
 */

Ext.define('First.Config', {
    extend: 'Application.service.ModuleConfig',

    moduleConfig: {
        first: {
            title: 'First Module',
            description: 'The very first module of this application.',
            view: 'First.view.Main',
            xtype: 'first.mainview',
            active: true
        }
    }
});
