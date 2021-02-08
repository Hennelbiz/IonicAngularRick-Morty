import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchCharacterPage } from './search-character.page';

describe('SearchCharacterPage', () => {
  let component: SearchCharacterPage;
  let fixture: ComponentFixture<SearchCharacterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCharacterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchCharacterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
