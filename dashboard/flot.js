"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by karaan on 10/10/2016.
 */
var core_1 = require('@angular/core');
var FlotCmp = (function () {
    function FlotCmp(el) {
        this.el = el;
        this.width = '100%';
        this.height = 220;
    }
    FlotCmp.prototype.ngAfterViewInit = function () {
        /*
         * RUN PAGE GRAPHS
         */
        /* TAB 1: UPDATING CHART */
        // For the demo we use generated data, but normally it would be coming from the server
        var data = [], totalPoints = 200, $UpdatingChartColors = $("#updating-chart").css('color');
        function getRandomData() {
            if (data.length > 0)
                data = data.slice(1);
            // do a random walk
            while (data.length < totalPoints) {
                var prev = data.length > 0 ? data[data.length - 1] : 50;
                var y = prev + Math.random() * 10 - 5;
                if (y < 0)
                    y = 0;
                if (y > 100)
                    y = 100;
                data.push(y);
            }
            // zip the generated y values with the x values
            var res = [];
            for (var i = 0; i < data.length; ++i)
                res.push([i, data[i]]);
            return res;
        }
        // setup control widget
        var updateInterval = 1500;
        $("#updating-chart").val(updateInterval).change(function () {
            var v = $(this).val();
            if (v && !isNaN(+v)) {
                updateInterval = +v;
                $(this).val("" + updateInterval);
            }
        });
        // setup plot
        var options = {
            yaxis: {
                min: 0,
                max: 100
            },
            xaxis: {
                min: 0,
                max: 100
            },
            colors: [$UpdatingChartColors],
            series: {
                lines: {
                    lineWidth: 1,
                    fill: true,
                    fillColor: {
                        colors: [{
                                opacity: 0.4
                            }, {
                                opacity: 0
                            }]
                    },
                    steps: false
                }
            }
        };
        var plot = $.plot($('#updating-chart'), [getRandomData()], options);
        /* live switch */
        $('input[type="checkbox"]#start_interval').click(function () {
            if ($(this).prop('checked')) {
                $on = true;
                updateInterval = 1500;
                update();
            }
            else {
                clearInterval(updateInterval);
                $on = false;
            }
        });
        function update() {
            if ($on == true) {
                plot.setData([getRandomData()]);
                plot.draw();
                setTimeout(update, updateInterval);
            }
            else {
                clearInterval(updateInterval);
            }
        }
        var $on = false;
        /*end updating chart*/
        var data = [], totalPoints = 200, $UpdatingChartColors = $("#updating-chart3").css('color');
        function getRandomData() {
            if (data.length > 0)
                data = data.slice(1);
            // do a random walk
            while (data.length < totalPoints) {
                var prev = data.length > 0 ? data[data.length - 1] : 50;
                var y = prev + Math.random() * 10 - 5;
                if (y < 0)
                    y = 0;
                if (y > 100)
                    y = 100;
                data.push(y);
            }
            // zip the generated y values with the x values
            var res = [];
            for (var i = 0; i < data.length; ++i)
                res.push([i, data[i]]);
            return res;
        }
        // setup control widget
        var updateInterval = 1500;
        $("#updating-chart3").val(updateInterval).change(function () {
            var v = $(this).val();
            if (v && !isNaN(+v)) {
                updateInterval = +v;
                $(this).val("" + updateInterval);
            }
        });
        // setup plot
        var options = {
            yaxis: {
                min: 0,
                max: 100
            },
            xaxis: {
                min: 0,
                max: 100
            },
            colors: [$UpdatingChartColors],
            series: {
                lines: {
                    lineWidth: 1,
                    fill: true,
                    fillColor: {
                        colors: [{
                                opacity: 0.4
                            }, {
                                opacity: 0
                            }]
                    },
                    steps: false
                }
            }
        };
        var plot = $.plot($("#updating-chart3"), [getRandomData()], options);
        /* live switch */
        $('input[type="checkbox"]#start_interval').click(function () {
            if ($(this).prop('checked')) {
                $on = true;
                updateInterval = 1500;
                update();
            }
            else {
                clearInterval(updateInterval);
                $on = false;
            }
        });
        function update() {
            if ($on == true) {
                plot.setData([getRandomData()]);
                plot.draw();
                setTimeout(update, updateInterval);
            }
            else {
                clearInterval(updateInterval);
            }
        }
        var $on = false;
        /*end updating chart*/
        var data = [], totalPoints = 200, $UpdatingChartColors = $("#updating-chart2").css('color');
        function getRandomData() {
            if (data.length > 0)
                data = data.slice(1);
            // do a random walk
            while (data.length < totalPoints) {
                var prev = data.length > 0 ? data[data.length - 1] : 50;
                var y = prev + Math.random() * 10 - 5;
                if (y < 0)
                    y = 0;
                if (y > 100)
                    y = 100;
                data.push(y);
            }
            // zip the generated y values with the x values
            var res = [];
            for (var i = 0; i < data.length; ++i)
                res.push([i, data[i]]);
            return res;
        }
        // setup control widget
        var updateInterval = 1500;
        $("#updating-chart2").val(updateInterval).change(function () {
            var v = $(this).val();
            if (v && !isNaN(+v)) {
                updateInterval = +v;
                $(this).val("" + updateInterval);
            }
        });
        // setup plot
        var options = {
            yaxis: {
                min: 0,
                max: 100
            },
            xaxis: {
                min: 0,
                max: 100
            },
            colors: [$UpdatingChartColors],
            series: {
                lines: {
                    lineWidth: 1,
                    fill: true,
                    fillColor: {
                        colors: [{
                                opacity: 0.4
                            }, {
                                opacity: 0
                            }]
                    },
                    steps: false
                }
            }
        };
        var plot = $.plot($("#updating-chart2"), [getRandomData()], options);
        /* live switch */
        $('input[type="checkbox"]#start_interval').click(function () {
            if ($(this).prop('checked')) {
                $on = true;
                updateInterval = 1500;
                update();
            }
            else {
                clearInterval(updateInterval);
                $on = false;
            }
        });
        function update() {
            if ($on == true) {
                plot.setData([getRandomData()]);
                plot.draw();
                setTimeout(update, updateInterval);
            }
            else {
                clearInterval(updateInterval);
            }
        }
        var $on = false;
        /// chart start
        var data = [], totalPoints = 200, $UpdatingChartColors = $("#updating-charta").css('color');
        function getRandomData() {
            if (data.length > 0)
                data = data.slice(1);
            // do a random walk
            while (data.length < totalPoints) {
                var prev = data.length > 0 ? data[data.length - 1] : 50;
                var y = prev + Math.random() * 10 - 5;
                if (y < 0)
                    y = 0;
                if (y > 100)
                    y = 100;
                data.push(y);
            }
            // zip the generated y values with the x values
            var res = [];
            for (var i = 0; i < data.length; ++i)
                res.push([i, data[i]]);
            return res;
        }
        // setup control widget
        var updateInterval = 1500;
        $("#updating-charta").val(updateInterval).change(function () {
            var v = $(this).val();
            if (v && !isNaN(+v)) {
                updateInterval = +v;
                $(this).val("" + updateInterval);
            }
        });
        // setup plot
        var options = {
            yaxis: {
                min: 0,
                max: 100
            },
            xaxis: {
                min: 0,
                max: 100
            },
            colors: [$UpdatingChartColors],
            series: {
                lines: {
                    lineWidth: 1,
                    fill: true,
                    fillColor: {
                        colors: [{
                                opacity: 0.4
                            }, {
                                opacity: 0
                            }]
                    },
                    steps: false
                }
            }
        };
        var plot = $.plot($("#updating-charta"), [getRandomData()], options);
        /* live switch */
        $('input[type="checkbox"]#start_interval').click(function () {
            if ($(this).prop('checked')) {
                $on = true;
                updateInterval = 1500;
                update();
            }
            else {
                clearInterval(updateInterval);
                $on = false;
            }
        });
        function update() {
            if ($on == true) {
                plot.setData([getRandomData()]);
                plot.draw();
                setTimeout(update, updateInterval);
            }
            else {
                clearInterval(updateInterval);
            }
        }
        var $on = false;
        // chart end
        /// chart start
        var data = [], totalPoints = 200, $UpdatingChartColors = $("#updating-chartb").css('color');
        function getRandomData() {
            if (data.length > 0)
                data = data.slice(1);
            // do a random walk
            while (data.length < totalPoints) {
                var prev = data.length > 0 ? data[data.length - 1] : 50;
                var y = prev + Math.random() * 10 - 5;
                if (y < 0)
                    y = 0;
                if (y > 100)
                    y = 100;
                data.push(y);
            }
            // zip the generated y values with the x values
            var res = [];
            for (var i = 0; i < data.length; ++i)
                res.push([i, data[i]]);
            return res;
        }
        // setup control widget
        var updateInterval = 1500;
        $("#updating-chartb").val(updateInterval).change(function () {
            var v = $(this).val();
            if (v && !isNaN(+v)) {
                updateInterval = +v;
                $(this).val("" + updateInterval);
            }
        });
        // setup plot
        var options = {
            yaxis: {
                min: 0,
                max: 100
            },
            xaxis: {
                min: 0,
                max: 100
            },
            colors: [$UpdatingChartColors],
            series: {
                lines: {
                    lineWidth: 1,
                    fill: true,
                    fillColor: {
                        colors: [{
                                opacity: 0.4
                            }, {
                                opacity: 0
                            }]
                    },
                    steps: false
                }
            }
        };
        var plot = $.plot($("#updating-chartb"), [getRandomData()], options);
        /* live switch */
        $('input[type="checkbox"]#start_interval').click(function () {
            if ($(this).prop('checked')) {
                $on = true;
                updateInterval = 1500;
                update();
            }
            else {
                clearInterval(updateInterval);
                $on = false;
            }
        });
        function update() {
            if ($on == true) {
                plot.setData([getRandomData()]);
                plot.draw();
                setTimeout(update, updateInterval);
            }
            else {
                clearInterval(updateInterval);
            }
        }
        var $on = false;
        // chart end
        /// chart start
        var data = [], totalPoints = 200, $UpdatingChartColors = $("#updating-chartc").css('color');
        function getRandomData() {
            if (data.length > 0)
                data = data.slice(1);
            // do a random walk
            while (data.length < totalPoints) {
                var prev = data.length > 0 ? data[data.length - 1] : 50;
                var y = prev + Math.random() * 10 - 5;
                if (y < 0)
                    y = 0;
                if (y > 100)
                    y = 100;
                data.push(y);
            }
            // zip the generated y values with the x values
            var res = [];
            for (var i = 0; i < data.length; ++i)
                res.push([i, data[i]]);
            return res;
        }
        // setup control widget
        var updateInterval = 1500;
        $("#updating-chartc").val(updateInterval).change(function () {
            var v = $(this).val();
            if (v && !isNaN(+v)) {
                updateInterval = +v;
                $(this).val("" + updateInterval);
            }
        });
        // setup plot
        var options = {
            yaxis: {
                min: 0,
                max: 100
            },
            xaxis: {
                min: 0,
                max: 100
            },
            colors: [$UpdatingChartColors],
            series: {
                lines: {
                    lineWidth: 1,
                    fill: true,
                    fillColor: {
                        colors: [{
                                opacity: 0.4
                            }, {
                                opacity: 0
                            }]
                    },
                    steps: false
                }
            }
        };
        var plot = $.plot($("#updating-chartc"), [getRandomData()], options);
        /* live switch */
        $('input[type="checkbox"]#start_interval').click(function () {
            if ($(this).prop('checked')) {
                $on = true;
                updateInterval = 1500;
                update();
            }
            else {
                clearInterval(updateInterval);
                $on = false;
            }
        });
        function update() {
            if ($on == true) {
                plot.setData([getRandomData()]);
                plot.draw();
                setTimeout(update, updateInterval);
            }
            else {
                clearInterval(updateInterval);
            }
        }
        var $on = false;
    };
    FlotCmp.chosenInitialized = false;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FlotCmp.prototype, "options", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], FlotCmp.prototype, "dataset", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FlotCmp.prototype, "width", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], FlotCmp.prototype, "height", void 0);
    FlotCmp = __decorate([
        core_1.Component({
            selector: 'app-dash',
            templateUrl: "dashboard/dashboard.html",
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], FlotCmp);
    return FlotCmp;
}());
exports.FlotCmp = FlotCmp;
//# sourceMappingURL=flot.js.map