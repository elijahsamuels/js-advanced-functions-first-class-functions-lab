// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
// const fareMultiplier = createFareMultiplier(2);


const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);
const returnLastTwoDrivers = (drivers) => drivers.slice(2, 4);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplyValue) => (value) => multiplyValue * value;
  
function fareDoubler(fare) {
	return fare *2;
};
function fareTripler(fare) {
	return fare *3;
};

const selectDifferentDrivers = function(drivers, arrayOfDrivers) {
	return arrayOfDrivers(drivers);
};