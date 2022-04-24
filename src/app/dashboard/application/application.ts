import { Activity } from "../activity/activity";
import { Discussion } from "../discussion/discussion";
import { Note } from "../note/note";

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
    moved: boolean;
    activities: Activity[];
    discussions: Discussion[];
    notes: Note[];
}