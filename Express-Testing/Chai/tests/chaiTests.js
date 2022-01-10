const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');

// Using Chai, use the chaiHttp module (rather than a different framework)
chai.use(chaiHttp);

// When testing, we should follow a framework
// Arrange
// Act
// Assert

describe('Basic testing process', function() {

    it('should return 2 when 1 + 1', function() {

        // Arrange - declaring my variables
        let num1 = 1;
        let num2 = 1;
        let sum;

        // Act - What am I testing
        sum = num1 + num2;

        // Assert - uses expect from our chai
        expect(sum).to.equal(2);

    });

    it('the string should be "Red"', function() {

        // Arrange
        let testString;

        // Act
        testString = "Red";

        // Assert
        expect(testString).to.equal("Red");
        expect(testString).to.be.a('string');

    });

    it('5 x 4 should equal 20', function() {

        // Arrange - declaring my variables
        let num1 = 5;
        let num2 = 4;
        let sum;

        // Act - What am I testing
        sum = num1 * num2;

        // Assert - uses expect from our chai
        expect(sum).to.equal(20);

    });

    it('the string should be "Hello"', function() {

        // Arrange
        let testString;

        // Act
        testString = "Hello";

        // Assert
        expect(testString).to.equal("Hello");
        expect(testString).to.be.a('string');

    });

    it('5 x 4 should equal 20', function() {

        // Arrange - declaring my variables
        let num1 = 1;
        let num2 = 2;
        let num3 = 3;
        let num4 = 4;
        let sum;

        // Act - What am I testing
        sum = num1 + num2 + num3 + num4;

        // Assert - uses expect from our chai
        expect(sum).to.equal(10);

    });

    it('the text should be null', function() {

        // Arrange
        let testString;

        // Act
        testString = "text";

        // Assert
        expect(testString).to.equal("text");
        expect(testString).to.be.a('null');

    });

    it('An object should have a property of name', function() {
        let obj;
        obj = {
            name: 'Rick Astley',
            name = obj
        }
        expect(obj).to.have.a.property('name');
    });

    it('Should print the word "Hello"', function() {
        console.log("Hello");
    });

    it('Number 12 should not be undefined.', function() {

        // Arrange - declaring my variables
        let num = 12;

        // Act - What am I testing
        num = 12;

        // Assert - uses expect from our chai
        expect(num).to.not.be.undefined;

    });

});