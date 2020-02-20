import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplayimgprofileComponent } from './diplayimgprofile.component';

describe('DiplayimgprofileComponent', () => {
  let component: DiplayimgprofileComponent;
  let fixture: ComponentFixture<DiplayimgprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiplayimgprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplayimgprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
