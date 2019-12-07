import {incrementar} from "./numeros"

xdescribe ("Prueb de numeros",() =>{
    it("debe retornar 100 si el numero es mayor a 100", () => {
        const res = incrementar(300);
        expect(res).toBe(100);
    })
    it("debe retornar el numero + 1 si el numero es menor a 100", () => {
        const res = incrementar(90);
        expect(res).toBe(91);
    })
})