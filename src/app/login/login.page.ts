import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:string;
  password:string;

  constructor(private httpclient: HttpClient,
              private router: Router,
              private alertController: AlertController) { }

  ngOnInit() {
  }

  loginPage(/*usuario, contraseña*/)
  {
    var headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");

    //console.log(usuario.value, contraseña.value);
    //console.log(this.password);
    var json = 
    {
      /*Usuario: usuario.value,
      Password: contraseña.value,*/
      Usuario: this.usuario,
      Password: this.password,
    }
    //var valor = JSON.stringify(json);
    //console.log(json);

    this.httpclient.post/*<boolean>*/('http://quod.xyz/bizmarck/api/ejemplo/login', JSON.stringify(json)) //, {headers}
    .subscribe( resultado => 
      {
        if(resultado)
        {
          //console.log('No putito, dasdasdasd');
          this.router.navigate(['/userslist']);
          this.usuario = null;
          this.password = null;
        }
        else
        {
          //console.log('putito');
          this.alerta();
        }
      });
  }

  async alerta()
  {
    const alert = await this.alertController.create({
      header: 'Alerta putito',
      subHeader: 'Sin Acceso',
      message: 'Eres putito',
      buttons: ['Ok']
    });

    await alert.present();
  }

}
