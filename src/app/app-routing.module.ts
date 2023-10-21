import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SetApiComponent } from './examples/set-api/set-api.component';
import { UpdateApiComponent } from './examples/update-api/update-api.component';
import { MutateApiComponent } from './examples/mutate-api/mutate-api.component';
import { ComputeApiComponent } from './examples/compute-api/compute-api.component';
import { ReplaceRxjsSubjectComponent } from './examples/replace-rxjs-subject/replace-rxjs-subject.component';

const routes: Routes = [
  {
    path: 'example-1',
    component: SetApiComponent,
  },
  {
    path: 'example-2',
    component: UpdateApiComponent,
  },
  {
    path: 'example-3',
    component: MutateApiComponent,
  },
  {
    path: 'example-4',
    component: ComputeApiComponent,
  },
  {
    path: 'example-5',
    component: ReplaceRxjsSubjectComponent,
  },
  {
    path: '',
    redirectTo: '/example-1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
