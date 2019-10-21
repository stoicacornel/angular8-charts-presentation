import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar-button',
  templateUrl: './side-bar-button.component.html',
  styleUrls: ['./side-bar-button.component.css']
})
export class SideBarButtonComponent {
  @Input() label: string;
  @Input() redirect: string;
  @Input() sideBarButtonPath: string;
  @Input() color: string;

  constructor() { }

}
