import {Component, ViewChild, ElementRef,  AfterViewInit} from '@angular/core';
import {ImpactComponent} from "./impact";
import {SpeedComponent} from "./speed";
import {HoursForecastComponent} from "./hoursforecast";

@Component({
    selector: 'app-dial',
    templateUrl: "dashboard/dial.html",
    directives: [ImpactComponent, SpeedComponent, HoursForecastComponent]
})


export class DialComponent  implements AfterViewInit{

    gauges:any[] = [];

    constructor(public div: ElementRef) {}


    createGauge(name :string
    , label : string, min? :number, max? : number)
{
    let config : any =
    {
        size: 110,
        label: label,
        min: undefined != min ? min : 0,
        max: undefined != max ? max : 20,
        minorTicks:2

    }

    let range : number = config.max - config.min;
    config.redZones = [{ from: config.min + range*0.0, to: config.min + range*0.3 }];
    config.yellowZones = [{ from: config.min + range*0.3, to: config.min + range*0.6}];
    config.greenZones = [{ from: config.min + range*0.09, to: config.max }];


   this.gauges[name] = new  Gauge(name + "GaugeContainer", config);
    this.gauges[name].render();
}

     createGauges()
{
   this.createGauge("speed", "Speed" ,  5 );
    this.createGauge("impact", "Impact", 2 );

    //createGauge("test", "Test", -50, 50 );
}




     initialize()
{
   this.createGauges();

}



    ngAfterViewInit() {

 this.initialize();

    }
}

