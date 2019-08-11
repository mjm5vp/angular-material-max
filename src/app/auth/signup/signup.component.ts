import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import * as moment from 'moment'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  maxDate: moment.Moment

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.maxDate = moment().subtract(18, 'years')
  }

  onSubmit(form: NgForm) {
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password
    })
  }
}
