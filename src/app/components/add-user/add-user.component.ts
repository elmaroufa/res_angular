import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { ReqresService } from 'src/app/services/reqres.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm: FormGroup;
  submitted = false;

  constructor(
    private formBulder : FormBuilder,
    private reqresService : ReqresService,
    private router: Router
  ){
     this.userForm = this.formBulder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required]
     });
  }

  ngOnInit(): void {

  }
  get f(): any { return this.userForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    if(this.userForm.invalid){
      return;
    }
    const avatar = 'assets/img/user.jpg';
    const first_name: string = this.f.first_name.value;
    const last_name: string = this.f.last_name.value;
    this.reqresService.addUser( { first_name, last_name, avatar } as User )
        .subscribe(() => this.router.navigate( ['users'] ));
  }

}
