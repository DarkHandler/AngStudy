import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnChanges, OnInit, OnDestroy{
  @Input() color!:string;
  @Input() label!:string;
  @Input() selection!:string;

  //Life cycle of components
  ngOnChanges(changes: SimpleChanges):void{
    //console.log('Change->', changes);
  }

  ngOnInit(): void {
    //console.log('OnInit->');
  }

  ngOnDestroy(): void {
    //console.log('Destroy'); 
  }


}
