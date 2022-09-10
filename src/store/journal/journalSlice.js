import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        active: null,
        isSaving: false,
        messageSaved: "",
        notes: []
    },
    reducers: {
        savingNewNote: (state) => {
            //! hacer el cambio en el state del isSaving a true.
            state.isSaving = true;
            //! deshabilitar el boton si el isSaving esta en true.
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;

        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state) => {

        },
        updateNote: (state, action) => {

        },
        deleteNoteById: (state, action) => {

        },
    }
});

export const  {        
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById,
    savingNewNote
} = journalSlice.actions;