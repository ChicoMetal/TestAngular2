import { PersonaComponent } from './persona.component';

describe('Test para componente persona', () => {
  let persona:PersonaComponent;

  beforeEach( () => {
  
    persona = new PersonaComponent(
      'carlos',
      'guzman',
      25,
      50,
      1.67
    );

  });

  describe('Test para los datos', () => {
    
    it('Test atributos', () => {
      
      expect( persona.name ).toEqual('carlos');
      expect( persona.apellido ).toEqual('guzman');
      expect( persona.edad ).toEqual(25);
      expect( persona.peso ).toEqual(50);
      expect( persona.estatura ).toEqual(1.67);
    });
    
  });

  describe('Test para calcIMC', () => {

    it('Deberia retornar string:bajo', () => {
      persona.peso = 40;
      expect( persona.CalcIMC() ).toEqual('bajo');
    });

    it('Deberia retornar string:normal', () => {
      persona.peso = 58;
      expect( persona.CalcIMC() ).toEqual('normal');
    });

    it('Deberia retornar string:sobre peso', () => {
      persona.peso = 69;
      expect( persona.CalcIMC() ).toEqual('sobre peso');
    });

    it('Deberia retornar string:sobre peso lvl 1', () => {
      persona.peso = 75;
      expect( persona.CalcIMC() ).toEqual('sobre peso lvl 1');
    });

    it('Deberia retornar string:sobre peso lvl 2', () => {
      persona.peso = 90;
      expect( persona.CalcIMC() ).toEqual('sobre peso lvl 2');
    });

    it('Deberia retornar string:sobre peso lvl 3', () => {
      persona.peso = 120;
      expect( persona.CalcIMC() ).toEqual('sobre peso lvl 3');
    });

    it('Deberia retornar string:no encontrado', () => {
      persona.peso = -48;
      expect( persona.CalcIMC() ).toEqual('no encontrado');

      persona.peso = -48;
      persona.estatura = -1.70;
      expect( persona.CalcIMC() ).toEqual('no encontrado');
    });

  });

});
