import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { CrudService }  from '../core/crud.service';
import { Ccmtip } from './ccmtip.model';

@Injectable({ providedIn: 'root' })
export class CcmtipService extends CrudService<Ccmtip, string> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:9999/api/ccmtip');
  }
}