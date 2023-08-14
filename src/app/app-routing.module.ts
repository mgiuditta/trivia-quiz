import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "@core/components/home/home.component";
import {quizResultGuard} from "@guards/quiz-result.guard";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'result',
    canActivate: [quizResultGuard],
    loadChildren: () => import('./result/result.module').then(m => m.ResultModule),
  },
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
