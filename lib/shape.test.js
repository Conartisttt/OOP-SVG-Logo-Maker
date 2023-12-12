const shapes = require('./shapes');

// A testing suite for shape is created.
describe('Shape', () => {
    describe('triangle', () => {
      it('should take a color, and render code with that color as the fill', () => {
        const shape = new shapes.Triangle();
        shape.setShapeColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
      });
    });
    describe('square', () => {
      it('should take a color, and render code with that color as the fill', () => {
        const shape = new shapes.Square();
        shape.setShapeColor("blue");
        expect(shape.render()).toEqual('<rect x="10" y="10" width="180" height="180" fill="blue"/>');
      });
    });
    describe('circle', () => {
      it('should take a color, and render code with that color as the fill', () => {
        const shape = new shapes.Circle();
        shape.setShapeColor("blue");
        expect(shape.render()).toEqual('<circle cx="100" cy="100" r="100" fill="blue"/>');
      });
    });
  });