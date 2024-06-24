import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(message: any): void {
    const timestamp = new Date().toLocaleString();
    console.log(`[${timestamp}] LOG:`, message);
  }

  error(error: any): void {
    const timestamp = new Date().toLocaleString();
    console.error(`[${timestamp}] ERROR:`, error);
  }

  warn(message: any): void {
    const timestamp = new Date().toLocaleString();
    console.warn(`[${timestamp}] WARN:`, message);
  }
}
