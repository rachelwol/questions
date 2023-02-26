import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { ManagementTasksComponent } from './job-search/management-tasks/management-tasks.component';
import { AlgorithmsPuzzlesComponent } from './job-search/tasks/algorithms-puzzles/algorithms-puzzles.component';
import { InterviewQuesstionsComponent } from './job-search/tasks/interview-quesstions/interview-quesstions.component';
import { LearnComponent } from './job-search/tasks/learn/learn.component';
import { SendCVComponent } from './job-search/tasks/send-cv/send-cv.component';
import { TasksComponent } from './job-search/tasks/tasks.component';
import { TrackingComponent } from './job-search/tracking/tracking.component';
import { WritingCodeComponent } from './job-search/writing-code/writing-code.component';
import { ForgotPasswordComponent } from './login-folder/forgot-password/forgot-password.component';
import { LoginComponent } from './login-folder/login/login.component';
import { RegisterComponent } from './login-folder/register/register.component';
import { MainNavigateComponent } from './main-navigate/main-navigate.component';
import { InterviweTypeFormComponent } from './mock-interview/interviwe-type-form/interviwe-type-form.component';
import { PersonalInterviewComponent } from './mock-interview/personal-interview/personal-interview.component';
import { SubjectsFormComponent } from './mock-interview/subjects-form/subjects-form.component';
import { QuestionComponent } from './question/question.component';
import { GuardService } from './services/guard.service';

const routes: Routes = [
  { path: 'questions/:type', component: QuestionComponent,
  //  canActivate: [AuthGuard] 
  },
  { path: 'tasks', component: TasksComponent,
  //  canActivate: [AuthGuard] 
  },
  { path: 'tasks/algorithm', component: AlgorithmsPuzzlesComponent,
  //  canActivate: [AuthGuard] 
  },
  { path: 'tasks/interview', component: MainNavigateComponent,
  //  canActivate: [AuthGuard] 
  },
  { path: 'tasks/cv', component: SendCVComponent,
  //  canActivate: [AuthGuard] 
  },
  { path: 'tasks/learn', component: LearnComponent,
  //  canActivate: [AuthGuard] 
  },
  { path: 'tasks/code', component: WritingCodeComponent,
  //  canActivate: [AuthGuard] 
  },
  { path: 'management', component: ManagementTasksComponent,
  //  canActivate: [AuthGuard] 
  },
  { path: 'tracking', component: TrackingComponent,
  //  canActivate: [AuthGuard] 
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '', component: HomeComponent,
  //  canActivate: [AuthGuard] 
  },
  { path: 'home', component: HomeComponent, canActivate: [GuardService]},
  { path: 'subjects-form', component: SubjectsFormComponent },
  { path: 'personal-interview', component: PersonalInterviewComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
