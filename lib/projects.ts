import { Technology } from "@/models/technology"
import { technologies } from "@/data/technologies";
export const getTechnologyByIds = (techs: Array<string>): Technology[] => {
    const arr: Technology[] = [];
    techs.forEach((tech=>{
        let a: Technology | undefined = technologies.get(tech);
        if(a != undefined){
            arr.push(a);
        }
    }))
    

    return arr;
}