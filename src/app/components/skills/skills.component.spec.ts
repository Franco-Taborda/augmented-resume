import { CommonModule } from '@angular/common';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SharedModule } from 'shared/shared.module';
import { SKILLS_CATEGORY_MOCK } from 'utils/mocks/skill.mock';

import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillsComponent],
      imports: [CommonModule, SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    component.skillsCategories = SKILLS_CATEGORY_MOCK;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a title', () => {
    const title = debugElement.query(By.css('[data-test="title"]'));
    expect(title).toBeTruthy();
  });

  it('should show 3 category sections', () => {
    const sections = debugElement.queryAll(By.css('[data-test="category-section"]'));
    expect(sections).toHaveSize(3);
  });

  it('should show an expandable element for each category', () => {
    const expandableCategory = debugElement.queryAll(By.css('[data-test="expandable-category"]'));
    expect(expandableCategory).toHaveSize(component.skillsCategories.length);
  });

  it('should show the amount of elements inside the category', () => {
    const expandableCategory = debugElement.queryAll(By.css('[data-test="expandable-category"]'));

    expandableCategory.forEach((category) => {
      const skillsCounter = category.query(By.css('[data-test="category-counter"]'));
      const skills = category.queryAll(By.css('[data-test="skill-card"]'));
      expect(parseInt(skillsCounter.nativeElement.textContent)).toEqual(skills.length);
    });
  });

  it('should display each skill name', () => {
    const skillCards = debugElement.queryAll(By.css('[data-test="skill-card"]'));

    skillCards.forEach((skill) => {
      const name = skill.query(By.css('[data-test="skill-name"]'));

      expect(name).toBeTruthy();
      expect(name.nativeElement.textContent).toBeTruthy();
    });
  });

  it('should display each category name', () => {
    const skillCards = debugElement.queryAll(By.css('[data-test="skill-card"]'));

    skillCards.forEach((skill) => {
      const categoryName = skill.query(By.css('[data-test="skill-category"]'));

      expect(categoryName).toBeTruthy();
      expect(categoryName.nativeElement.textContent).toBeTruthy();
    });
  });

  it('should display each skill description', () => {
    const skillCards = debugElement.queryAll(By.css('[data-test="skill-card"]'));

    skillCards.forEach((skill) => {
      const description = skill.query(By.css('[data-test="skill-description"]'));

      expect(description).toBeTruthy();
      expect(description.nativeElement.textContent).toBeTruthy();
    });
  });

  it('should display a button to see the certificates', () => {
    const button = debugElement.queryAll(By.css('[data-test="skill-certificate-button"]'));
    expect(button).toBeTruthy();
  });

  it('should display one or more skill certificates', () => {
    component.showCertificates(SKILLS_CATEGORY_MOCK[0].skills[0]);
    fixture.detectChanges();

    const skillCertificates = document.querySelectorAll('[data-test="skill-certificate"]');

    expect(skillCertificates.length).toBeTruthy();

    skillCertificates.forEach((certificate) => {
      expect(certificate.getAttribute('href')).toBeTruthy();
      expect(certificate.textContent).toBeTruthy();
    });
  });
});
