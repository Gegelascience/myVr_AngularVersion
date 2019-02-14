import { TestBed } from '@angular/core/testing';

import { CustomAframeComponentsService } from './custom-aframe-components.service';

describe('CustomAframeComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomAframeComponentsService = TestBed.get(CustomAframeComponentsService);
    expect(service).toBeTruthy();
  });
});
