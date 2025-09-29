import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../auth/auth';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss'
})


export class LoginPageComponent {
  authService= inject(Auth)
  router = inject(Router)

  form = new FormGroup({
    username: new FormControl(null,Validators.required),
    password: new FormControl(null,Validators.required)
  });



  onSubmit() {
    if (this.form.valid) {
      //@ts-ignore
       this.authService.login(this.form.value)
       .subscribe((res: Object) => {
        this.router.navigate([''])
        console.log(res);
       });
    }

  }

}
