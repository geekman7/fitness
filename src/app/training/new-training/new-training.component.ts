import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, Subscription } from 'rxjs';
import { Exercise } from 'src/app/model/exercise.model';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit,OnDestroy {
  
  exercises: Exercise[];
  exercisesSub: Subscription;

  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.trainingService.fetchExercises();
    this.exercisesSub = this.trainingService.exercisesChanged.subscribe(
      (exercises: Exercise[]) => {
        this.exercises = exercises
      }
    );

  }

  onStartTraining(form: NgForm){
   this.trainingService.startExercise(form.value.exercise);
  }

  ngOnDestroy(){
    this.exercisesSub.unsubscribe();
  }

}
