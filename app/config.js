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
// noinspection ReservedWordAsName
cycligent.config = {
    appName: "Typescript Example App",
    appDescription: "Typescript Example App",
    appVersion: "M.m.B",
    production: false,
    minimizeSource: false,
    startupScript: "/projects/client/app/main",
    providerUrl: "/projects/provider.aspx",
    providerTimeout: 34000,
    loader: {
        libs: [],
        waitFor: {
            dom: false,
            page: false
        },
        timeout: (location.hostname === "localhost" ? 2500 : 70000),
        /* APPLICATION Roots
         * Should always associate with an application, especially for cycligent names.
         */
        roots: {
            jquery: {
                root: "/cycligent/client",
                isCycligentName: false
            },
            cycligent: { root: "/cycligent/client" },
            app: { root: "/projects/client" }
        }
    },
    debug: {
        on: true,
        doNotCatchAllExceptionsOnLocalHost: true,
        startup: true,
        scripts: false,
        private: {
            check: true,
            exception: true
        },
        args: {
            check: true,
            exception: true,
            arrays: {
                check: true,
                allElements: false
            }
        },
        interfaces: {
            check: true,
            exception: true
        }
    },
    session: {
        on: true,
        server: {
            on: true,
            timeoutOn: false,
            signOn: true,
            userConfig: true,
            messages: true,
            roles: true,
            skins: true
        },
        cookie: {
            on: false
        }
    }
};
if (cycligent.config.production) {
    cycligent.config.loader.libs = [
        "/cycligent/client/jquery.js",
        "/projects/client/node_modules/systemjs/dist/system.src.js",
        "/projects/client/node_modules/zone.js/dist/zone.js",
        "/projects/client/node_modules/reflect-metadata/Reflect.js",
        "/projects/client/node_modules/rxjs/bundles/Rx.min.js"
    ];
}
else {
    cycligent.config.loader.libs = [
        //"/cycligent/client/jquery.js",
        "/cycligent/client/jquery-2.1.1.js",
        "/projects/client/node_modules/systemjs/dist/system.src.js",
        "/projects/client/node_modules/zone.js/dist/zone.js",
        "/projects/client/node_modules/reflect-metadata/Reflect.js",
        "/projects/client/node_modules/rxjs/bundles/Rx.js",
        "/projects/client/js/antiscroll/jquery-mousewheel.js",
        "/projects/client/js/antiscroll/scrollbar.js",
        "/projects/client/js/plugin/easy-pie-chart/jquery.easy-pie-chart.min.js",
        "/projects/client/js/plugin/sparkline/jquery.sparkline.min.js",
        "/projects/client/js/smartwidgets/jarvis.widget.min.js",
        "/projects/client/js/plugin/pace/pace.min.js",
        "/projects/client/js/plugin/flot/jquery.flot.cust.min.js",
        "/projects/client/js/plugin/flot/jquery.flot.resize.min.js",
        "/projects/client/js/d3.js",
        "/projects/client/js/d3.min.js",
        "/projects/client/js/arealinegraph.js",
        "/projects/client/js/hoursforecast.js",
        "/projects/client/js/guage.js"
    ];
}
//# sourceMappingURL=config.js.map