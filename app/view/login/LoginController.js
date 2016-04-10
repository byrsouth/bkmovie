Ext.define('BK.view.login.LoginController',{
	
	extend: 'Ext.app.ViewController',
	alias: 'controller.login',
	
	onTextFieldSpecialKey: function(field, e, options) {},
	
	onTextFieldKeyPress: function(field, e, options) {},
	
	onButtonClickedCancel: function(button, e, options){
		this.lookupReference('form').reset();
	},
	
	onButtonClickedSubmit: function(button, e, options){
		var me = this;
		if(me.lookupReference('form').isValid()){
			me.doLogin();
		}
	},

	//Fail
	onLoginFailure: function(form, action){
	//	this.getView().unmask();
		this.getView().close();
		var result = Ext.JSON.decode(action.response.responseText, true); //#3

		  if (!result){ //#4
		      result = {};
		      result.success = false;
		      result.msg = action.response.responseText;
		  }

		  switch (action.failureType) {
		      case Ext.form.action.Action.CLIENT_INVALID:  //#5
		          Ext.Msg.show({
		            title:'Error!',
		            msg: 'Form fields may not be submitted with invalid values',
		            icon: Ext.Msg.ERROR,
		            buttons: Ext.Msg.OK
		        });
		      break;
		      case Ext.form.action.Action.CONNECT_FAILURE:  //#6
		        Ext.Msg.show({
		            title:'Error!',
		            msg: 'Form fields may not be submitted with invalid values',
		            icon: Ext.Msg.ERROR,
		            buttons: Ext.Msg.OK
		        });
		         break;
		      case Ext.form.action.Action.SERVER_INVALID:  //#7
		          Ext.Msg.show({
		            title:'Error!',
		            msg: result.msg, //#8
		            icon: Ext.Msg.ERROR,
		            buttons: Ext.Msg.OK
		        });
		  }	
	},
	
	onLoginSuccess: function(form,action){
		this.getView().close();
		this.getView().unmask();
			Ext.create('BK.view.main.Main');
	},
	
	
	doLogin: function(){
		var me = this;
		var form = me.lookupReference('form');
		this.getView().mask('Authenticating... Please wait...');
		form.submit({
			clientValidation:true,
			url:'php/security/login.php',
			scope:me,
			success:'onLoginSuccess',
			failure:'onLoginFailure'			
		});
	}
	
	
});