import { TestBed } from '@angular/core/testing';

import { ProductsService } from './productservice.service';

describe('ProductserviceService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
