import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {UserService} from '../api/user.service';
import {  Router } from '@angular/router';
import { Storage } from '@ionic/storage';

//
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  private todo: FormGroup;
  private response:any;
  constructor(
    private formBuilder: FormBuilder,
    private _UserService: UserService,
    private router:Router,
    private storage: Storage
  ) {
    this.todo = this.formBuilder.group({
      correo: ['', Validators.required],
      contra: ['', Validators.required],
    });
  }
  logForm() {
    let user = this.todo.value;
    console.log(user.correo, user.contra);

    this._UserService.login(user.correo, user.contra).subscribe(
      Response => {
        console.log('Usted se ha logueado');
        console.log(Response);
        this.response = Response;        
        this.storage.set('user', Response)
        this.router.navigateByUrl('/panel');
        this.todo.reset(); 
      }, error => {
        console.log( <any> error);
      }
    ) 
  }

}
