import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphbarHorizontalComponent } from './graphbar-horizontal.component';

describe('GraphbarHorizontalComponent', () => {
  let component: GraphbarHorizontalComponent;
  let fixture: ComponentFixture<GraphbarHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphbarHorizontalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphbarHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
