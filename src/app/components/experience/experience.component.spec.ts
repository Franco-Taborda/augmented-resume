import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { ExperienceService } from 'services/experience.service';
import { SharedModule } from 'shared/shared.module';
import { EXPERIENCE_MOCK } from 'utils/mocks/experience.mock';

import { ExperienceComponent } from './experience.component';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;
  let debugElement: DebugElement;
  let experienceService: ExperienceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperienceComponent],
      imports: [SharedModule],
      providers: [ExperienceService],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ExperienceComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        experienceService = TestBed.inject(ExperienceService);

        spyOn(experienceService, 'getExperience').and.returnValue(of(EXPERIENCE_MOCK));
        fixture.detectChanges();
      });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a title', () => {
    const title = debugElement.query(By.css('[data-test="title"]'));
    expect(title).toBeTruthy();
  });

  it('should show experience cards', () => {
    const experienceCard = debugElement.queryAll(By.css('[data-test="experience-card"]'));
    expect(experienceCard).toHaveSize(EXPERIENCE_MOCK.length);
  });

  it('should show a company name', () => {
    const companyNameElem = debugElement.query(By.css('[data-test="company-name"]'));
    expect(companyNameElem?.nativeElement.textContent).toEqual(EXPERIENCE_MOCK[0].companyName);
  });

  it('should show a company url', () => {
    const firstElem = debugElement.query(By.css('[data-test="experience-card"]'));
    const companyUrlElem = firstElem.query(By.css('[data-test="company-url"]'));
    expect(companyUrlElem?.nativeElement.href).toEqual(EXPERIENCE_MOCK[0].companyUrl);
  });

  it('should show an working period', () => {
    const firstElem = debugElement.query(By.css('[data-test="experience-card"]'));
    const workingPeriodElem = firstElem.query(By.css('[data-test="working-period"]'));
    expect(workingPeriodElem).toBeTruthy();
  });

  it('should show a client name', () => {
    const firstElem = debugElement.query(By.css('[data-test="experience-card"]'));
    const clientNameElem = firstElem.query(By.css('[data-test="client-name"]'));
    expect(clientNameElem.nativeElement.textContent).toEqual(EXPERIENCE_MOCK[0].projects[0].clientName);
  });

  it('should show a project description', () => {
    const firstElem = debugElement.query(By.css('[data-test="experience-card"]'));
    const projectDescription = firstElem.query(By.css('[data-test="project-description"]'));
    const descriptionItem = firstElem.queryAll(By.css('[data-test="description-item"]'));
    expect(projectDescription).toBeTruthy();
    expect(descriptionItem).toHaveSize(EXPERIENCE_MOCK[0].projects[0].jobDescriptionItems.length);
  });

  it('should show a list of used technologies', () => {
    const firstElem = debugElement.query(By.css('[data-test="experience-card"]'));
    const usedTechnologiesElemList = firstElem.queryAll(By.css('[data-test="used-technology"]'));
    expect(usedTechnologiesElemList).toHaveSize(EXPERIENCE_MOCK[0].projects[0].usedTechnologies.length);
  });
});
