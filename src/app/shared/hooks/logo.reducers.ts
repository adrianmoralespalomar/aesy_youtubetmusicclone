import { createReducer, props,on } from '@ngrx/store'
import { collapseCategoryFromLogo } from './logo.actions.ts';

export interface LogoCollapsedState {
    isCollapdsed: boolean;
}
export const initialState: LogoCollapsedState={
    isCollapdsed:false,
}
export const logoReducer = createReducer(
    initialState, //Siempre aqui el estado inicial
    on(collapseCategoryFromLogo,(state,parametroProporcionado) => ({
        ...state,
        isCollapdsed: parametroProporcionado.isCollapdsed,
      })),
);