const commandlineArgs = process.argv;


//console.log(process);

var profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = profileDataArr => {
// no parentheses or {} because both arg and action is one, respectively
  profileDataArr.forEach(profileItem => console.log(profileItem));
}

printProfileData(profileDataArgs);