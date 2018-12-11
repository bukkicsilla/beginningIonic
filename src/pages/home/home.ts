import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NoteService } from '../../app/note.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private noteService: NoteService) {
     this.notes = noteService.notes;
  }
  
  /*notes = [
    {
     id: '1',
     date: '2018-12-09',
     title: 'Ionic',
     content: 'I am learning it now.'
    },
    {
     id: '2',
     date: '2016-12-06',
     title: 'Android',
     content: 'I started my first job in Android development.'
    },
    {
    id: '3',
    date: '2017-05-15',
    title: 'MEAN',
    content: 'I got to love this: MongoDB, Express, AngularJS, NodeJS.' 
    }
  
  ];*/
  
   onItemClick(note){
     console.log("item-click", note);
     this.navCtrl.push('DetailPage', {
     noteParam: note
     });
   }
   
   onAddClick(){
      this.navCtrl.push('DetailPage');
   }
}
