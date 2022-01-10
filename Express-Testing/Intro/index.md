Express Testing

Unit Testing - Tests independent of each other.
Integration Testing - How functions work together.

While testing Express, there's only so much code we actually write ourselves: our routes. 

Index.js and Server.js is mainly config.

Model folder is mongoose config.

Routes folder is what we're telling our app to do, what we test.

Generally unit testing our routes folder.

1) Mocha - Testing framework for JS. Equivalent to JUnit.
2) Chai - Testing assertion framework. Equivalent to JUnit assertion code.
3) Istanbul - Coverage Framework.