import { Component, OnInit } from '@angular/core';
import { interval, timer, merge, Observable } from 'rxjs';
import { map, tap, skipUntil, takeUntil } from 'rxjs/operators';

interface IDataStream {
  id: number;
  stream: number;
}

@Component({
  selector: 'app-rxjs-page',
  templateUrl: './rxjs-page.component.html',
  styleUrls: ['./rxjs-page.component.scss']
})
export class RxjsPageComponent implements OnInit {

  public list1: IDataStream[] = [];
  public list2: IDataStream[] = [];
  public list3: IDataStream[] = [];

  public idSum = 0;

  constructor() { }

  ngOnInit(): void { }

  public start(): void {
    this.list1 = [];
    this.list2 = [];
    this.list3 = [];
    this.idSum = 0;

    const timer1$ = interval(1000).pipe(
      map<number, IDataStream>(val => ({ id: val + 1, stream: 1 })),
      tap(val => this.list1.push(val)),
    );

    const timer2$ = interval(1500).pipe(
      skipUntil(timer(10000)),
      map<number, IDataStream>(val => ({ id: val + 1, stream: 2 })),
      tap(val => this.list2.push(val)),
    );

    const timer3$ = interval(2000).pipe(
      skipUntil(timer(20000)),
      map<number, IDataStream>(val => ({ id: val + 1, stream: 3 })),
      tap(val => this.list3.push(val)),
    );

    merge(timer1$, timer2$, timer3$)
      .pipe(takeUntil(timer(30000)))
      .subscribe(value => {
        this.idSum += value.id;
      });
  }

  public trackByFn(index, item) {
    return item.id;
  }
}
