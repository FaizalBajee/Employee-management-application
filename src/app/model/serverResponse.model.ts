export interface serverResponseModel {
    success: boolean;
    message:string;
    content:{
        Phone: string | null;
        Name: string | null;
        Location: string | null;
    }
}