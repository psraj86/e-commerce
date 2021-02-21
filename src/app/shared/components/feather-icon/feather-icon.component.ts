import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
@Component({
  selector: 'app-feather-icon',
  templateUrl: './feather-icon.component.html',
  styleUrls: ['./feather-icon.component.scss']
})
export class FeatherIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    feather.replace();
  }

}
