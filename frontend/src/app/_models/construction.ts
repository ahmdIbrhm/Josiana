import { Project } from "./project";
import { User } from "./user";


export class ConstructionOfNgo {
    id?: number;
    project?: Project;
    architect?: string
    contractor?: string
    civilEngineer?: string;
    numberOfSubcontractors?: number;
    progress?: number;
}


export class EditConstructionDTO {
    architect?: string;
    contractor?: string;
    civilEngineer?: string;
    numberOfSubcontractors?: number;
    progress?: number;
}

export class CreateConstructionDTO {
    ngoId?: number;
    projectId?: number;
    architect?: string;
    contractor?: string;
    civilEngineer?: string;
    numberOfSubContractors?: number;
}

export class GetConstructionsWithNgos {
    constructionId: string;
    decision: string;
    ngo: User;
    project: Project;
    architect: string;
    contractor: string;
    civilEngineer: string;
    numberOfSubcontractors: number;
    progress: number;
}