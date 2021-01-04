import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subject } from 'rxjs';
import { AuthData } from '../model/auth-data.model';
import { User } from '../model/user.model';
import { TrainingService } from './training.service';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;
  private isAuthenticated = false;
  authChange = new Subject<boolean>();

  constructor(private router:Router,
    private afAuth: AngularFireAuth,
    private uiService: UiService,
    private trainingService: TrainingService) { }  

  registerUser(authData: AuthData){
    this.uiService.loadingStateChanged.next(true);
    this.afAuth.auth.createUserWithEmailAndPassword(authData.email,authData.password)
    .then(
      result => {
        this.uiService.loadingStateChanged.next(false);
      }
       
    ).catch(error => {
      this.uiService.loadingStateChanged.next(false);
      this.uiService.showSnackbar(error.message, null, { duration: 3000 });
      

    });

  }

  

  initAuthListener() {
    this.afAuth.authState.subscribe(
      user => {
        if (user) {
          this.isAuthenticated = true;
          this.authChange.next(true);
          this.router.navigate(['/training']);
        } else {

          this.trainingService.cancelSubscription();
          this.isAuthenticated = false;
          this.authChange.next(false);
          this.router.navigate(['/login']);
        }
      }
    );
  }

  login(authData: AuthData){
    this.uiService.loadingStateChanged.next(true);
    this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password).then(
     result => {
      this.uiService.loadingStateChanged.next(false);
     }
    ).catch(error => {
      this.uiService.loadingStateChanged.next(false);
      this.uiService.showSnackbar(error.message, null, { duration: 3000 });
    });
   
  }

  logout(){
    this.trainingService.cancelSubscription();
    this.afAuth.auth.signOut();
    this.isAuthenticated = false;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  

  isAuth(){
    return this.isAuthenticated;
  }

}
