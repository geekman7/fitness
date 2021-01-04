import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {
  isLoading = false;
  LoadingSub: Subscription;

  constructor(private authService: AuthService,private uiService: UiService) { }

  ngOnInit(): void {
      this.LoadingSub = this.uiService.loadingStateChanged.subscribe(
          (result:boolean) => {
            this.isLoading = result;
          }
      );
  }

  ngOnDestroy(){
    this.LoadingSub.unsubscribe();
  }

  onSubmit(form:NgForm){
    this.authService.login({
      email: form.value.email,
      password: form.value.password
    });
  }

}
