import { RouterModule, Routes } from '@angular/router';
import { AddPessoaComponent } from './add-pessoa/add-pessoa.component';
import { ListPessoaComponent } from './list-pessoa/list-pessoa.component';
import { EditPessoaComponent } from './edit-pessoa/edit-pessoa.component';

const routes: Routes = [
    { path: 'add-pessoa', component: AddPessoaComponent },
    { path: 'list-pessoa', component: ListPessoaComponent },
    { path: 'edit-pessoa', component: EditPessoaComponent },
    {path : '', component : ListPessoaComponent}
  ];
  
  export const routing = RouterModule.forRoot(routes);