import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subject, Subscription } from 'rxjs';
import { Exercise } from '../model/exercise.model';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  exerciseChanged = new Subject<Exercise>();
  exercisesChanged = new Subject<Exercise[]>();
  finishedexercisesChanged = new Subject<Exercise[]>();
  availableExercises: Exercise[] = [];
  private fbSubs: Subscription[] = [];
  private runningExercise: Exercise;
  private finishedexercises: Exercise[] = [];

  constructor(private db: AngularFirestore,private uiService: UiService) { }

  getRunningExercise(){
    return {...this.runningExercise};
  }

  completeExercise() {
    this.addDataToDatabase({
      ...this.runningExercise,
      date: new Date(),
      state: 'completed'
    });

    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  cancelExercise(progress: number) {
    this.addDataToDatabase({
      ...this.runningExercise,
      duration: this.runningExercise.duration * (progress / 100),
      calories: this.runningExercise.calories * (progress / 100),
      date: new Date(),
      state: 'cancelled'
      
    });    
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }


  fetchCompleteOrCancelledExercise(){
    this.fbSubs.push(this.db.collection('finishedExercises').valueChanges().subscribe(
      (exercises: Exercise[]) => {
        this.finishedexercises = exercises;
        this.finishedexercisesChanged.next([...this.finishedexercises]);
      }
    ));
  }

  addDataToDatabase(exercise: Exercise) {
      this.db.collection('finishedExercises').add(exercise);
  }

  cancelSubscription() {
    this.fbSubs.forEach(sub => sub.unsubscribe());
  }


  fetchExercises(){
   this.fbSubs.push(this.db
    .collection('availableExercises')
    .snapshotChanges()
    .map(docArray => {
        return docArray.map(doc => {
          return {
            id: doc.payload.doc.id,
            ...doc.payload.doc.data()
        };
        });
    }).subscribe(
      (exercises: Exercise[]) => {
        this.availableExercises = exercises;
        this.exercisesChanged.next([...this.availableExercises]);
      },
      (error) => {
        this.uiService.showSnackbar('Fetching Exercises failed, please try again later',null, {duration: 2000});
      }
    ));
  }

  startExercise(selectedId) {
    this.db.doc('availableExercises/' + selectedId).update({
        lastSelected: new Date()
    });
      this.runningExercise = this.availableExercises.find(
        ex => ex.id === selectedId
      );
      this.exerciseChanged.next({...this.runningExercise});
  }

  
}
