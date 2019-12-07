import { mensaje} from "./texto";

describe("devolver texto", () =>{
    it("debe retornar un sting", () =>{
        const text = "test";
        const res = mensaje(text);
        
        expect(res).toContain("saludos test");
        
    })

    it("debe retornar saludo con el nombre", () =>{
        const res = mensaje("test");
        expect(typeof res).toBe("string")
    })
})