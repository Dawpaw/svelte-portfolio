const firstName = 'Daniel';
const lastName = 'Garcia Vasquez';
const suffix = 'Best Portfolio you will ever see';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
