import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchCharacterPage } from './search-character.page';

const routes: Routes = [
  {
    path: '',
    component: SearchCharacterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchCharacterPageRoutingModule {}
