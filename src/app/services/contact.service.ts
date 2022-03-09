import { Injectable } from '@angular/core';
import { IContactInfo } from 'components/contact/model/contact';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContactInfoService {
  constructor() {}

  getSocialMediaLinks(): Observable<IContactInfo[]> {
    return of([
      {
        name: 'facebook',
        id: 'franco.taborda.9',
        link: 'https://www.facebook.com/franco.taborda.9',
      },
      {
        name: 'linkedin',
        id: 'francotaborda',
        link: 'https://www.linkedin.com/in/francotaborda',
      },
      {
        name: 'instagram',
        id: 'franco_xav',
        link: 'https://www.instagram.com/franco_xav',
      },
      {
        name: 'phone',
        id: '+5493517338937',
      },
      {
        name: 'email address',
        id: 'franco_x@outlook.com',
      },
    ] as IContactInfo[]);
  }
}
