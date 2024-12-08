import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HelloService } from '../services/hello.service';

describe('HelloService', () => {
  let service: HelloService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HelloService]
    });
    service = TestBed.inject(HelloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Add more tests for your HTTP calls if needed
  // Example:
  /*
  it('should fetch hello message', (done) => {
    service.getHello().subscribe(message => {
      expect(message).toBeDefined();
      done();
    });
  });
  */
});
