import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupesViewsComponent } from './groupes-views.component';

describe('GroupesViewsComponent', () => {
  let component: GroupesViewsComponent;
  let fixture: ComponentFixture<GroupesViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupesViewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupesViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
