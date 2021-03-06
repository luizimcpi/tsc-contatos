"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InMemoryDataService {
    createDb() {
        let contatos = [
            { id: 1, nome: 'Luiz Henrique', email: 'luiz.hse@hotmail.com', telefone: '(13) 3273-6667' },
            { id: 2, nome: 'Tania', email: 'tania@uol.com.br', telefone: '(00) 0000-0000' },
            { id: 3, nome: 'Gabriela', email: 'gabi@gmail.com', telefone: '(00) 0000-0000' },
            { id: 4, nome: 'Zeca', email: 'jaevange6@hotmail.com', telefone: '(00) 0000-0000' },
        ];
        return { contatos };
    }
}
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map