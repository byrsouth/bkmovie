/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('BK.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

     data: {
            name: 'BK', //#4
            appName: 'DVD Rental Store', //#5
            appHeaderIcon: '<span class="fa fa-desktop fa-lg app-header-logo">', //#6
            footer: 'BKMovie  - bkdata.com' //#7
        }

    //TODO - add data, formulas and/or methods to support your view
});
