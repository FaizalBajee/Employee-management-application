export interface LogData {
  id: string
  Date: string;
  InTime: string;
  OutTime: string | null;
}
export interface PermissionData {
  id: string;
  Name: string;
  Phone: string;
  Time: string;
  Hours: string;
  Reason: string;
  Status: string;
  UpdatedTime: string;
  ReportingTo: string;
  Date: string
}
export interface PermissionReason {
  Reason: string
}
export interface PermissionHours {
  Hours: string;
}
export interface LeaveData {
  id: number;
  Phone: string;
  Name: string;
  LeaveReason: string;
  LeaveDate: string;
  UpdatedTime: string;
  Status: string;
  ReportingTo: string;
}

export interface ServerResponse {
  message: string;
  Phone: string | null
  Name: string | null
}