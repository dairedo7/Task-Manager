import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { Todo } from '../shared/todo.model';
import { ToolTipDirective } from '../shared/tool-tip.directive';
import { ToolTipSingletonDirective } from '../shared/tool-tip-singleton.directive';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  imports: [ToolTipDirective, ToolTipSingletonDirective],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;

  @Output() todoClicked: EventEmitter<void> = new EventEmitter();
  @Output() editClicked: EventEmitter<void> = new EventEmitter();
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter();

  @ViewChild('editBtn') editBtnElRef!: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit(): void {}

  onTodoClicked() {
    this.todoClicked.emit();
  }

  onEditClicked() {
    this.editClicked.emit();
  }

  onDeleteClicked() {
    this.deleteClicked.emit();
  }
}
