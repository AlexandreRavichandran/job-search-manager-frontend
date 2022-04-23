export interface Application {

    id: number;
    title: string;
    description?: string;
    status: string;
    link?: string;
    archived: boolean;
    result: string;
    createdAt: Date;
    companyName?: string;
    companyAdress?: string;
    contactEmail?: string;
    contactPhoneNumber?: string;
    moved: boolean
}