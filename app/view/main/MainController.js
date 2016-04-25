/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('BK.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    requires: ['BK.util.Util'],

    onLogout: function (){
        var me  = this;
        Ext.Ajax.request({
            url:'php/security/logout.php',
            scope:me,
            success:'onLogoutSuccess',
            failure:'onLogoutFailure'
        });
    },
    onLogoutFailure: function(conn, response, options, eOpts){
     BK.util.Util.showErrorMsg(conn.responseText);
    },

    onLogoutSuccess: function(conn, response, options, eOpts){
        var result =  BK.util.Util.decodeJSON(conn.responseText);
            if(result.success){
                this.getView().destroy();
                window.location.reload();
            }else{
                 BK.util.Util.showErrorMsg(result.msg);
            }
    }

});
