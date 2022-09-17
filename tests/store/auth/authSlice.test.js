import { authSlice } from "../../../src/store/auth/authSlice";
import { initialState } from "../../fixtures/authFixtures";

describe('pruebas en el authSlice', () => { 
    
    test('debe de regresar el etado inicial y llamarse auth', () => { 
        
        
        expect(authSlice.name).toBe('auth');
        const state = authSlice.reducer(initialState, {});
        console.log(state);
        expect(state).toEqual(initialState);
    })
})