import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../model/pessoa.model';
import { Router } from '@angular/router';
import { PessoaService } from '../service/pessoa.service';

@Component({
  selector: 'app-list-pessoa',
  templateUrl: './list-pessoa.component.html'
})
export class ListPessoaComponent implements OnInit {

  pessoas: Pessoa[];

  constructor(private router: Router, private pessoaService: PessoaService) { }

  ngOnInit() {
    this.pessoaService.getPessoas()
    .subscribe( data => {
      this.pessoas = data;
    });    
  }

  deletePessoa(pessoa: Pessoa): void {
    this.pessoaService.deletePessoa(pessoa.id)
      .subscribe( data => {
        this.pessoas = this.pessoas.filter(p => p !== pessoa);
      })
  };

  editPessoa(pessoa: Pessoa): void {
    localStorage.removeItem("editPessoaId");
    localStorage.setItem("editPessoaId", pessoa.id.toString());
    this.router.navigate(['edit-pessoa']);
  };

  addPessoa(): void {
    this.router.navigate(['add-pessoa']);
  };  

}
