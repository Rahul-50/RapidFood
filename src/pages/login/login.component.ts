import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) { }
  userobj: any = {
    userdata: '',
    Email: '',
    password: '',
    Confirmpassword: ''
  }
  onlogin(item: any) {

    if ('admin' === this.userobj.userdata && 'admin' === this.userobj.password) {
      this.router.navigateByUrl('/foodcategory')
    } else {
      alert(' invalid Credintioals !')
    }
  }

  onsignin(item: any) {


  }
}
