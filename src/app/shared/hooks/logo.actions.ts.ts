import { createAction,props } from "@ngrx/store";

export const collapseCategoryFromLogo = createAction(
    '[Header Header-Log] Collapse logo' ,
    props<{isCollapdsed: boolean}> ()//type:
  );