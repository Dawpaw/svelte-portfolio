const firstName = 'Daniel';
const lastName = 'Garcia';
const suffix = 'My portfolio website!';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
