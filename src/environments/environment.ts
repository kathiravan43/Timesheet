export const environment = {
adminName:"admin@gmail.com",
password:'12345678',
loginUrl: 'http://localhost:3000/signupUsers',
leaveFormUrl:'http://localhost:3000/leaveForms',
personalEmailRegex:/^[a-z][^0-9.@][^@]*@[^@]+\.[a-zA-Z]{2,3}$/,
organizationEmailRegex :/^[^0-9.@][^@]*@yourorganization\.com$/i,
notificationUrl:'http://localhost:3000/notification',
aadharNumberRegex:/^[0-9]{4}\s?[0-9]{4}\s?[0-9]{4}$/,
};
