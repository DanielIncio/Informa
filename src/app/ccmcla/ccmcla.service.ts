import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { CrudService }  from '../core/crud.service';
import { Ccmcla } from './ccmcla.model';

@Injectable({ providedIn: 'root' })
export class CcmclaService extends CrudService<Ccmcla, string> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:9999/api/ccmcla');
  }
}
