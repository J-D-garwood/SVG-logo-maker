const index = require('../index.js')
const shapes = require('../lib/shapes.js')

describe('SVG Generation', () => {
    it('should generate SVG content as intended', () => {
        let testShape = new shapes.circle()
        expect(index.generateSVG(testShape)).toEqual(
`
<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g>
        <circle cx="150" cy="100" r="100" stroke="black" fill="green" stroke-width="1"></circle>
        <text x="55" y="130" font-family="Times New Roman" font-size="90" fill="white">SVG</text>
    </g>
</svg>
`
)
})
})