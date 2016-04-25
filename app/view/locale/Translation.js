Ext.define('BK.view.locale.Translation',{
  extend:'Ext.button.Split',
    requires: [
   'BK.view.locale.TranslationController'
    ],

    controller: 'translation',

    xtype:'translation',
    menu:{
        xtype:'menu',
        defaults:{listeners:{click:'onMenuItemClick'}},
        items:[
            {
                xtype:'menuitem',
                iconCls:'en',
                text:'English'
            },{
                xtype:'menuitem',
                iconCls:'es',
                text:'Espanol'
            },{
                xtype:'menuitem',
                iconCls:'pt_BR',
                text:'Portugues'
            }
        ]
    }
});