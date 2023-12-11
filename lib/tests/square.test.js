const Square = require('../shapes/square');

// A testing suite for shape is created.
describe('Shape', () => {
    describe('square', () => {
      it('should take a color, and render code with that color as the fill', () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
      });
    });
  });