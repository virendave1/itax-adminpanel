import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router,private activatedRoute: ActivatedRoute) {

   }
  ngOnInit(): void {
  }

  refresh(): void {
    window. location. reload();
    }
}