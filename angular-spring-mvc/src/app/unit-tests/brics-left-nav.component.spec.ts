import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BricsLeftNavComponent } from '../components/common/brics-left-nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NavConfig } from '../models/forum/forum-nav-config';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

describe('BricsLeftNavComponent', () => {
  let component: BricsLeftNavComponent;
  let fixture: ComponentFixture<BricsLeftNavComponent>;
  
  const mockNavConfig: NavConfig = {
    items: [
      {
        label: 'Test Item',
        icon: 'test',
        route: '/test'
      },
      {
        label: 'Parent Item',
        icon: 'folder',
        children: [
          {
            label: 'Child Item',
            route: '/child'
          }
        ]
      }
    ]
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        MatListModule,
        MatIconModule,
        MatExpansionModule,
        BricsLeftNavComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(BricsLeftNavComponent);
    component = fixture.componentInstance;
    component.config = mockNavConfig;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should toggle expandedSection when toggle is called', () => {
    fixture.detectChanges();
    const sectionLabel = 'Parent Item';
    expect(component.expandedSection).toBeNull();
    component.toggle(sectionLabel);
    expect(component.expandedSection).toBe(sectionLabel);
    component.toggle(sectionLabel);
    expect(component.expandedSection).toBeNull();
  });

  it('should render all navigation items', fakeAsync(() => {
    fixture.detectChanges();
    tick(); // Wait for async operations
    fixture.detectChanges(); // Trigger another change detection

    // Try different selectors to find the navigation items
    const listItems = fixture.debugElement.queryAll(By.css('.mat-mdc-list-item, mat-expansion-panel'));
    
    // Log the actual DOM for debugging
    console.log('Rendered HTML:', fixture.debugElement.nativeElement.innerHTML);
    
    expect(listItems.length).toBe(mockNavConfig.items.length);
    
    // Additional checks to verify the content
    const labels = fixture.debugElement.queryAll(By.css('.mat-mdc-list-item-title'));
    expect(labels[0]?.nativeElement.textContent).toContain('Test Item');
  }));
});
