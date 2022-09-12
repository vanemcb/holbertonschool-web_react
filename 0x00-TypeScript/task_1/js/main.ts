interface Teacher {
	readonly firstName: string,
	readonly lastName: string,
	fullTimeEmployee: boolean,
	yearsOfExperience?: number,
	location: string,
	[propName: string]: any;
};

const teacher3: Teacher = {
	firstName: 'Vanessa',
	fullTimeEmployee: true,
	lastName: 'Castro',
	location: 'Sabaneta',
	contract: false,
};

console.log(teacher3);
