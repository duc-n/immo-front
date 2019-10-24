import { TestBed } from '@angular/core/testing';

import { AcquereurService } from './acquereur.service';

describe('AcquereurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcquereurService = TestBed.get(AcquereurService);
    expect(service).toBeTruthy();
  });
});
