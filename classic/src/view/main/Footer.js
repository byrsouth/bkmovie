Ext.define('BK.view.main.Footer',{

    extend:'Ext.container.Container',
    xtpye:'appfooter',
    cls:'app-footer',
    height:30,
    layout:'center',
    items:[
        {
            xtype:'component',
            width:'350',
            componentCls: 'app-footer-title',
            bind:{
                html:'{footer}'
            }
        }
    ]
});