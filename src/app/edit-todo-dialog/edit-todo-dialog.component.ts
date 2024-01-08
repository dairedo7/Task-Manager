import { Component, OnInit, Inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '../shared/todo.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-edit-todo-dialog',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './edit-todo-dialog.component.html',
  styleUrl: './edit-todo-dialog.component.scss',
})
export class EditTodoDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public todo: Todo
  ) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return;

    const updatedTodo = {
      ...this.todo,
      ...form.value,
    };

    this.dialogRef.close(updatedTodo);
  }
}
