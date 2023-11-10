import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CookiesService {

  constructor() { }
  getCookie(key: string): string | null {
    return localStorage.getItem(key);
  }

  setCookie(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
}
