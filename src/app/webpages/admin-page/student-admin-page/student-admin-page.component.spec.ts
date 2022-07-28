import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAdminPageComponent } from './student-admin-page.component';

describe('StudentAdminPageComponent', () => {
  let component: StudentAdminPageComponent;
  let fixture: ComponentFixture<StudentAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAdminPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
