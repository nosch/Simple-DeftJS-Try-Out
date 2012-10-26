/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class First.service.MessageBus
 *
 * Message bus for the "First" module
 */

Ext.define('First.service.MessageBus', {
    mixins: {
        observable: 'Ext.util.Observable'
    },

    singleton: true,

    constructor: function(config) {
        var me = this;

        me.mixins.observable.constructor.call(me, config);

        /**
         * List of events this message bus may fire
         * Just for the purpose of documentation
         * This not a registration of events
         */
        me.addEvents(

        );
    }
});
