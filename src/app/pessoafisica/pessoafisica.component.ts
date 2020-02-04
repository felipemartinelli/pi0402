import { Component, OnInit } from '@angular/core';
import { InfoUsuario } from '../model/InfoUsuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-pessoafisica',
  templateUrl: './pessoafisica.component.html',
  styleUrls: ['./pessoafisica.component.css']
})
export class PessoafisicaComponent implements OnInit {

  public infousuario: InfoUsuario = new InfoUsuario();

  private nomeCompleto: string;
  private cpf: string;
  private endereco: string;
  private telefone: string;
  private setor: string;
  private cargo: string;
  private formacaoAcademica: string;
  private formacaoProfissional: string;
  private senha: string;
  private senhaRepetida: string;

  constructor(private srv: UsuarioService) { }

  ngOnInit() {
  }


  private alterar(){

  }

  private inserir(){

    this.infousuario.cpf = this.cpf;
    this.infousuario.cargo = this.cargo;
    this.infousuario.endereco = this.endereco;
    this.infousuario.infoAcademica = this.formacaoAcademica;
    this.infousuario.infoProfissional = this.formacaoProfissional;
    this.infousuario.setor = this.setor;

    console.log(this.infousuario);


    this.srv.insereInfoUsuario(this.infousuario).subscribe(
      res =>{
        alert("Cadastro efetuado com sucesso!");
      },
      err=>{
        console.log(err);
        alert("Erro ao inserir");
      }
    )
  }


}
