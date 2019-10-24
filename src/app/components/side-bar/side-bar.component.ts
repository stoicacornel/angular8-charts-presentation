import { Component } from '@angular/core';
import sideBarJson from '../../../assets/json-data/sideBarJson.json';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
    sideBarJson: any;

    constructor() {
        this.sideBarJson = sideBarJson;
        console.log(sideBarJson);
    }
}
