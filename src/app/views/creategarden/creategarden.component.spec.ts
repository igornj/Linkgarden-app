import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGardenComponent } from './creategarden.component';

describe('GardensComponent', () => {
  let component: CreateGardenComponent;
  let fixture: ComponentFixture<CreateGardenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGardenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
