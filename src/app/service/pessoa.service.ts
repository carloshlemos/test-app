import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Pessoa } from '../model/pessoa.model';

@Injectable()
export class PessoaService {

    baseUrl: string = 'http://localhost:8080/api/pessoas';

    constructor(private http: HttpClient) { }

    getPessoas() {
        return this.http.get<Pessoa[]>(this.baseUrl);
    }

    getPessoaById(id: number) {
        return this.http.get<Pessoa>(this.baseUrl + '/' + id);
    }

    createPessoa(pessoa: Pessoa) {
        return this.http.post(this.baseUrl + '/create', pessoa);
    }

    updatePessoa(pessoa: Pessoa) {
        return this.http.put(this.baseUrl + '/' + pessoa.id, pessoa);
    }

    deletePessoa(id: number) {
        return this.http.delete(this.baseUrl + '/' + id);
    }

}