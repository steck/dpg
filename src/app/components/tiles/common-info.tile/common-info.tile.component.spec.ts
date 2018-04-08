import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonInfo.TileComponent } from './common-info.tile.component';

describe('CommonInfo.TileComponent', () => {
  let component: CommonInfo.TileComponent;
  let fixture: ComponentFixture<CommonInfo.TileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonInfo.TileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonInfo.TileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
