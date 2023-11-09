import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "SecToMin",
    standalone: true,
})
//There is an complex example in Ingemm
export class SecToMin implements PipeTransform {
    transform(element:number| null):string {
        if(element == null) return '';
        element=Math.round(element);
        const totalMin=Math.round(element/60);
        const currentSec=Math.round(element%60);
        return `${totalMin} : ${currentSec<10?'0' + currentSec : currentSec}`;
    }
}