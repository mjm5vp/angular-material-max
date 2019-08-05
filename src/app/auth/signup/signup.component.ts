import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import * as moment from 'moment'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  maxDate: moment.Moment

  constructor() {}

  ngOnInit() {
    this.maxDate = moment().subtract(18, 'years')
  }

  onSubmit(form: NgForm) {
    console.log(form)
  }
}
