import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchlistsComponent } from './batchlists.component';

describe('BatchlistsComponent', () => {
  let component: BatchlistsComponent;
  let fixture: ComponentFixture<BatchlistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BatchlistsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BatchlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
