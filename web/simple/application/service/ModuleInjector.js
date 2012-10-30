/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Application.service.ModuleInjector
 *
 * Injector for module dependencies - uses Deft.Injector.configure()
 */

Ext.define('Application.service.ModuleInjector', {
    singleton: true,

    injection: function(moduleConfig) {
        if (true === moduleConfig.dependencies.allowInjection) {
            Deft.Injector.configure(
                moduleConfig.dependencies.values
            );

            moduleConfig.dependencies.allowInjection = false;
        }
    }
});
