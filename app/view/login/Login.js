Ext.define('BK.view.login.Login',{
	extend: 'Ext.window.Window',
	xtype:'login-dialog',
	autoShow: true,
	height:180,
	width:360,
	requires: [
	           'BK.view.login.LoginController'
	],
	layout:{
		type:'fit'
	},
	iconCLs:'fa fa-key fa-lg',
	title:'BKMovie Login',
	closeAction:'hide',
	closable:false,
	draggable:false,
	resizable:false,
	controller:'login',

	items:[
		{
			xtype:'form',
			reference:'form',
			bodyPadding:15,
			defaults:{
				xtype:'textfield',
				anchor:'100%',
				labelWidth: 60,
				allowBlank:false,
				vtype: 'alphanum',
				minLength: 3,
				msgTarget: 'under'
			},
			items:[
				{
					name: 'user',
					fieldLabel: 'User',
					maxLength: 25
				},
				{
					inputType:'password',
					name: 'password',
					fieldLabel: 'Password',
					maxLength: 15,
				//	vtype: 'customPass',
					msgTarget: 'side'
				}
			],
			dockedItems:[
				{
					xtype:'toolbar',
					dock:'bottom',
					items:[
						{
							xtype:'tbfill'
						},
						{
							xtype:'button',
							iconCls:'fa fa-times fa-lg',
							text:'Cancel',
							listeners: {
								click:'onButtonClickedCancel'
							}
						},
						{
							xtype:'button',
							formBind:true,
							iconCls:'fa fa-sign-in fa-lg',
							text: 'Submit',
							listeners:{
								click:'onButtonClickedSubmit'
							}
						}
					]
				}
			]
		}
	]
});