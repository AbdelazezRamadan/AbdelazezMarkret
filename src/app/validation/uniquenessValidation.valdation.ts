import { AbstractControl, ValidationErrors } from "@angular/forms";
export class UniqueNessVAlidation {

    static checkFoundedEmail(control: AbstractControl): Promise<ValidationErrors> {
        return new Promise((resolve) => {


            setTimeout(() => {
                if (control.value == "Abdelazez@gmail.com") {
                    resolve({ checkFoundedEmail: true })
                }
                else {
                    resolve({ checkFoundedEmail: null })
                }
            }, 2000)
        })

    }
}