# To-Do App With Modern Design
## Overview

This project is a To-Do application built using React. It features a modern design and allows users to filter tasks by their status. The app includes CRUD (Create, Read, Update, Delete) operations for managing tasks.

## Features

- Add new tasks
- Mark tasks as complete or incomplete
- Edit tasks
- Delete tasks
- Filter tasks by status: All, Completed, Incomplete

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/modern_todo_app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd modern_todo_app
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the development server:

    ```bash
    npm run dev
    ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Project Structure

```plaintext
todo-app/
├── public/
│   └── ...
├── src/
│   ├── components/
│   │   ├── AddTask.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskItem.jsx
│   │   └── Filter.jsx
│   ├── App.jsx
│   ├── index.html
│   ├── App.css
│   ├── main.jsx
│   └── ...
├── package.json
├── README.md
```

## Components

### `App.jsx`

The main component that holds the state and renders other components.

### `AddTask.jsx`

A component for adding new tasks.

### `TaskList.jsx`

A component that displays the list of tasks.

### `TaskItem.jsx`

A component that represents a single task item.

### `Filter.jsx`

A component for filtering tasks based on their status.

## Styling

The application uses modern CSS techniques to achieve a clean and responsive design. CSS modules or styled-components can be used for better modularity.

## CRUD Operations

### Create

To create a new task, fill in the task input field and click the "Add Task" button.

### Read

All tasks are displayed in the task list. You can see their status (completed or incomplete) next to them.

### Update

To edit a task, click the edit icon next to the task. Make the necessary changes and save.

### Delete

To delete a task, click the delete icon next to the task.

## Filtering Tasks

Use the filter options to display all tasks, only completed tasks, or only incomplete tasks.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to open an issue or contact me at [dhirajarya.ptn@gmail.com](mailto:dhirajarya.ptn@gmail.com).


---
Happy coding! 🚀
---