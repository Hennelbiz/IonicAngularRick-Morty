import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { AngularDelegate } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileid: string;
  informationProfile;
  informationLocation: string;

  constructor(private activatedRoute: ActivatedRoute,
              private httpClient: HttpClient) { }

  ngOnInit() {
    this.profileid = this.activatedRoute.snapshot.paramMap.get('id')
    /*this.httpClient.get('https://rickandmortyapi.com/api/character/' + this.profileid)
    .subscribe(res => 
    {
      //console.log(res);
      this.informationProfile = res;
      console.log(this.informationProfile)
    })*/

    this.httpClient.get<any>('https://rickandmortyapi.com/api/character/' + this.profileid)
    .subscribe(res => 
    {
      //console.log(res);
      this.informationProfile = res;
      //console.log(this.informationProfile)
      this.informationLocation = res.location.url.substring(41)
      //console.log(this.informationLocation)
      /*this.informationLocation = res.location.url
      this.informationLocation1 = res.location.url
      this.informationLocation2 = res.location.url.substring(41)
      this.informationLocation = this.informationLocation.substring(41)      
      console.log('Prueba- ' + this.informationLocation)      
      console.log('Prueba- ' + this.informationLocation1.substring(41))
      console.log('Prueba- ' + this.informationLocation2)*/
    })

    /*this.httpClient.get<any>('https://rickandmortyapi.com/api/location/' + this.informationLocation)
    .subscribe(res => 
    {
      console.log(res);
    })*/
  }

}