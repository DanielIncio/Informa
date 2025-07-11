import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { CrudService }  from '../core/crud.service';
import { Ccmtpt } from './ccmtpt.model';

@Injectable({ providedIn: 'root' })
export class CcmtptService extends CrudService<Ccmtpt, string> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:9999/api/ccmtpt');
  }
}
