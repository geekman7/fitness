import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Exercise } from 'src/app/model/exercise.model';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css']
})
export class PastTrainingComponent implements OnInit, AfterViewInit {

  exercisesSub: Subscription;
  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
  dataSource = new MatTableDataSource<Exercise>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.exercisesSub = this.trainingService.finishedexercisesChanged.subscribe(
        (exercises: Exercise[]) => {
          this.dataSource.data = exercises;
        }
    );
    this.trainingService.fetchCompleteOrCancelledExercise();
    //this.dataSource.data = this.trainingService.getCompleteOrCancelledExercise();
  }
  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string){
      this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

}
