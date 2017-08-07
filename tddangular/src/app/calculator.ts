export class Calculator {
    
    Multiply(NumeroA: number, NumeroB:number):number{

        return NumeroA * NumeroB;
    }

    Divide(NumberA:number, NumberB:number):number{
        
        if( NumberB === 0 ){
            return null;
        }
        
        return NumberA / NumberB;
        
    }

}
