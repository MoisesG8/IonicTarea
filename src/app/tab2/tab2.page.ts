import { Component } from '@angular/core';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  private usuarios:any;
  constructor(
    private _UserService:UserService
  ) {}

  ObtenerUsuarios(){
   this._UserService.getUser().subscribe(
     Response=>{
       this.usuarios = Response
       console.log(this.usuarios)

     }
   )
  }

}
