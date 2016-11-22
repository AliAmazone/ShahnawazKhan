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

import "bootstrap/dist/js/bootstrap.min.js";
import {bootstrap}      from "@angular/platform-browser-dynamic";
import {ROUTER_PROVIDERS} from "@angular/router-deprecated";
import {Location} from "@angular/common";
import {enableProdMode} from "@angular/core";
import {App} from "./app";
import {ExampleApi} from "../../server/example/example-api-cycligent";
import {FoobarApi} from "../../server/foobar/foobar-api-cycligent";
import {ProjectApi} from "../../server/project/project-api-cycligent";
import {DialComponent} from "../dashboard/dials";
//import {Tap} from '../tinymce/tinyapp';

if (cycligent.config.production) {
    enableProdMode();
}


bootstrap(App, [ROUTER_PROVIDERS, Location,ProjectApi]);
