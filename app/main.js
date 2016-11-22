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
cycligent.import("cycligent.ajax");
cycligent.import("cycligent.session");
/* tslint:enable:no-any */
/* tslint:disable:no-unused-variable */
function main() {
    /* tslint:enable:no-unused-variable */
    "use strict";
    // Get session before proceeding.
    var session = new cycligent.Session();
    session.registerFetchNotify(function () {
        // Session ready
        console.info("Session ready");
        System.config({
            packages: {
                "/projects/client/app": {
                    format: "cjs",
                    defaultExtension: "js"
                },
                "/projects/client": {
                    format: "cjs",
                    defaultExtension: "js"
                },
                "/projects/server": {
                    format: "cjs",
                    defaultExtension: "js"
                },
                "projects": {
                    format: "cjs",
                    defaultExtension: "js"
                },
                // We actually load up angular2 via config.js, and the file we load is one giant blob that
                // contains all the modules, so we don't actually need this (and if we were to load through
                // this, that would mean we're loading redundant code):
                "@angular": {
                    format: "cjs",
                    defaultExtension: "js"
                },
                "@angular/common": {
                    main: "index.js",
                    format: "cjs",
                    defaultExtension: "js"
                },
                "@angular/compiler": {
                    main: "index.js",
                    format: "cjs",
                    defaultExtension: "js"
                },
                "@angular/core": {
                    main: "index.js",
                    format: "cjs",
                    defaultExtension: "js"
                },
                "@angular/http": {
                    main: "index.js",
                    format: "cjs",
                    defaultExtension: "js"
                },
                "@angular/platform-browser": {
                    main: "index.js",
                    format: "cjs",
                    defaultExtension: "js"
                },
                "@angular/platform-browser-dynamic": {
                    main: "index.js",
                    format: "cjs",
                    defaultExtension: "js"
                },
                "@angular/router": {
                    main: "index.js",
                    format: "cjs",
                    defaultExtension: "js"
                },
                "@angular/router-deprecated": {
                    main: "index.js",
                    format: "cjs",
                    defaultExtension: "js"
                },
                "bootstrap": {
                    format: "cjs",
                    defaultExtension: "js"
                },
                "rxjs": {
                    format: "cjs",
                    defaultExtension: "js"
                }
            },
            map: {
                // We actually load up angular2 via config.js, and the file we load is one giant blob that
                // contains all the modules, so we don't actually need this (and if we were to load through
                // this, that would mean we're loading redundant code):
                "@angular": "/projects/client/node_modules/@angular",
                "bootstrap": "/projects/client/node_modules/bootstrap",
                "rxjs": "/projects/client/node_modules/rxjs",
                "angular2-web-worker": "/projects/client/node_modules/angular2-web-worker"
            }
        });
        // noinspection JSFileReferences
        System.import("/projects/client/app/boot")
            .then(null, console.error.bind(console));
    });
}
//# sourceMappingURL=main.js.map