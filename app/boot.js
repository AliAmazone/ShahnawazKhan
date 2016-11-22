/*
 Copyright 2016 Improvement Interactive, LLC
 All Rights Reserved Worldwide

 IN NO EVENT SHALL IMPROVEMENT INTERACTIVE, LLC BE LIABLE TO ANY
 PARTY FOR DIRECT, INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL
 DAMAGES, INCLUDING LOST PROFITS, ARISING OUT OF THE USE OF THIS
 SOFTWARE AND ITS DOCUMENTATION, EVEN IF IMPROVEMENT INTERACTIVE
 HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

 IMPROVEMENT INTERACTIVE SPECIFICALLY DISCLAIMS ANY WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE SOFTWARE
 AND ACCOMPANYING DOCUMENTATION, IF ANY, PROVIDED HEREUNDER IS
 PROVIDED "AS IS". IMPROVEMENT INTERACTIVE, LLC HAS NO OBLIGATION
 TO PROVIDE MAINTENANCE, SUPPORT, UPDATES, ENHANCEMENTS, OR
 MODIFICATIONS.
 */
"use strict";
require("bootstrap/dist/js/bootstrap.min.js");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var router_deprecated_1 = require("@angular/router-deprecated");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var app_1 = require("./app");
var project_api_cycligent_1 = require("../../server/project/project-api-cycligent");
//import {Tap} from '../tinymce/tinyapp';
if (cycligent.config.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(app_1.App, [router_deprecated_1.ROUTER_PROVIDERS, common_1.Location, project_api_cycligent_1.ProjectApi]);
//# sourceMappingURL=boot.js.map