const Shapes = require('../lib/shapes.js')

describe('Shapes', () => {

    describe('triangle render', () => {
        it('should render the svg shape code applied to it in the svg file', () => {
            let testShape = new Shapes.triangle();
            testShape.setColor("blue");
            expect(testShape.render()).toEqual(`<polygon points="250 15, 500 400, 0 400" fill="blue"></polygon>`);
        })
    })

    describe('circle render', () => {
        it('should render the svg shape code applied to it in the svg file', () => {
            let testShape = new Shapes.circle();
            testShape.setColor("brown");
            expect(testShape.render()).toEqual(`<circle cx="250" cy="250" r="250" stroke="black" fill="brown" stroke-width="1"></circle>`);
        })
    })

    describe('')
    //describe('triangle text displayed')
})