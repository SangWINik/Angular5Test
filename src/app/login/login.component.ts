import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  login() {
    alert('hi');
    const header = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.http.post('/LoginController', 'username=' + this.username + '&password=' + this.password, {headers: header}).subscribe(
      res => this.router.navigate(['']),
      err => {
        alert(err.message);
      }
    );
  }
}
