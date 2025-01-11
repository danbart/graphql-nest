import { Injectable, NotFoundException } from '@nestjs/common';
import { StatusArgs } from './dto/args/status.args';
import { CreateTodoInput, UpdateTodoInput } from './dto/inputs';
import { Todo } from './entity/todo.entity';

@Injectable()
export class TodoService {

    private todos: Todo[] = [
        { id: 1, description: 'Tarea 1', done: false },
        { id: 2, description: 'Tarea 2', done: true },
        { id: 3, description: 'Tarea 3', done: false },
        { id: 4, description: 'Tarea 4', done: false },
        { id: 5, description: 'Tarea 5', done: false },
    ];

    get totalTodos() {
        return this.todos.length;
    }

    get pendingTodos() {
        return this.todos.filter(todo => !todo.done).length
    }

    get completedTodos() {
        return this.todos.filter(todo => todo.done).length
    }

    findAll(statusArgs: StatusArgs): Todo[] {
        const { status } = statusArgs;
        if (status !== undefined) return this.todos.filter(todo => todo.done === status);

        return this.todos;
    }

    findOne(id: number): Todo {
        const todo = this.todos.find(todo => todo.id === id);
        if (!todo) throw new NotFoundException(`Todo with id ${id} not found`);
        return todo
    }

    create(createTodoInput: CreateTodoInput): Todo {
        const todo = new Todo();
        todo.description = createTodoInput.description;
        todo.id = Math.max(...this.todos.map(todo => todo.id)) + 1;
        this.todos.push(todo);
        return todo;
    }

    update({ id, description, done }: UpdateTodoInput) {
        const todoToUpdate = this.findOne(id);
        if (description) todoToUpdate.description = description;
        if (done !== undefined) todoToUpdate.done = done;
        this.todos = this.todos.map(todo => todo.id === id ? todoToUpdate : todo);
        return todoToUpdate;
    }

    delete(id: number): boolean {
        const todo = this.findOne(id);
        this.todos = this.todos.filter(todo => todo.id !== id);
        return true
    }
}
