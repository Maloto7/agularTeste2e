import { obtenerPersonas} from "./arreglos";

xdescribe("Pruebas de arreglos", () =>{
    it("debe retornar al menos 3 personas", () =>{
        const res = obtenerPersonas();
        expect(res.length).toBeGreaterThanOrEqual(3);
    })

    it("debe existir la persona claudio", () =>{
        const res = obtenerPersonas();
        expect(res).toContain("claudio");
    })
})