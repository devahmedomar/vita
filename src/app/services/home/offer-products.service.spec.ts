import { TestBed } from '@angular/core/testing';

import { OfferProductsService } from './offer-products.service';

describe('OfferProductsService', () => {
  let service: OfferProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
