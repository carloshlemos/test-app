import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PessoaService } from '../service/pessoa.service';

@Component({
  selector: 'app-add-pessoa',
  templateUrl: './add-pessoa.component.html'
})
export class AddPessoaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private router: Router, 
              private pessoaService: PessoaService) { }

  addForm: FormGroup;              


  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      nome: ['', Validators.required]
    });
  }

  onSubmit() {
    this.pessoaService.createPessoa(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-pessoa']);
      });
  }

}
