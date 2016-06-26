"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var application_component_1 = require('./application.component');
var http_1 = require('@angular/http');
var facebook_connect_1 = require('./services/facebook-connect');
platform_browser_dynamic_1.bootstrap(application_component_1.ApplicationComponent, [http_1.Http, http_1.ConnectionBackend, http_1.HTTP_PROVIDERS, facebook_connect_1.FacebookConnect]);
//# sourceMappingURL=main.js.map