Ext.define('BK.view.locale.TranslationController',{
    extend:'Ext.app.ViewController',
    alias:'controller.translation',
    init:function(){
        var lang= localStorage ? (localStorage.getItem('user-lang') || 'en'):'en',
            button = this.getView();

        button.setIconCls(lang);
        if(lang =='en'){
            button.setText('English')
        }else if(lang == 'es'){
            button.setText('Espanol');
        }else{
            button.setText('Portugues');
        }
    }
});