import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonsComponent implements OnInit {
  public states : any = [
    {Estado:"Alabama"},
{Estado:"Alaska"},
{Estado:"Arizona"},
{Estado:"Arkansas"},
{Estado:"California"},
{Estado:"Colorado"},
{Estado:"Connecticut"},
{Estado:"Delaware"},
{Estado:"District of Columbia"},
{Estado:"Florida"},
{Estado:"Georgia"},
{Estado:"Hawaii"},
{Estado:"Idaho"},
{Estado:"Illinois"},
{Estado:"Indiana"},
{Estado:"Iowa"},
{Estado:"Kansas"},
{Estado:"Kentucky"},
{Estado:"Louisiana"},
{Estado:"Maine"},
{Estado:"Maryland"},
{Estado:"Massachusetts"},
{Estado:"Michigan"},
{Estado:"Minnesota"},
{Estado:"Mississippi"},
{Estado:"Missouri"},
{Estado:"Montana"},
{Estado:"Nebraska"},
{Estado:"Nevada"},
{Estado:"New Hampshire"},
{Estado:"New Jersey"},
{Estado:"New Mexico"},
{Estado:"New York"},
{Estado:"North Carolina"},
{Estado:"North Dakota"},
{Estado:"Ohio"},
{Estado:"Oklahoma"},
{Estado:"Oregon"},
{Estado:"Pennsylvania"},
{Estado:"Puerto Rico"},
{Estado:"Rhode Island"},
{Estado:"South Carolina"},
{Estado:"South Dakota"},
{Estado:"Tennessee"},
{Estado:"Texas"},
{Estado:"Utah"},
{Estado:"Vermont"},
{Estado:"Virgin Islands"},
{Estado:"Virginia"},
{Estado:"Washington"},
{Estado:"West Virginia"},
{Estado:"Wisconsin"},
{Estado:"Wyoming"}];
  model = 1;
  checkboxModel = {
   left: true,
   middle: false,
   right: false
 };
  constructor() { }

  ngOnInit() {
  }

}
