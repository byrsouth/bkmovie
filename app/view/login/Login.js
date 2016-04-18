Ext.define('BK.view.login.Login',{
    extend: 'Ext.window.Window',
	xtype:'login-dialog',
	autoShow: true,
	height:180,
	width:360,
	requires: [
	           'BK.view.login.LoginController',
	           'BK.view.locale.Translation'

	],
	layout:{
		type:'fit'
	},
	iconCLs:'fa fa-key fa-lg',
	title:translations.login,
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
				msgTarget: 'under',
				listeners:{
					specialKey: 'onTextFieldSpecialKey'
				}
				
			},
			items:[

				{
					name: 'user',
					fieldLabel: translations.user,
					maxLength: 25
				},
				{
					id:'password',
					enableKeyEvents:true,
					inputType:'password',
					fieldLabel: translations.password,
					maxLength: 15,
				//	vtype: 'customPass',
					msgTarget: 'side',
					listeners: {
					    keypress: 'onTextFieldKeyPress',
					    specialKey:'onTextFieldSpecialKey'
					}
				}
			],
			dockedItems:[
				{
					xtype:'toolbar',
					dock:'bottom',
					items:[
					  {
					    xtype:'translation'
					   },
					   {
							xtype:'tbfill'
						},
						{
							xtype:'button',
							iconCls:'fa fa-times fa-lg',
							text:translations.cancel,
							listeners: {
								click:'onButtonClickedCancel'
							}
						},
						{
							xtype:'button',
							formBind:true,
							iconCls:'fa fa-sign-in fa-lg',
							text: translations.submit,
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