import { FormularioRegistro } from './formulario';
import { FormBuilder } from '@angular/forms';

describe('Pruebas de formulario', ()=>{
    let componente: FormularioRegistro;

    beforeEach(()=>{
        componente=new FormularioRegistro(new FormBuilder());
    });

    it('debe de crear un formulario de 2 campos, email y pasword', ()=>{
        expect(componente.form.contains('email')).toBeTruthy();
        expect(componente.form.contains('password')).toBeTruthy();

    });

    it('email debe de ser obligatorio', ()=>{
        const control = componente.form.get('email') ;
        control.setValue('');
        expect(control.valid).toBeFalsy();
    });

    it('email debe ser un correo valido', ()=>{
        const control = componente.form.get('email') ;
        control.setValue('agustin@gmail.com');
        expect(control.valid).toBeTruthy();
    });
})