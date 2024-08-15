import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordpressComponent } from './wordpress.component';

describe('WordpressComponent', () => {
  let component: WordpressComponent;
  let fixture: ComponentFixture<WordpressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordpressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
