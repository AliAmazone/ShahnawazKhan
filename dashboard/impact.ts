/**
 * Created by Shahnawaz on 03-11-2016.
 */

import {Component, ViewChild, ElementRef,  AfterViewInit} from '@angular/core';

@Component({
    selector: 'app-impact',
    templateUrl: "dashboard/impact.html",
})

export class ImpactComponent  implements AfterViewInit{

    arealinegraphs:any = [];

    constructor(public div: ElementRef) {}

    createAreaLineGraph(name :string
        , label : string, min? :number, max? : number)
    {
        let config : any =
        {
           height: 200,
            width: 200,

            label: label,
        }

        config.data = [{"x":1,"minus2":0,"minus1":0,"value":1,"average20":3.3,"plus1":6.906937759374286,"plus2":10.513875518748574},{"x":2,"minus2":0,"minus1":0,"value":4,"average20":3.45,"plus1":7.02036412708844,"plus2":10.59072825417688},{"x":3,"minus2":0,"minus1":0,"value":1,"average20":3.45,"plus1":7.02036412708844,"plus2":10.59072825417688},{"x":4,"minus2":0,"minus1":0,"value":4,"average20":3.25,"plus1":6.668698582794336,"plus2":10.087397165588673},{"x":5,"minus2":0,"minus1":0.017693094942448084,"value":4,"average20":3.4,"plus1":6.782306905057552,"plus2":10.164613810115103},{"x":6,"minus2":0,"minus1":0.017693094942448084,"value":1,"average20":3.4,"plus1":6.782306905057552,"plus2":10.164613810115103},{"x":7,"minus2":0,"minus1":0,"value":1,"average20":3.05,"plus1":6.2976914878109955,"plus2":9.54538297562199},{"x":8,"minus2":0,"minus1":0,"value":1,"average20":2.7,"plus1":5.767572330035594,"plus2":8.835144660071187},{"x":9,"minus2":0,"minus1":0,"value":1,"average20":2.7,"plus1":5.767572330035594,"plus2":8.835144660071187},{"x":10,"minus2":0,"minus1":0,"value":1,"average20":2.7,"plus1":5.767572330035593,"plus2":8.835144660071187},{"x":11,"minus2":0,"minus1":0,"value":1,"average20":2.35,"plus1":5.183284313301438,"plus2":8.016568626602876},{"x":12,"minus2":0,"minus1":0,"value":1,"average20":2.35,"plus1":5.183284313301438,"plus2":8.016568626602876},{"x":13,"minus2":0,"minus1":0,"value":1,"average20":2.35,"plus1":5.183284313301438,"plus2":8.016568626602876},{"x":14,"minus2":0,"minus1":0,"value":1,"average20":2.35,"plus1":5.183284313301438,"plus2":8.016568626602876},{"x":15,"minus2":0,"minus1":0,"value":1,"average20":2.35,"plus1":5.183284313301438,"plus2":8.016568626602876},{"x":16,"minus2":0,"minus1":0,"value":1,"average20":2,"plus1":4.529822128134704,"plus2":7.059644256269407},{"x":17,"minus2":0,"minus1":0.37878573571857244,"value":1,"average20":1.45,"plus1":2.5212142642814275,"plus2":3.5924285285628548},{"x":18,"minus2":0,"minus1":0.37878573571857244,"value":1,"average20":1.45,"plus1":2.5212142642814275,"plus2":3.5924285285628548},{"x":19,"minus2":0,"minus1":0.37878573571857266,"value":1,"average20":1.45,"plus1":2.5212142642814275,"plus2":3.5924285285628548},{"x":20,"minus2":0,"minus1":0.37878573571857266,"value":1,"average20":1.45,"plus1":2.5212142642814275,"plus2":3.5924285285628548}];

        this.arealinegraphs = new AreaLineGraph(name + "Container", config);
        this.arealinegraphs.render();
    }

    createAreaLineGraphs()
    {
        this.createAreaLineGraph("impact", "Impact" );
    }

    updateAreaLineGraphs()
    {
    }

    initialize()
    {
        this.createAreaLineGraphs();
        setInterval(this.updateAreaLineGraphs, 5000);
    }

    ngAfterViewInit() {

        this.initialize();

    }
}

