import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class CrudService<T, ID> {
  constructor(
    protected http: HttpClient,
    protected apiUrl: string
  ) {}

  list(): Observable<T[]> {
    return this.http.get<T[]>(this.apiUrl);
  }

  save(item: T): Observable<T> {
    return this.http.post<T>(this.apiUrl, item);
  }

  update(item: T): Observable<T> {
    return this.http.put<T>(this.apiUrl, item);
  }

  delete(id: ID): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}