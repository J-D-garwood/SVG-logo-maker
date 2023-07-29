const Shapes = require('../lib/shapes.js')

describe('Shapes', () => {

    describe('triangle render', () => {
        it('should render the svg shape code applied to it in the svg file', () => {
            let testShape = new Shapes.triangle();
            testShape.setColor("blue");
            expect(testShape.render()).toEqual(`<polygon points="150 15, 280 160, 20 160" fill="blue"></polygon>`);
        })
    })

    describe('circle render', () => {
        it('should render the svg shape code applied to it in the svg file', () => {
            let testShape = new Shapes.circle();
            testShape.setColor("brown");
            expect(testShape.render()).toEqual(`<circle cx="150" cy="100" r="100" stroke="black" fill="brown" stroke-width="1"></circle>`);
        })
    })

    describe('square render', () => {
        it('should render the svg shape code applied to it in the svg file', () => {
            let testShape = new Shapes.square();
            testShape.setColor("pink");
            expect(testShape.render()).toEqual(`<rect x="40" y="20" width="220" height="160" stroke="black" fill="pink" stroke-width="1"></rect>`);
        })
    })
    //describe('triangle text displayed')
})