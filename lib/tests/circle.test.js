const Circle = require('../shapes/circle');


// A testing suite for shape is created.
describe('Shape', () => {
    describe('circle', () => {
      it('should take a color, and render code with that color as the fill', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
      });
    });
  });