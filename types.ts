export interface AIAnalysisResult {
  text: string;
  confidence?: number;
  timestamp: string;
}

export enum AnalysisType {
  VISUAL_INSPECTION = 'VISUAL_INSPECTION',
  PROCESS_OPTIMIZATION = 'PROCESS_OPTIMIZATION',
  GENERAL_CONSULTATION = 'GENERAL_CONSULTATION'
}

export interface MachineMetric {
  id: string;
  name: string;
  status: 'operational' | 'warning' | 'critical';
  uptime: number;
  efficiency: number;
}
