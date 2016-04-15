Ext.define('BK.view.login.LoginController', {

	extend : 'Ext.app.ViewController',
	alias : 'controller.login',
	requires : [ 'BK.view.login.CapsLockTooltip' ],

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
		var result = action.response.responseText; //#3

		if (!result) { //#4
			result = {};
			result.success = false;
			result.msg = action.response.responseText;
		}

		switch (action.failureType) {
		case Ext.form.action.Action.CLIENT_INVALID: //#5
			Ext.Msg.show({
				title : 'Error!',
				msg : 'Form fields may not be submitted with invalid values',
				icon : Ext.Msg.ERROR,
				buttons : Ext.Msg.OK
			});
			break;
		case Ext.form.action.Action.CONNECT_FAILURE: //#6
			Ext.Msg.show({
				title : 'Connection Error!',
				msg : 'Form fields may not be submitted with invalid values',
				icon : Ext.Msg.ERROR,
				buttons : Ext.Msg.OK
			});
			break;
		case Ext.form.action.Action.SERVER_INVALID: //#7
			Ext.Msg.show({
				title : 'Error!',
				msg : result.msg, //#8
				icon : Ext.Msg.ERROR,
				buttons : Ext.Msg.OK
			});
		}
	},

	onLoginSuccess : function(form, action) {
		this.getView().unmask();
		this.getView().close();

		Ext.create('BK.view.main.Main');
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