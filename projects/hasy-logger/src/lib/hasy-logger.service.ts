import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HasyLoggerService {

  constructor() { }

  warningLogger(message: string){
    console.warn(message);
  }

  errorLogger(message: string){
    console.error(message);
  }

  infoLogger(message: string){
    console.info(message);
  }
}
