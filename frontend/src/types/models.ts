// Auto-generated types barrel for v10
export interface Agent {
  id: string;
  name: string;
  status: string;
  events: number;

// Auto-added agent props to prevent build-time type errors
  description?: any;
}
export type MetricsStream = {
  cpu?: number;
  memory?: number;
  rps?: number;
  [key: string]: any;
};
