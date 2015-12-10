(function (global) {
    'use strict';

    var app = global.app = global.app || {};

    app.config = {

        everlive: {
            appId: 'QVFpRP0RQOdMRvtP', // Put your Telerik Platform App Id here
            scheme: 'http'
        },

        views: {
            init: '#initView',
            noApiKey: 'views/noApiKeyView.html',
            signUp: 'views/signupView.html',
            users: 'views/usersView.html',
            main: 'views/mainView.html'
        }
    };

    app.androidProjectNumber = "514767639991"; // Put you Android project number here

    app.constants = {
        NO_APP_ID_MESSAGE: '<h3>Telerik Platform <strong>App ID</strong> is not set.</h3><p><span>App ID</span> ' +
        'links the sample mobile app to a Telerik Platform app.</p><p>To set the <span>App ID</span> ' +
        'open the <span>/scripts/config.js</span> file and replace <strong>$TELERIK_APP_ID$</strong> with the ' +
        '<span>App ID</span> of your Telerik app.</p>',
        EMULATOR_MODE: false
    };

}(window));