import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ClaseLogin } from './clase-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  constructor(private httpclient: HttpClient) { }

  ngOnInit() {
  }

  loginPage(usuario, contraseña)
  {
    var headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");

    console.log(usuario.value, contraseña.value);
    var json = new ClaseLogin();
    json.Usuario = usuario;
    json.Password = contraseña;
    //var valor = JSON.stringify(json);

    this.httpclient.post<boolean>('http://quod.xyz/bizmarck/api/ejemplo/login', JSON.stringify(json), {headers})
    .subscribe( resultado => 
      {
        console.log(resultado);
      });
  }

}
