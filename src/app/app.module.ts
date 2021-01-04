import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { CurrentComponent } from './training/current/current.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PastTrainingComponent } from './training/past-training/past-training.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { HeaderComponent } from './header/header.component';
import { StopTrainingComponent } from './training/current/stop-training.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { TrainingService } from './services/training.service';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UiService } from './services/ui.service';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrentComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    WelcomeComponent,
    SidenavListComponent,
    HeaderComponent,
    StopTrainingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule

  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    AuthService,
    AuthGuard,
    TrainingService,
    UiService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
