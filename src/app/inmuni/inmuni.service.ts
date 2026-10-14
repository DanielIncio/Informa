import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { CrudService }  from '../core/crud.service';
import { Inmuni } from './inmuni.model';

@Injectable({ providedIn: 'root' })
export class InmuniService extends CrudService<Inmuni, string> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:9999/api/inmuni');
  }
}