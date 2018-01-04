import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  param;
  goals: any;
  text;

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService, private http: HttpClient) {
    this.route.params.subscribe(res => this.param = res.id);
    this.getDemoText();
  }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
  }

  sendMeHome() {
    this.router.navigate(['']);
  }

  getDemoText() {
    this.http.get('http://localhost:8080/TestController', {responseType: 'text'}).subscribe(
      data => { alert(data); this.text = data; },
      err => console.error(err),
      () => console.log('done')
      );
  }
}
