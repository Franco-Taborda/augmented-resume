import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SidenavComponent } from 'components/sidenav/sidenav.component';

import { ResumeComponent } from './resume.component';

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ResumeComponent, SidenavComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ResumeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a sidenav component', () => {
    const sidenavDebugElem = fixture.debugElement.query(By.directive(SidenavComponent));
    expect(sidenavDebugElem).toBeTruthy();
  });

  it('#onItemClick should close sidenav', () => {
    const sidenavDebugElem = fixture.debugElement.query(By.directive(SidenavComponent)).componentInstance;
    const closeSidenavSpy = spyOn(sidenavDebugElem, 'closeSidenav');
    component.onItemClick('testSelector');

    expect(closeSidenavSpy).toHaveBeenCalled();
  });
});
