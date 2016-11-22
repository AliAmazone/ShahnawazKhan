/**
 * Created by karaan on 9/23/2016.
 */
import {Component,OnInit,Injectable} from "@angular/core";
import {FlotCmp} from './flot';
import {DialComponent} from './dials';

@Component({

    selector :"app-dash",
    templateUrl: "dashboard/dashboard.html",
   // template: "<app-dash></app-dash>",
    directives: [FlotCmp,DialComponent]

})

export class DashComponent implements OnInit{
    public DashCurrentStatus: boolean = false;
    constructor(){}

    ngOnInit(){
    }


}