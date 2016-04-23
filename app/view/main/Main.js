/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 */
Ext.define('BK.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    plugins: 'viewport',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'BK.view.main.Panel',
        'BK.view.main.MainController',
        'BK.view.main.MainModel',
        'BK.view.main.List',
        'BK.view.main.Header',
        'BK.view.main.Footer'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',
    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,
    layout:{
        type:'border'
    },

    items: [
        {
            region:'center',
            xtype:'mainpanel'
        },{
            region:'north',
           xtype:'appheader'

        },{
            region:'south',
            xtype:'appfooter'
        },{
            xtype:'container',
            region:'west',
            width:'200',
            split:true
        }


    ]
});
