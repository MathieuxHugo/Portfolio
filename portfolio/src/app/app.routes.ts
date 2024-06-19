import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'home', component: HomeComponent },
    { path: 'project/:projectName', component: ProjectComponent },
  ];
