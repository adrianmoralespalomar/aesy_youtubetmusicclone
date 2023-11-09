import { AppState } from "@app/app.state";
import { createSelector } from "@ngrx/store";
import { LogoCollapsedState } from "./logo.reducers";

//Get Store Values
export const selectLogoFeature = (state:AppState)=>{
    return state.losItemsdemiaplicacion;
}
export const selectIsCollapdsed= createSelector(
    selectLogoFeature,//La feature que acabamos de crear
    (collapse: LogoCollapsedState) => collapse.isCollapdsed//Indicamos que es de tipo LogoCollapsedState y accedemos a la propiedad isCollapsed
);