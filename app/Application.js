/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.require('BK.view.login.Login');
Ext.require('BK.view.main.Main');
Ext.define('BK.Application', {
    extend: 'Ext.app.Application',
    
    name: 'BK',

    stores: [
        // TODO: add global / shared stores here
    ],

    views:[
        'login.Login'
    ],
    
    launch: function () {
    	Ext.tip.QuickTipManager.init();
        var me = this;
        var task = new Ext.util.DelayedTask(function(){

            //Fade out body mask
           me.splashscreen.fadeOut({
                duration:1000,
                remove:true
           });
            Ext.widget('login-dialog');

           //Fade out icon and image

           me.splashscreen.next().fadeOut({
            duration:1000,
            remove:true,
            listeners :{
                afteranimate: function(){
                   
                    Ext.widget('login-dialog');
                }
            }
           });

        });
        task.delay(2000);
    },

    init: function(){
        var me = this;
        me.splashscreen = Ext.getBody().mask(
            'Loading application','splashscreen'
        );
        me.splashscreen.addCls('splashscreen');
        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
        });

       
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});