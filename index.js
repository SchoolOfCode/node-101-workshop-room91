import chalk from "chalk";

import myCollection from "./collection.js";

console.log(myCollection);
function describeItem(myCollection) {
  //write a function and pass in myCollection as a parameter
  if (myCollection.count > 0) {
    // using an if statement to set a condition.
    console.log(
      `I have ${chalk.yellow(myCollection.count)} ${chalk.cyan(
        myCollection.name
      )} This is what i like about it: ${chalk.green(myCollection.whatILike)}`
    );
  } else {
    console.log(
      `I have ${chalk.cyan(
        myCollection.name
      )} This is what i like about it ${chalk.green(myCollection.whatILike)}`
    );
  }
}
console.log(describeItem(myCollection));
describeItem(myCollection);

function describeCollection(collection) {
  collection.forEach(describeItem);
}

describeCollection(myCollection);

/*console.log(describeItem(myCollection[0]));
function describeItem(myCollection) {
  console.log(myCollection.name.count);
}
console.log(describeItem(myCollection[0]));*/
