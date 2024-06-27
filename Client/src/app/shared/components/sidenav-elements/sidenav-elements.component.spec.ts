import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavElementsComponent } from './sidenav-elements.component';

describe('SidenavElementsComponent', () => {
  let component: SidenavElementsComponent;
  let fixture: ComponentFixture<SidenavElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavElementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
