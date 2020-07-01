import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 model: any = {}
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(e, value)
  {
    e.preventDefault()
    console.log("gegegegegeg"+this.model.username)
  }



}
