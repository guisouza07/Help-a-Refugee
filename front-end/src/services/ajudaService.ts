import { HttpResponse } from "@angular/common/http";
import { Ajuda } from "src/app/models/ajuda";

export class AjudaService{

    getAjuda(): Array<Ajuda> {
        let listAjuda = new Array<Ajuda>;

        return listAjuda;
    }

}