"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var application_component_1 = require('./application.component');
var http_1 = require('@angular/http');
platform_browser_dynamic_1.bootstrap(application_component_1.ApplicationComponent, [http_1.Http, http_1.ConnectionBackend, http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map