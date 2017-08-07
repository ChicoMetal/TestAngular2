import { Calculator } from './calculator';

describe('Test para calculator', () => {
    
    let calculator;
    
    //Preparar
    beforeEach( () => {
    
        calculator = new Calculator();
    });

    describe('Test para funcion Multiply', () => {
        
        it('Se espera que retorne nueve', () => {
            
            //Actuar
            let result:number = calculator.Multiply(3,3);

            //Assert
            expect( result ).toEqual(9);
        });
            
    });

    describe('Test para funcion Divide', () => {
        
        it('Dividir un numero, se espera un numero', () => {
           
            //Actuar & Asserts
            expect( calculator.Divide(3,3) ).toEqual(1);
            expect( calculator.Divide(5,2) ).toEqual(2.5);

        });

        it('Dividir por zero, se espera retorne null', () => {
           
            //Actuar & Asserts
            expect( calculator.Divide(3,0) ).toBeNull();
            expect( calculator.Divide(4454545,0) ).toBeNull();

        });
            
    });

    describe('Ejemplo jasmine comparaciones', () =>{

        it('Jasmine opciones', () =>{
        
            let nameA = 'carlos';
            let nameB;

            expect( nameA ).toBeDefined();//esta definida
            expect( nameB ).toBeUndefined();//esta indefinida

            expect( 1+2 == 3 ).toBeTruthy();//se cumple la condicion
            expect( 1+1 == 3 ).toBeFalsy();//no se cumple la condicion

            expect(5).toBeLessThan(10);//es menor que
            expect(20).toBeGreaterThan(10);//es mayor que

            expect('123456789').toMatch(/123/);//expresion regular
            expect(['carlos','andres','guzman']).toContain('carlos');


        });
    });
});
