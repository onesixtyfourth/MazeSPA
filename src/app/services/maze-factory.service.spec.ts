import { TestBed } from '@angular/core/testing';

import { MazeFactoryService } from './maze-factory.service';

describe('MazeFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MazeFactoryService = TestBed.get(MazeFactoryService);
    expect(service).toBeTruthy();
  });
});
