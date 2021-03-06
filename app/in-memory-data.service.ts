import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Contato } from './contatos/contato.model';

export class InMemoryDataService implements InMemoryDbService {

    createDb(): {} {
        let contatos: Contato[] = [
            {id: 1, nome: 'Luiz Henrique', email: 'luiz.hse@hotmail.com', telefone: '(13) 3273-6667'},
            {id: 2, nome: 'Tania', email: 'tania@uol.com.br', telefone: '(00) 0000-0000'},
            {id: 3, nome: 'Gabriela', email: 'gabi@gmail.com', telefone: '(00) 0000-0000'},
            {id: 4, nome: 'Zeca', email: 'jaevange6@hotmail.com', telefone: '(00) 0000-0000'},
        ];

        return {contatos};
    }

  
}