import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

 @Output() sidenavToggle =  new EventEmitter<void>();
 authSub: Subscription;
 isAuth: boolean;
 

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authSub =  this.authService.authChange.subscribe(
        authStatus => {
            this.isAuth = authStatus;
        }
    );
  }
  
  ngOnDestroy(){
    this.authSub.unsubscribe();
  }

  onToggleSidenav(){
    this.sidenavToggle.emit();
  }

  onLogout(){
    this.authService.logout();
  }

}
