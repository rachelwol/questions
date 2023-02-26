import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { HttpClientModule } from '@angular/common/http';
import { CvLiksComponent } from './cv-liks/cv-liks.component';
import { MainNavigateComponent } from './main-navigate/main-navigate.component';
import { UserDetailsComponent } from './ex1/user-details/user-details.component';
import { TasksComponent } from './job-search/tasks/tasks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrackingComponent } from './job-search/tracking/tracking.component';
import { ManagementTasksComponent } from './job-search/management-tasks/management-tasks.component';
import { AlgorithmsPuzzlesComponent } from './job-search/tasks/algorithms-puzzles/algorithms-puzzles.component';
import { InterviewQuesstionsComponent } from './job-search/tasks/interview-quesstions/interview-quesstions.component';
import { SendCVComponent } from './job-search/tasks/send-cv/send-cv.component';
import { WritingCodeComponent } from './job-search/writing-code/writing-code.component';
import { LearnComponent } from './job-search/tasks/learn/learn.component';
import { NavigateComponent } from './navigate/navigate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login-folder/login/login.component';
import { RegisterComponent } from './login-folder/register/register.component';
import { ForgotPasswordComponent } from './login-folder/forgot-password/forgot-password.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SubjectsFormComponent } from './mock-interview/subjects-form/subjects-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { InterviweTypeFormComponent } from './mock-interview/interviwe-type-form/interviwe-type-form.component';
import { PersonalInterviewComponent } from './mock-interview/personal-interview/personal-interview.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    CvLiksComponent,
    MainNavigateComponent,
    UserDetailsComponent,
    TasksComponent,
    TrackingComponent,
    ManagementTasksComponent,
    AlgorithmsPuzzlesComponent,
    InterviewQuesstionsComponent,
    SendCVComponent,
    LearnComponent,
    WritingCodeComponent,
    NavigateComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ForgotPasswordComponent,
    SubjectsFormComponent,
    InterviweTypeFormComponent,
    PersonalInterviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatIconModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
