const Shapes = require('../lib/shapes.js')

describe('Shapes', () => {

    describe('triangle render', () => {
        it('should render the svg shape code applied to it in the svg file', () => {
            let testShape = new Shapes.triangle();
            testShape.setColor("blue");
            expect(testShape.render()).toEqual(`<polygon points="250 15, 500 400, 0 400" fill="blue"></polygon>`);
        })
    })
    //describe('triangle text displayed')
})