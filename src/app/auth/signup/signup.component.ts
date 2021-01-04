import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from 'src/app/services/auth.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit,OnDestroy {
  maxDate;
  isLoading = false;
  LoadingSub: Subscription;

  constructor(private authService: AuthService,private uiService: UiService) { }

  ngOnInit(): void {
    this.LoadingSub = this.uiService.loadingStateChanged.subscribe(
      (result:boolean) => {
        this.isLoading = result;
      }
  );
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  ngOnDestroy(){
    this.LoadingSub.unsubscribe();
  }

  onSubmit(form: NgForm){
    this.authService.registerUser(
      {
      email: form.value.email,
      password: form.value.password
      }
    );
  }

}
