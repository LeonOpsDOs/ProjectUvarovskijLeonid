import {Component, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/base.css','./app.component.css']
})
export class AppComponent {
  Histori(){
    alert('Вы являетесь сотрудником корпорации «Волт-Тек».Скоро Прогремят взрывы Мировой войны, которые сотрут всё живое с лица земли ' )
    alert('В ваши задачи входит набор по 100 челове в убежища. Для этого введите их ФИО и адресс их проживания, для того, чтобы мы сотрудники отдела по связям с общественностью могли их забрать')
  }

  numberBunker: any = 1
  extends(number){
   this.numberBunker = number;
 }

  Update() {
    alert('Из-за неисправности оборудования, все ваши данные были утеряны. К сожалению вам нужно заново провести набор и воздержаться от нажатия на эту кнопку ')
    location.reload()
  }

  clearnumber: any = 0;
  Clear() {
    alert('Выбранный вами бункер будет очищен')
    this.clearnumber = this.numberBunker
  }

  Firstfunction() {
    alert('Проект выполнил Уваровский Леонид 2е заданиеСоздать одностраничный сайт c помощью angular на котором будет\n' +
      'страничка с списком пользователей (100 шт ) , у которых можно менять ФИО, Адрес проживания, который указывается с помощью подсказок используя сервис DaData. ')
  }
}
