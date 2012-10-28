/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Application.view.Center
 * @extends Ext.panel.Panel
 *
 * Center container of the applications viewport (main content area)
 */

Ext.define('Application.view.Center', {
    extend: 'Ext.panel.Panel',

    xtype: 'application.centerview',

    controller: 'Application.controller.Center',

    html: '<div style="text-align: center;padding: 20px;"><h2>Welcome to Ext + Deft!</h2></div>'
});
