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
var core_1 = require('@angular/core');
var impact_1 = require("./impact");
var speed_1 = require("./speed");
var hoursforecast_1 = require("./hoursforecast");
var DialComponent = (function () {
    function DialComponent(div) {
        this.div = div;
        this.gauges = [];
    }
    DialComponent.prototype.createGauge = function (name, label, min, max) {
        var config = {
            size: 110,
            label: label,
            min: undefined != min ? min : 0,
            max: undefined != max ? max : 20,
            minorTicks: 2
        };
        var range = config.max - config.min;
        config.redZones = [{ from: config.min + range * 0.0, to: config.min + range * 0.3 }];
        config.yellowZones = [{ from: config.min + range * 0.3, to: config.min + range * 0.6 }];
        config.greenZones = [{ from: config.min + range * 0.09, to: config.max }];
        this.gauges[name] = new Gauge(name + "GaugeContainer", config);
        this.gauges[name].render();
    };
    DialComponent.prototype.createGauges = function () {
        this.createGauge("speed", "Speed", 5);
        this.createGauge("impact", "Impact", 2);
        //createGauge("test", "Test", -50, 50 );
    };
    DialComponent.prototype.initialize = function () {
        this.createGauges();
    };
    DialComponent.prototype.ngAfterViewInit = function () {
        this.initialize();
    };
    DialComponent = __decorate([
        core_1.Component({
            selector: 'app-dial',
            templateUrl: "dashboard/dial.html",
            directives: [impact_1.ImpactComponent, speed_1.SpeedComponent, hoursforecast_1.HoursForecastComponent]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], DialComponent);
    return DialComponent;
}());
exports.DialComponent = DialComponent;
//# sourceMappingURL=dials.js.map