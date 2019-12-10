import {MedicosComponent} from "./medicos.component";
import {MedicosService} from "./medicos.service";
import {from, empty, throwError, EMPTY} from "rxjs"

describe("Medicos compent Test Suit", () =>{

    let component: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach(() => {
        component = new MedicosComponent(servicio);
    });
//1
    it("init: debe cargar los medicos", ()=>{
        const medicosFake = ["medico1","medico2","medico3"]
        spyOn(servicio, "getMedicos").and.callFake(()=>{
            return from([medicosFake]);
        })
        component.ngOnInit();
        expect(component.medicos.length).toBeGreaterThan(0);
    })

    //2
    it("debe llamar al servidor para agregar un medico", ()=>{

        const spia = spyOn(servicio, "agregarMedico").and.callFake(medico=>{
            return EMPTY;
        });
        component.agregarMedico();
        expect(spia).toHaveBeenCalled();
    })

    //3
    it("debe agregar nuevo medico al arreglo del componente", ()=>{

        const medico = { id: 1, nombre:"agustin"};

        spyOn(servicio, "agregarMedico").and.returnValue(from([medico]));            
        component.agregarMedico();
        expect(component.medicos.length).toBeGreaterThanOrEqual(1);
    })

    //4
    it("si falla la llamada el error debe ser igual al error del servicio", ()=>{

        const miError = "no se pudo agregar al medico";

        spyOn(servicio, "agregarMedico").and.returnValue(throwError(miError));            
        component.agregarMedico();
        expect(component.mensajeError).toBe(miError);
    })
    //5 debe llamar al servidor para borrar un medico
    it("debe llamar al servidor para borrar un medico", ()=>{
        spyOn(window, 'confirm').and.returnValue(true);
        const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);
        component.borrarMedico("1");
        expect(espia).toHaveBeenCalledWith("1");
    })

    //6 no debe llamar al servidor para borrar un medico cuanco el confirmar sea negativo

    it("debe llamar al servidor para borrar un medico", ()=>{
        spyOn(window, 'confirm').and.returnValue(false);
        const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);
        component.borrarMedico("1")
        expect(espia).not.toHaveBeenCalled()
    })
})