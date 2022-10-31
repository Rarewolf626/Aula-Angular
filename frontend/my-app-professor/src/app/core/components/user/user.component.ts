import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user'
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user!: User;
  submitted=false;
  userForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private _router: Router

    ) {}

  ngOnInit(): void {

    this.user = {
      nome: '',
      email: '',
      status: true,
      password: '',
    };

    this.userForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      email: new FormControl(''),
      password: new FormControl(''),
      confirmPwd: new FormControl('')
    });



  }

  onSubmit(form: FormGroup) {
    if(form.valid){
      // console.log('Valid?', form.valid); // true or false

      this.mapFormValuesToUserModel();




      console.log(this.user);

      this.userService.save(this.user).subscribe({
        next: (user) => {
          this._router.navigate(['']);
          console.log(user.confirmationToken)
        },
        error: (err: any) => console.log(err)
      }
    );


    } else {
      console.log('preencha os campos obrigatórios')

    }
  }
  mapFormValuesToUserModel() {
    this.user.nome = this.userForm.value.nome;
    this.user.email = this.userForm.value.email;
    this.user.password = this.userForm.value.password;

  }

}



