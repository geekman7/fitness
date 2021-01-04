import { Component, Input, OnInit, ViewChild } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private authService: AuthService){
    
  }

  ngOnInit(){
      this.authService.initAuthListener();
  }

  
}
