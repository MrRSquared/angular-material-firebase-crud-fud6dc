import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TodoService } from './todo.service';
import { OldTodoComponent } from './old-todo/old-todo.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { TaskComponent } from './task/task.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog/typings/dialog-module';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { TaskComponent } from './task/task.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    AngularFireDatabaseModule,
    MatToolbarModule,
    MatIconModule,
    DragDropModule,
    FormsModule,
    MatDialogModule,

    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  declarations: [AppComponent, HelloComponent, OldTodoComponent, TaskComponent, TaskDialogComponent],
  bootstrap: [AppComponent],
  providers: [TodoService],
})
export class AppModule {}
