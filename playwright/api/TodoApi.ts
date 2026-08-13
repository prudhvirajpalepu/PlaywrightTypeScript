import { APIRequestContext } from '@playwright/test';

export class TodoApi {
  constructor(private request: APIRequestContext) {}

  async getTodos() {
    // Example – replace with real API later
    const response = await this.request.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
    return response.json();
  }

  async createTodo(title: string) {
    const response = await this.request.post('https://jsonplaceholder.typicode.com/todos', {
      data: {
        title,
        completed: false,
        userId: 1
      }
    });
    return response.json();
  }
}