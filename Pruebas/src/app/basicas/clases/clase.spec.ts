import {Jugador} from "./clase"

xdescribe("prueba de clase", () => {
    const jugador = new Jugador();
    beforeAll(()=>{
        console.warn("----------beforeAll");
    })
    beforeEach(()=>{
        console.warn("**********beforeEach");
    })
    afterAll(()=>{
        console.warn("----------afterAll");
    })
    afterEach(()=>{
        console.warn("**********afterEach");
    })
    it("debe retornar 80 de hp", () =>{
        const resp = jugador.recibedanio(20);
        expect(resp).toBe(80);
    })
    it("debe retornar 0 si danio es 300 hp", () =>{
        const resp = jugador.recibedanio(300);
        expect(resp).toBe(0);
    })
})