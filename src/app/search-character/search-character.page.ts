import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-search-character',
  templateUrl: './search-character.page.html',
  styleUrls: ['./search-character.page.scss'],
})
export class SearchCharacterPage implements OnInit {

  resultados = []
  informacion = []

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  buscarPersonaje(nombre, especie, estado, genero)
  {
    //onsole.log(nombre, especie, estado, genero);
    /*console.log('Prueba ' + nombre.value);
    console.log('Prueba1 ' + especie.value);
    console.log('Prueba2 ' + estado.value);
    console.log('Prueba3 ' + genero.value);*/

    var prueba = '?';
    const apiConsulta = 'https://rickandmortyapi.com/api/character';
    
    if(Object.entries(nombre.value).length != 0)
    {
      prueba = prueba + 'name=' + nombre.value;
    }

    if(Object.entries(especie.value).length != 0)
    {
      if(!prueba.endsWith('?'))
      {
        prueba = prueba + '&' + 'species=' + especie.value;
      }
      else
      {
        prueba = prueba + 'species=' + especie.value;        
      }
    }

    if(Object.entries(estado).length != 0 && estado.value != undefined)
    {
      if(!prueba.endsWith('?'))
      {
        prueba = prueba + '&' + 'status=' + estado.value;
      }
      else
      {
        prueba = prueba + 'status=' + estado.value;
      }
    }

    if(Object.entries(genero).length != 0 && genero.value != undefined)
    {
      if(!prueba.endsWith('?'))
      {
        prueba = prueba + '&' + 'gender=' + genero.value;
      }
      else
      {
        prueba = prueba + 'gender=' + genero.value;
      }
    }

    if(prueba.endsWith('?'))
    {
      this.httpClient.get<any>(apiConsulta)
      .subscribe( resultado => 
        {
          this.resultados = resultado.results;
          this.informacion = resultado.info.count;
        });
    }
    else
    {
      var api = apiConsulta + '/' + prueba;
      this.httpClient.get<any>(api)
      .subscribe( resultado => 
        {
          this.resultados = resultado.results;
          this.informacion = resultado.info.count;
        });
    }

  }
}
