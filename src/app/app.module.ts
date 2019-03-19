import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddPessoaComponent } from './add-pessoa/add-pessoa.component';
import { EditPessoaComponent } from './edit-pessoa/edit-pessoa.component';
import { ListPessoaComponent } from './list-pessoa/list-pessoa.component';

import { routing } from "./app.routing";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { PessoaService } from './service/pessoa.service';

@NgModule({
  declarations: [
    AppComponent,
    AddPessoaComponent,
    EditPessoaComponent,
    ListPessoaComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
