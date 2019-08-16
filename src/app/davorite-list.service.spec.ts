import { TestBed } from '@angular/core/testing';

import { DavoriteListService } from './davorite-list.service';

describe('DavoriteListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DavoriteListService = TestBed.get(DavoriteListService);
    expect(service).toBeTruthy();
  });
});
