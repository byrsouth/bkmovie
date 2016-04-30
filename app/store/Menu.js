Ext.define('BK.store.Menu', {
    extend: 'Ext.data.Store',

    requires: [
        'BK.util.Util' //#1
    ],

    model: 'BK.model.menu.Accordion', //#2

    proxy: {
        type: 'ajax',             //#3
        url: 'php/menu/list.php', //#4

        reader: { //#5
            type: 'json',
            rootProperty: 'data'
        },
        listeners: {
            exception: function(proxy, response, operation){ //#6
              BK.util.Util.showErrorMsg(response.responseText);
            }
        }
    }
});