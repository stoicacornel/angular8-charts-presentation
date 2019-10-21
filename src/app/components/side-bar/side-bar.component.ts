import { Component } from '@angular/core';
import sideBarJson from '../../../assets/sideBarJson.json';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  constructor() {
    console.log('Reading local json files');
    console.log(sideBarJson);
  }

}
