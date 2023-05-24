function newUser(username, password) {
    var username = username || 'Common';
    var password = password || '123456';

    console.log(username, password)
}

newUser();
newUser('Spidy', '654321');

function newAdmin(username = 'SpidyAdmin', password = 'Admin123') {
    console.log(username, password)
}

newAdmin()

/* newUser and newAdmin, that create new user or admin objects, respectively, with default values for the username and password if no arguments are provided.

The newUser function takes in two parameters: username and password. If no arguments are provided when calling the function, it assigns default values: 'Common' for the username and '123456' for the password. The function then prints the values of the username and password.

The newAdmin function also takes in two parameters: username and password. However, in this case, default values are explicitly defined within the function signature. If no arguments are passed when calling the function, it will use the default values: 'SpidyAdmin' for the username and 'Admin123' for the password. The function then prints the values of the username and password.

The code demonstrates the concept of default parameter values in JavaScript. These values are used when no arguments or undefined values are provided when calling a function. */

