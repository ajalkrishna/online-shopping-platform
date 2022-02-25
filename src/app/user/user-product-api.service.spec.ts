import { TestBed } from '@angular/core/testing';

import { UserProductApiService } from './user-product-api.service';

describe('UserProductApiService', () => {
  let service: UserProductApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserProductApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
