import { ReversePipe } from './reverse.pipe';

describe('Pruebas filtros: ReversePipe', () => {
  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });

  it("Deberia retornar la palabra al revez", () => {
    const pipe = new ReversePipe();

    expect( pipe.transform("carlos") ).toEqual("solrac");
    expect( pipe.transform("a") ).toEqual("a");
    expect( pipe.transform("") ).toEqual("");
    expect( pipe.transform("ana") ).toEqual("ana");
    expect( pipe.transform("juan") ).toEqual("nauj");
    expect( pipe.transform(null) ).toEqual("");
  });
});
