import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Id: any;

  constructor(private router: Router,private http: Http,private activatedRoute: ActivatedRoute) {    
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsId => {
      const ID = paramsId.id;
      this.Id = ID;   
    });
  }
  loginCredential(){  
         this.router.navigate(['/Admin/overview']);
  }
}
