/**
 * Bootstrap file for the Ext JS + DeftJS application
 *
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 */

Ext.Loader.setConfig({
    modules: [
        'first',
        'second'
    ],
    paths: {
        // Library namespaces
        'Ext': './lib/ExtJs/src',
        'Deft': './lib/DeftJs/src/js/Deft',
        // Application namespace
        'Application': './simple/application',
        // Module namespace (module root directory)
        'module': './simple/module/'
        // Namespace for each module is set by registry process
    }
});

Ext.Loader.syncRequire([
    'Deft.core.Class',
    'Deft.ioc.Injector',
    'Deft.mixin.Controllable',
    'Deft.mixin.Injectable',
    'Application.service.ModuleRegistry',
    'Application.view.Viewport'
]);

Ext.onReady(function() {
    Deft.Injector.configure({
        moduleConfig: {
            value: Application.service.ModuleRegistry.getRegistry()
        }
    });

    var viewport = Ext.create('Application.view.Viewport');
});
