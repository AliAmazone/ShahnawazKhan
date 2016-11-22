/**
 * Created by Shahnawaz on 03-11-2016.
 */
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
var ImpactComponent = (function () {
    function ImpactComponent(div) {
        this.div = div;
        this.arealinegraphs = [];
    }
    ImpactComponent.prototype.createAreaLineGraph = function (name, label, min, max) {
        var config = {
            height: 200,
            width: 200,
            label: label,
        };
        config.data = [{ "x": 1, "minus2": 0, "minus1": 0, "value": 1, "average20": 3.3, "plus1": 6.906937759374286, "plus2": 10.513875518748574 }, { "x": 2, "minus2": 0, "minus1": 0, "value": 4, "average20": 3.45, "plus1": 7.02036412708844, "plus2": 10.59072825417688 }, { "x": 3, "minus2": 0, "minus1": 0, "value": 1, "average20": 3.45, "plus1": 7.02036412708844, "plus2": 10.59072825417688 }, { "x": 4, "minus2": 0, "minus1": 0, "value": 4, "average20": 3.25, "plus1": 6.668698582794336, "plus2": 10.087397165588673 }, { "x": 5, "minus2": 0, "minus1": 0.017693094942448084, "value": 4, "average20": 3.4, "plus1": 6.782306905057552, "plus2": 10.164613810115103 }, { "x": 6, "minus2": 0, "minus1": 0.017693094942448084, "value": 1, "average20": 3.4, "plus1": 6.782306905057552, "plus2": 10.164613810115103 }, { "x": 7, "minus2": 0, "minus1": 0, "value": 1, "average20": 3.05, "plus1": 6.2976914878109955, "plus2": 9.54538297562199 }, { "x": 8, "minus2": 0, "minus1": 0, "value": 1, "average20": 2.7, "plus1": 5.767572330035594, "plus2": 8.835144660071187 }, { "x": 9, "minus2": 0, "minus1": 0, "value": 1, "average20": 2.7, "plus1": 5.767572330035594, "plus2": 8.835144660071187 }, { "x": 10, "minus2": 0, "minus1": 0, "value": 1, "average20": 2.7, "plus1": 5.767572330035593, "plus2": 8.835144660071187 }, { "x": 11, "minus2": 0, "minus1": 0, "value": 1, "average20": 2.35, "plus1": 5.183284313301438, "plus2": 8.016568626602876 }, { "x": 12, "minus2": 0, "minus1": 0, "value": 1, "average20": 2.35, "plus1": 5.183284313301438, "plus2": 8.016568626602876 }, { "x": 13, "minus2": 0, "minus1": 0, "value": 1, "average20": 2.35, "plus1": 5.183284313301438, "plus2": 8.016568626602876 }, { "x": 14, "minus2": 0, "minus1": 0, "value": 1, "average20": 2.35, "plus1": 5.183284313301438, "plus2": 8.016568626602876 }, { "x": 15, "minus2": 0, "minus1": 0, "value": 1, "average20": 2.35, "plus1": 5.183284313301438, "plus2": 8.016568626602876 }, { "x": 16, "minus2": 0, "minus1": 0, "value": 1, "average20": 2, "plus1": 4.529822128134704, "plus2": 7.059644256269407 }, { "x": 17, "minus2": 0, "minus1": 0.37878573571857244, "value": 1, "average20": 1.45, "plus1": 2.5212142642814275, "plus2": 3.5924285285628548 }, { "x": 18, "minus2": 0, "minus1": 0.37878573571857244, "value": 1, "average20": 1.45, "plus1": 2.5212142642814275, "plus2": 3.5924285285628548 }, { "x": 19, "minus2": 0, "minus1": 0.37878573571857266, "value": 1, "average20": 1.45, "plus1": 2.5212142642814275, "plus2": 3.5924285285628548 }, { "x": 20, "minus2": 0, "minus1": 0.37878573571857266, "value": 1, "average20": 1.45, "plus1": 2.5212142642814275, "plus2": 3.5924285285628548 }];
        this.arealinegraphs = new AreaLineGraph(name + "Container", config);
        this.arealinegraphs.render();
    };
    ImpactComponent.prototype.createAreaLineGraphs = function () {
        this.createAreaLineGraph("impact", "Impact");
    };
    ImpactComponent.prototype.updateAreaLineGraphs = function () {
    };
    ImpactComponent.prototype.initialize = function () {
        this.createAreaLineGraphs();
        setInterval(this.updateAreaLineGraphs, 5000);
    };
    ImpactComponent.prototype.ngAfterViewInit = function () {
        this.initialize();
    };
    ImpactComponent = __decorate([
        core_1.Component({
            selector: 'app-impact',
            templateUrl: "dashboard/impact.html",
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ImpactComponent);
    return ImpactComponent;
}());
exports.ImpactComponent = ImpactComponent;
//# sourceMappingURL=impact.js.map