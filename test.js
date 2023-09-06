const {sum, fromDollarToYen} = require('./app.js')

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    
    expect(fromEuroToDollar(3.5)).toBe(4.2);
})

test("One dollar should be 106.583 yens", function(){
    const { fromDollarToYen } = require('./app.js')

    const yen = fromDollarToYen(3.5)

    const resultadoEsperado = ( 3.5/1.2 ) * 127.9;

    expect(yen).toBe(resultadoEsperado);
})

test("159.875 yen should be one pound", function(){
    const { fromYenToPound } = require('./app.js')

    const pound = fromYenToPound(3.5)

    const resultadoEsperado = 3.5 *  (0.8 /127.9);

    expect(pound).toBe(resultadoEsperado);
})