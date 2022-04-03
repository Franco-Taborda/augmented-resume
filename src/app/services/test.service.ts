import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TestService {
  constructor() {}

  sequencedItems(val: string): Observable<string> {
    return of(val).pipe(delay(300));
  }
}
