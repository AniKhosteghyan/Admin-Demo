import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
@Component({
 selector: 'app-user',
 templateUrl: './user.component.html',
 styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

 constructor(private route: ActivatedRoute) { 
   this.route.params.subscribe( params => console.log(params) );
 }
 ngOnInit() {
 }
}
