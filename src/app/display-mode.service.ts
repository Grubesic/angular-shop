import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DisplayModeService {

  private isCompact: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentCompactStatus: Observable<boolean> = this.isCompact.asObservable();

  changeCompactStatus(isCompact: boolean) {
    this.isCompact.next(isCompact);
  }
}
