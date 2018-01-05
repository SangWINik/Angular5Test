import { Component } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello';

  constructor(private cookie: CookieService, private router: Router) {
  }

  logout() {
    alert(Object.keys(this.cookie.getAll()));
    this.cookie.delete('userId');
    this.cookie.delete('authToken');
    this.router.navigate(['login']);
  }
}
