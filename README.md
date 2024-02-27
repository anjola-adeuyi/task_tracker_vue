# Task Tracker Vue

Task Tracker Vue is a simple project built with Vue.js to track tasks with reminders.

## Key Features when working with Vue

- **Event Emission**: Utilizes Vue's event emission for communication between components.
- **Data Binding**: Demonstrates data binding capabilities in Vue.js.
- **Methods Usage**: Incorporates Vue methods for handling user interactions.
- **Props**: Utilizes props to pass data between parent and child components.
- **Dynamic Styling**: Shows dynamic styling using Vue directives.
- **Iterating Over Tasks**: Utilizes Vue's `v-for` directive for rendering tasks dynamically.

## Vue Code Snippets

```markdown
In Vue:

- `:` -> `v-bind`
- `@` -> `v-on`
- `v-bind:style="{ background: color }"` -> `:style="{ background: color }"`
- `v-on:click="onClick()"` -> `@click="onClick()"`
- `v-on:dblclick="$emit('toggle-reminder', task.id)"` -> `@dblclick="$emit('toggle-reminder', task.id)"`
- `v-on:delete-task="deleteFromTasks(task.id)"` -> `@delete-task="deleteFromTasks(task.id)"`
- `v-bind:class="[task.reminder ? 'reminder' : '', 'task']"` -> `:class="[task.reminder ? 'reminder' : '', 'task']"`
- `v-bind:tasks="tasks"` -> `:tasks="tasks"`
- `v-for="task in tasks"` -> `:key="task.id" v-for="task in tasks"`
```

## Usage

1. Add Task: Click on the input field and enter a task description, then press Enter to add it to the list.
2. Toggle Reminder: Double click on a task to toggle its reminder status.
3. Delete Task: Click on the delete icon next to a task to remove it from the list.
4. Fetch Task from API

## Project Setup

To set up the project, follow these simple steps:

1. **Install Dependencies**: Run the following command to install project dependencies:

```sh
npm install
```

1. **Compile and Hot-Reload for Development**: For development purposes, compile and enable hot-reloading with:

```sh
npm run dev
```

1. **Compile and Minify for Production**: When ready for production, compile and minify the project using:

```sh
npm run build
```
