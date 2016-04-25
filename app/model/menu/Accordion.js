Ext.define('BK.model.menu.Accordion',{,
requires: [
    'Packt.model.menu.TreeNode'
],
    extend:'Ext.data.Model',

    fields:[
        {name : 'id', type:'int'},
        {name:'text'},
        {name:'iconCls'}
    ],
    hasMany:{
        model:'BK.model.menu.TreeNode',
        foreignKey:'parent_id',
        name:'items'
    }
});

Ext.define('BK.model.menu.TreeNode',{
    extend:'Ext.data.Model',
    field:[
        {name:'id', type:'int'},
        {name:'text'},
        {name:'iconCls'},
        {name:'className'},
        {name:'parent_id',mapping: 'menu_id'}
    ]
});