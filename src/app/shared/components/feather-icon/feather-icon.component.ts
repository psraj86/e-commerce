import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import * as feather from 'feather-icons';
@Component({
  selector: 'app-feather-icon',
  templateUrl: './feather-icon.component.html',
  styleUrls: ['./feather-icon.component.scss']
})
export class FeatherIconComponent implements OnInit, AfterViewInit {

  @Input() icon: string;
  constructor() { }
  ngOnInit(): void { }

  ngAfterViewInit(): void {
    console.log(this.icon);
    feather.replace();
  }

}
