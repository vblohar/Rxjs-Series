import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { AsyncAwaitComponent } from './async-await/async-await.component';

const routes: Routes = [
  {path: 'promise', component: PromiseComponent},
  {path: '', component: ObservableComponent},
  {path: 'async-await', component: AsyncAwaitComponent},
  {path: 'observable', component: ObservableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
