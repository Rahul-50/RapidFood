import { DataService } from './../../Services/data.service';
import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  DataServ = inject(DataService)
  userdata: any;

  constructor(private router: Router) { }
  // userobj: any = {
  //   userdata: '',
  //   Email: '',
  //   password: '',
  //   Confirmpassword: ''
  // }

  onlogin(item: any) {
    this.userdata = this.DataServ.userobj
    if ('admin' === this.userdata.userdata && 'admin' === this.userdata.password) {
      this.router.navigateByUrl('/foodcategory')
    } else {
      alert(' invalid Credintioals !')
    }
  }

  onsignin(item: any) {


  }
}
