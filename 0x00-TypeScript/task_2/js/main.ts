// Task 5
interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

class Director implements DirectorInterface {
	workFromHome = () => 'Working from home';
	getCoffeeBreak = () => 'Getting a coffee break';
	workDirectorTasks = () => 'Getting to director tasks';
}

class Teacher implements TeacherInterface {
	workFromHome = () => 'Cannot work from home';
	getCoffeeBreak = () => 'Cannot have a break';
	workTeacherTasks = () => 'Getting to work';
}

const createEmployee = (salary: number | string): Teacher | Director => {
	if (salary < 500) {
		return new Teacher()
	}
	return new Director()
}

// console.log(createEmployee(200));
// console.log(createEmployee(1000));
// console.log(createEmployee('$500'));
