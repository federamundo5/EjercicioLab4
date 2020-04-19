import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaProductosMaterialsComponent } from './tabla-productos-materials.component';

describe('TablaProductosMaterialsComponent', () => {
  let component: TablaProductosMaterialsComponent;
  let fixture: ComponentFixture<TablaProductosMaterialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaProductosMaterialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaProductosMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
