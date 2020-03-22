import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/filter';
import { EmpleadoService } from 'src/app/Service/empleado.service';




@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  currentRate: any;
  public typeaheadBasicModel: any;
  public typeaheadFocusModel: any;
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
{Estado:"Wyoming"}
    ];
 

  constructor(public empleadoService: EmpleadoService) { }

  primerNombre : string;
  segundoNombre : string;
  apellidos : string;

  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();  


  ngOnInit() {
    this.currentRate = 8;
    this.empleadoService.GetEmployees().subscribe(
      rta =>{
        console.log(rta);
      },
      error =>{
        console.log(error);
      }
    )    
  }
  Save(){
    alert("salvar");
  }

}
