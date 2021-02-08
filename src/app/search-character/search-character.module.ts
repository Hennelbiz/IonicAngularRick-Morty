import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchCharacterPageRoutingModule } from './search-character-routing.module';

import { SearchCharacterPage } from './search-character.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchCharacterPageRoutingModule
  ],
  declarations: [SearchCharacterPage]
})
export class SearchCharacterPageModule {}
