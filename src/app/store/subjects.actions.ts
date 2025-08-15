import { createAction, props } from "@ngrx/store";

import { Subject } from "./subjects.model";

export const loadSubjects = createAction('[subjects] load Subject')

export const setSubjects = createAction('[subjects] set Subjects' , props<{subjects:Subject[]}>())