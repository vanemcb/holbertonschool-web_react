// Task 1
interface Teacher {
	readonly firstName: string,
	readonly lastName: string,
	fullTimeEmployee: boolean,
	yearsOfExperience?: number,
	location: string,
	[propName: string]: any;
};

const teacher3: Teacher = {
	firstName: 'John',
	fullTimeEmployee: false,
	lastName: 'Doe',
	location: 'London',
	contract: false,
};
// console.log(teacher3);

// Task 2
interface Directors extends Teacher {
	numberOfReports: number,
};

const director1: Directors = {
	firstName: 'John',
	lastName: 'Doe',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17,
};
// console.log(director1);

// Task 3
interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => `${firstName.charAt(0)}. ${lastName}`;
// console.log(printTeacher("John", "Doe"));

// Task 4
interface StudentClassConstructor {
	new(firstName: string, lastName: string): StudentClassInterface;
}
interface StudentClassInterface {
	firstName: string;
	lastName: string;
}
class StudentClass implements StudentClassInterface {
	firstName: string;
	lastName: string;
	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	workOnHomework() {
		return 'Currently working';
	}
	displayName() {
		return this.firstName;
	}
}
