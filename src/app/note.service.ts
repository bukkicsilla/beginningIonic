export class NoteService{
//copy notes data from home page
notes = [
  {
    id: '1',
    date: '2018-12-12', 
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
]

removeNote(note){
 let index = this.note.indexOf(note);
  if (index > -1){
   this.note.splice(index, 1);
  }
}

addNote(note){
    this.notes.push(note);
}
}