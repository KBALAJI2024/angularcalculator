import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPageIndentRequestComponent } from './list-page-indent-request/list-page-indent-request.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArrayeditComponent } from './arrayedit/arrayedit.component';
import { FistPageComponent } from './weatherApp/fist-page/fist-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SkillListComponent } from './manageskills/skill-list/skill-list.component';
import { ArratlistComponent } from './reactiveform/arratlist/arratlist.component';
import { CalComponent } from './calculator/cal/cal.component';


@NgModule({
  declarations: [
    AppComponent,
    ListPageIndentRequestComponent,
    ArrayeditComponent,
    FistPageComponent,
    SkillListComponent,
    ArratlistComponent,
    CalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
