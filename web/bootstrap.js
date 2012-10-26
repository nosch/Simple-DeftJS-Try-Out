/**
 * Bootstrap file for the Ext JS + DeftJS application
 *
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 */

Ext.Loader.setPath({
    // Library namespaces
    'Ext': './lib/ExtJs/src',
    'Deft': './lib/DeftJs/src/js/Deft',
    // Application namespace
    'Application': './simple/application',
    // Module namespaces
    'First': './simple/module/first',
    'Second': './simple/module/second'
});

Ext.Loader.syncRequire([
    'Deft.core.Class',
    'Deft.ioc.Injector',
    'Deft.mixin.Controllable',
    'Deft.mixin.Injectable',
    'Application.view.Viewport'
]);

Ext.onReady(function() {
    Deft.Injector.configure({

    });

    var viewport = Ext.create('Application.view.Viewport');
});
