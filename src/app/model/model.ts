export interface LogData {
  id: string
  Date: string;
  InTime: string;
  OutTime: string | null;
}
export interface PermissionData {
  id: string;
  Phone: string;
  Time: string;
  Hours: string;
  Reason: string;
  Status: string;
  UpdateTime: string;
  Date: string
}
export interface PermissionReason {
  Reason: string
}
export interface PermissionHours {
  Hours: string;
}
export interface ServerResponse {
  message: string;
  Phone: string | null
  Name: string | null
}