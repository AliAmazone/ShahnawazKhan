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
 * Created by karaan on 9/23/2016.
 */
var core_1 = require("@angular/core");
var flot_1 = require('./flot');
var dials_1 = require('./dials');
var DashComponent = (function () {
    function DashComponent() {
        this.DashCurrentStatus = false;
    }
    DashComponent.prototype.ngOnInit = function () {
    };
    DashComponent = __decorate([
        core_1.Component({
            selector: "app-dash",
            templateUrl: "dashboard/dashboard.html",
            // template: "<app-dash></app-dash>",
            directives: [flot_1.FlotCmp, dials_1.DialComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DashComponent);
    return DashComponent;
}());
exports.DashComponent = DashComponent;
//# sourceMappingURL=dashboard.js.map