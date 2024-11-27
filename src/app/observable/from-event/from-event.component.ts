import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.scss'
})
export class FromEventComponent implements AfterViewInit {

  @ViewChild('btnClick')
  btnClick!: ElementRef;

  count = 1;
  
  ngAfterViewInit(): void {
    
    fromEvent(this.btnClick.nativeElement, 'click').subscribe(res=>{
      let countDone = 'video ' + this.count++;
      this.print(countDone);
    })
  }

  print(count: string){
    let el = document.createElement('li');
    el.innerText = count;

    document.getElementById('element')?.appendChild(el);
  }

}
 