# JavaScript Class Exercises

This repository contains a collection of JavaScript class exercises implemented using ES6 classes. Each exercise focuses on different aspects of class implementation and usage.

## Exercise List

1. **ClassRoom**: Implements a `ClassRoom` class that accepts the `maxStudentsSize` as a parameter in the constructor and provides access to it via the `_maxStudentsSize` attribute.

2. **Make Classrooms**: Implements an `initializeRooms` function that creates and returns an array of `ClassRoom` objects with different sizes.

3. **HolbertonCourse**: Implements a `HolbertonCourse` class that represents a course at Holberton School. It has attributes for `name`, `length`, and `students`, and provides getter and setter methods for each attribute.

4. **Pricing**: Implements a `Pricing` class that represents a price with an amount and currency. It has attributes for `amount` and `currency`, and provides getter and setter methods for each attribute. It also includes a `displayFullPrice` method to display the price in a specific format, and a static method `convertPrice` to convert prices based on a conversion rate.

5. **Building**: Implements an abstract `Building` class that represents a building with a square footage attribute. It provides a getter for the `sqft` attribute and requires any derived class to implement an `evacuationWarningMessage` method.

6. **SkyHighBuilding**: Extends the `Building` class to represent a sky-high building with additional attributes for `floors`. It provides a getter for the `floors` attribute and overrides the `evacuationWarningMessage` method.

7. **Airport**: Implements an `Airport` class that represents an airport with attributes for `name` and `code`. It provides getter and setter methods for each attribute and overrides the default `toString` method to return the airport code.

8. **HolbertonClass**: Implements a `HolbertonClass` class that represents a Holberton class with attributes for `size` and `location`. It allows the class to be cast into a number to return the size and into a string to return the location.

9. **Hoisting**: Fixes a code snippet that creates instances of `HolbertonClass` and `StudentHolberton` objects, and defines a `listOfStudents` array.

10. **Car**: Implements a `Car` class that represents a car with attributes for `brand`, `motor`, and `color`. It includes a `cloneCar` method to create a new object of the class.

11. **EVCar**: Extends the `Car` class to represent an electric vehicle with an additional attribute for `range`. It overrides the `cloneCar` method to return an instance of the base `Car` class instead of `EVCar`.

## Usage

Each exercise has its own JavaScript file, and you can run them individually using a JavaScript runtime or by bundling the files with a tool like webpack.

To execute the code in an exercise file, you can use the `node` command followed by the file name. For example:

`node 1-main.js`

> This will run the code in `1-main.js` and display the output.

Note: Make sure you have Node.js installed on your machine to run the exercises.

Feel free to explore each exercise file to understand the class implementation and the expected behavior. Happy coding!

