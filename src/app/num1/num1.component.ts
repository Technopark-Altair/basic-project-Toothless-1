import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-num1',
  templateUrl: './num1.component.html',
  styleUrls: ['./num1.component.css'],

})
export class Num1Component{

  constructor() { }
  
  answer: number;
  result: string;

  Answer(){
    if(this.answer!=null){
      if(this.answer==59){
        this.result='Ответ верный. Вы молодец!'
      }else{
        this.result='Ответ неверный. Попробуйте еще раз'
      }
    }
  }

}
