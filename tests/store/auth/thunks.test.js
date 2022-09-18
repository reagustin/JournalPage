import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/store/auth";
import { checkingAuthentication, startCreatingUserWithEmailPassword, startGoogleSignIn, startLoginWithEmailPassword, startLogout } from "../../../src/store/auth/thunks";
import { clearNotesLogout } from "../../../src/store/journal";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock('../../../src/firebase/providers')


describe('pruebas en authThunks', () => { 
    const dispatch = jest.fn();
    beforeEach(() => jest.clearAllMocks());
    
    test('debe de invocar el checkingCredentials', async() => { 
        await checkingAuthentication()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    });

    test('startGoogleSignIn debe de llamar checking credentials y login', async() => { 
        
        const loginData = { ok: true, ...demoUser }
        await signInWithGoogle.mockResolvedValue(loginData);
        //!thunk
        await startGoogleSignIn()(dispatch);
        
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    });

    test('startGoogleSignIn debe de llamar checking credentials y logout - Error', async() => { 
        
        const loginData = { ok: false, errorMessage: 'Un error en google' };
        await signInWithGoogle.mockResolvedValue(loginData);
        //!thunk
        await startGoogleSignIn()(dispatch);
        
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
    });


    test('startLoginWithEmailPassword debe de llamar checkingCredentials y login - Exito', async() => { 
        
        const loginData = { ok: true, ...demoUser };
        const formData = { email: demoUser.email, password: '123456'};
        await loginWithEmailPassword.mockResolvedValue(loginData);
        //!thunk
        await startLoginWithEmailPassword(formData)(dispatch);
        
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    });
    test('startLoginWithEmailPassword debe de llamar checkingCredentials y logout - Error', async() => { 
        
        const loginData = { ok: false, ...demoUser, errorMessage: 'Un error en google' };
        const formData = { email: demoUser.email, password: '123456'};
        await loginWithEmailPassword.mockResolvedValue(loginData);
        //!thunk
        await startLoginWithEmailPassword(formData)(dispatch);
        
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
    });

    ///

    test('startCreatingUserWithEmailPassword debe de llamar checkingCredentials y login - Exito', async() => { 
        
        const loginData = { ok: true, ...demoUser };
        const formData = { email: demoUser.email, password: '123456', displayName: demoUser.displayName};
        await registerUserWithEmailPassword.mockResolvedValue(loginData);
        //!thunk
        await startCreatingUserWithEmailPassword(formData)(dispatch);
        
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    });
    test('startCreatingUserWithEmailPassword debe de llamar checkingCredentials y logout - Error', async() => { 
        
        const loginData = { ok: false, ...demoUser, errorMessage: 'Un error en google' };
        const formData = { email: demoUser.email, password: '123456', displayName: demoUser.displayName};
        await registerUserWithEmailPassword.mockResolvedValue(loginData);
        //!thunk
        await startCreatingUserWithEmailPassword(formData)(dispatch);
        
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
    });


    //faltan dos pruebas aca

    test('startLogout debe de llamar logoutFirebase, clearnotes y logout', async() => { 

        await logoutFirebase.mockResolvedValue();

        await startLogout()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
        expect(dispatch).toHaveBeenCalledWith(logout({}));
    })
});