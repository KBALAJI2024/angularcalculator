import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageIndentRequestComponent } from './list-page-indent-request/list-page-indent-request.component';
import { ArrayeditComponent } from './arrayedit/arrayedit.component';
import { FistPageComponent } from './weatherApp/fist-page/fist-page.component';
import { SkillListComponent } from './manageskills/skill-list/skill-list.component';
import { ArratlistComponent } from './reactiveform/arratlist/arratlist.component';
import { CalComponent } from './calculator/cal/cal.component';

const routes: Routes = [
  {path : 'ListPageIndentRequest' , component : ListPageIndentRequestComponent},
  {path : 'arrayedit' , component : ArrayeditComponent },
  {path : 'weatherapp' ,component : FistPageComponent },
  {path : '' , redirectTo : '/ListPageIndentRequest', pathMatch:'full'},
  {path : 'skillList' ,component : SkillListComponent},
  {path : 'arraylist' , component : ArratlistComponent},
  {path : 'calculator', component : CalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
