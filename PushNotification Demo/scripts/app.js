(function (global) {
    'use strict';

    var app = global.app = global.app || {};
    
    var fixViewResize = function () {
        
        if (device.platform === 'iOS') {
            setTimeout(function() {
                $(document.body).height(window.innerHeight);
            }, 10);
        }
    };

	app.everlive = new Everlive({
            appId: app.config.everlive.appId,
            scheme: app.config.everlive.scheme
        });
	
    var onDeviceReady = function() {

      // app feedback
		var feedbackOptions = {
	    	enableShake: true // shake to show the feedback dialog, default true
		};

		if (window.feedback) {
		    window.feedback.initialize(
		    "65902400-041f-11e4-be38-73f40f037825",
		    feedbackOptions
		);

		}
        navigator.splashscreen.hide();
        
        if (!app.isKeySet(app.config.everlive.appId)) {
            $(app.config.views.init).hide();
            $('#pushApp').addClass('noapikey-scrn').html(app.constants.NO_API_KEY_MESSAGE);
            return;
        }
        
        fixViewResize();

        var os = kendo.support.mobileOS,
        	statusBarStyle = os.ios && os.flatVersion >= 700 ? 'black-translucent' : 'black';
		
        app.mobile = new kendo.mobile.Application(document.body, {
            transition: 'slide',
            statusBarStyle: statusBarStyle,
            skin: 'flat'
        });        
    };

    document.addEventListener('deviceready', onDeviceReady, false);

    document.addEventListener('orientationchange', fixViewResize);

}(window));
