import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../model/pessoa.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PessoaService } from '../service/pessoa.service';
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-pessoa',
  templateUrl: './edit-pessoa.component.html'
})
export class EditPessoaComponent implements OnInit {

  pessoa: Pessoa;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private pessoaService: PessoaService) { }


  ngOnInit() {
    let pessoaId = localStorage.getItem("editPessoaId");
    if (!pessoaId) {
      alert("Invalid action.")
      this.router.navigate(['list-pessoa']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      nome: ['', Validators.required]
    });
    this.pessoaService.getPessoaById(+pessoaId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.pessoaService.updatePessoa(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-pessoa']);
        },
        error => {
          alert(error);
        });
  }  

}
