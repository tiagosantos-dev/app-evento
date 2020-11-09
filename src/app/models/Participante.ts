export default class Participante {
    id: number;
    nome: string;
    cpf: string;
    email: string;
    celular: string;
    imagem: string;

    
    constructor(id: number, nome: string, cpf: string, email: string, celular: string, imagem: string) {
        this.id = id;
        this.nome = nome;
        this.cpf =cpf;
        this.email =email;
        this.celular = celular ;
        this.imagem = imagem;


    }

}