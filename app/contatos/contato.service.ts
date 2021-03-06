import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Contato } from './contato.model';
import { CONTATOS } from './contatos-mock';

@Injectable()
export class ContatoService {

    private contatosUrl: string = 'app/contatos';
    private headers: Headers = new Headers({'Content-Type': 'application/json'});

    constructor(
        private http: Http
    ){}

    getContatos(): Promise<Contato[]> {
        //return Promise.resolve(CONTATOS);
        return this.http.get(this.contatosUrl)
        .toPromise()
        .then(response => response.json().data as Contato[])
        .catch(this.handleError);
    }

    getContato(id: number): Promise<Contato> {
        return this.getContatoPorId(id);
    }

    create(contato: Contato): Promise<Contato> {
        return this.http
        .post(this.contatosUrl, JSON.stringify(contato), {headers: this.headers})
        .toPromise()
        .then((response: Response) => response.json().data as Contato) 
        .catch(this.handleError);
    }

    update(contato: Contato): Promise<Contato> {
        const url = `${this.contatosUrl}/${contato.id}`;
        return this.http
        .put(url, JSON.stringify(contato), {headers: this.headers})
        .toPromise()
        .then(() => contato as Contato) 
        .catch(this.handleError);
    }

    delete(contato: Contato): Promise<Contato> {
        const url = `${this.contatosUrl}/${contato.id}`;
        return this.http
        .delete(url, {headers: this.headers})
        .toPromise()
        .then(() => contato as Contato) 
        .catch(this.handleError);
    }

    private handleError(err: any) : Promise<any> {
        return Promise.reject(err.message || err);
    }

    private getContatoPorId(id: number) {
        return this.getContatos()
            .then((contatos: Contato[]) => {
                return contatos.find(contato => contato.id === id);
            });
    }

    //Simula uma conexão lenta
    getContatosSlowly(): Promise<Contato[]> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 3000);
        }).then(() => this.getContatos());
    }
}