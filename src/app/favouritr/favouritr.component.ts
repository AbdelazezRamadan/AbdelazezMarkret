import { Component, Input, Output ,EventEmitter } from '@angular/core';


@Component({
  selector: 'favourite',
  templateUrl: './favouritr.component.html',
  styleUrls: ['./favouritr.component.css'],
})
export class FavouritrComponent  {
  @Input('isFavourite') isSelected : boolean = false;
  @Output()change = new EventEmitter();
  LikeCount : number =20 ;
  onSpanClick(){

this.LikeCount= (this.isSelected) ?( (this.LikeCount)--) : (this.LikeCount)++;
this.isSelected= !this.isSelected;
console.log(this.LikeCount);
this.change.emit();
  }


}
