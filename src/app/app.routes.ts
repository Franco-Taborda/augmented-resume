import { Routes } from '@angular/router';
import { ResumeComponent } from 'components/resume/resume.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DeviceGuard } from './_guards/device-guard.can-load.guard';

export const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('mobile/mobile.module').then((m) => m.MobileModule),
  //   canLoad: [DeviceGuard],
  // },
  // {
  //   path: 'home-full',
  //   loadChildren: () => import('desktop/desktop.module').then((m) => m.DesktopModule),
  //   canLoad: [DeviceGuard],
  // },
  // {
  //   path: 'not-found',
  //   component: NotFoundComponent,
  // },
  {
    path: '',
    pathMatch: 'full',
    component: ResumeComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
