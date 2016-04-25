Ext.define('BK.view.login.LoginController', {

	extend : 'Ext.app.ViewController',
	alias : 'controller.login',
	requires : [ 'BK.view.login.CapsLockTooltip','BK.util.Util'],


	onTextFieldSpecialKey : function(field, e, options) {
		if (e.getKey() === e.ENTER) {
			this.doLogin();
		}
	},

	onTextFieldKeyPress : function(field, e, options) {
		var charCode = e.getCharCode(), me = this;

		if ((e.shiftKey && charCode >= 97 && charCode <= 122) || //#2
		(!e.shiftKey && charCode >= 65 && charCode <= 90)) {

			if (me.capslockTooltip === undefined) { //#3
				me.capslockTooltip = Ext.widget('capslocktooltip'); //#4
			}

			me.capslockTooltip.show(); //#5

		} else {

			if (me.capslockTooltip !== undefined) { //#6
				me.capslockTooltip.hide(); //#7
			}
		}

	},

	onButtonClickedCancel : function(button, e, options) {
		this.lookupReference('form').reset();
	},

	onButtonClickedSubmit : function(button, e, options) {
		var me = this;
		if (me.lookupReference('form').isValid()) {
			me.doLogin();
		}
	},

	//Fail
	onLoginFailure : function(form, action) {
		this.getView().unmask();
		this.getView().close();
		var result = BK.util.Util.decodeJSON(action.response.responseText); //#3



		switch (action.failureType) {
		case Ext.form.action.Action.CLIENT_INVALID: //#5
		    BK.util.Util.showErrorMsg('Form fields may not be submitted with invalid values');
			break;
		case Ext.form.action.Action.CONNECT_FAILURE: //#6
		    BK.util.Util.showErrorMsg(action.response.responseText);

			break;
		case Ext.form.action.Action.SERVER_INVALID: //#7
		   BK.util.Util.showErrorMsg(result.msg);
		}
	},

	onLoginSuccess : function(form, action) {
		this.getView().unmask();
		this.getView().close();

		Ext.create('BK.view.main.Main');
	},

	onLogout:function(){
	},

	doLogin : function() {
		var me = this;
		var form = me.lookupReference('form');
		this.getView().mask('Authenticating... Please wait...');
		form.submit({
			clientValidation : true,
			url : 'php/security/login.php',
			scope : me,
			success : 'onLoginSuccess',
			failure : 'onLoginFailure'
		});
	}

});