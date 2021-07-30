import { AbstractControl, ValidationErrors } from "@angular/forms";

export class textValidation {
    static noSpaceAllow (control : AbstractControl) : ValidationErrors | null
    {
        if((control.value as string).indexOf('') != -1)
        {
          return {noSpaceAllow : true}; 
        }
        else {
            return{noSpaceAllow : false};
        }

    }
}