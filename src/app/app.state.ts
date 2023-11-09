import { ActionReducerMap } from '@ngrx/store';
import { LogoCollapsedState, logoReducer } from './shared/hooks/logo.reducers';

export interface AppState{
    losItemsdemiaplicacion: LogoCollapsedState //El nombre de la key el que queramos
    //Si tuvieramos otras States pues las pondriamos aqui permisosUsuario: PermisoUsuarioSate
}
export const ROOT_REDUCERS: ActionReducerMap<AppState>={
    losItemsdemiaplicacion:logoReducer
  }