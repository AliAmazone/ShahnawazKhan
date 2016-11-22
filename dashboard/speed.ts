/**
 * Created by Shahnawaz on 03-11-2016.
 */

import {Component, ViewChild, ElementRef,  AfterViewInit} from '@angular/core';

@Component({
    selector: 'app-speed',
    templateUrl: "dashboard/speed.html",
})

export class SpeedComponent  implements AfterViewInit{

    arealinegraphs:any = [];

    constructor(public div: ElementRef) {}

    createAreaLineGraph(name :string
        , label : string, min? :number, max? : number)
    {
        let config : any =
        {
            size: 120,
            label: label,
        }


        config.data = [{"x":1,"minus2":1.796798338630225,"minus1":17.560899169315114,"value":24,"average20":33.325,"plus1":49.08910083068489,"plus2":64.85320166136978},{"x":2,"minus2":-2.903434964389561,"minus1":16.74828251780522,"value":88,"average20":36.4,"plus1":56.051717482194775,"plus2":75.70343496438956},{"x":3,"minus2":-2.3893236125204496,"minus1":17.467838193739777,"value":50.5,"average20":37.325,"plus1":57.182161806260225,"plus2":77.03932361252046},{"x":4,"minus2":-4.245357316703398,"minus1":16.1148213416483,"value":16.5,"average20":36.475,"plus1":56.8351786583517,"plus2":77.1953573167034},{"x":5,"minus2":-4.539257591539986,"minus1":15.530371204230008,"value":34,"average20":35.6,"plus1":55.669628795769995,"plus2":75.73925759154},{"x":6,"minus2":-0.8774932683990997,"minus1":17.92375336580045,"value":25.5,"average20":36.725,"plus1":55.52624663419955,"plus2":74.32749326839911},{"x":7,"minus2":-3.216737770128695,"minus1":16.316631114935653,"value":11.5,"average20":35.85,"plus1":55.38336888506435,"plus2":74.91673777012869},{"x":8,"minus2":-3.3486164182431395,"minus1":16.18819179087843,"value":34,"average20":35.725,"plus1":55.26180820912157,"plus2":74.79861641824314},{"x":9,"minus2":-3.3254795367013372,"minus1":16.22476023164933,"value":41.5,"average20":35.775,"plus1":55.32523976835067,"plus2":74.87547953670133},{"x":10,"minus2":-2.131285989439803,"minus1":17.134357005280098,"value":33.5,"average20":36.4,"plus1":55.6656429947199,"plus2":74.9312859894398},{"x":11,"minus2":-1.1935227726104358,"minus1":18.10323861369478,"value":47.5,"average20":37.4,"plus1":56.69676138630521,"plus2":75.99352277261043},{"x":12,"minus2":-1.1738881235004115,"minus1":17.375555938249793,"value":31.5,"average20":35.925,"plus1":54.474444061750205,"plus2":73.0238881235004},{"x":13,"minus2":-1.8900170158776248,"minus1":16.84249149206119,"value":22.5,"average20":35.575,"plus1":54.30750850793882,"plus2":73.04001701587762},{"x":14,"minus2":-1.401561423673428,"minus1":17.311719288163285,"value":39.5,"average20":36.025,"plus1":54.73828071183671,"plus2":73.45156142367343},{"x":15,"minus2":-0.0013243095858328502,"minus1":18.286837845207085,"value":27.5,"average20":36.575,"plus1":54.86316215479292,"plus2":73.15132430958585},{"x":16,"minus2":0.5364873722107362,"minus1":18.705743686105368,"value":32.5,"average20":36.875,"plus1":55.044256313894635,"plus2":73.21351262778927},{"x":17,"minus2":-0.32230280394374944,"minus1":17.751348598028127,"value":27.5,"average20":35.825,"plus1":53.898651401971875,"plus2":71.97230280394376},{"x":18,"minus2":-0.46808940294890533,"minus1":17.640955298525547,"value":26.5,"average20":35.75,"plus1":53.85904470147445,"plus2":71.9680894029489},{"x":19,"minus2":0.4497559283064234,"minus1":18.37487796415321,"value":35.5,"average20":36.3,"plus1":54.22512203584678,"plus2":72.15024407169358},{"x":20,"minus2":2.2512490257404494,"minus1":17.888124512870224,"value":21,"average20":33.525,"plus1":49.16187548712978,"plus2":64.79875097425955}];

        this.arealinegraphs = new AreaLineGraph(name + "Container", config);
        this.arealinegraphs.render();
    }

    createAreaLineGraphs()
    {
        this.createAreaLineGraph("speed", "Speed" );
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

