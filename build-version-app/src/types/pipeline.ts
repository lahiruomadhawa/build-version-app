export interface PipelineStep {
  name: string;
  shortName: string;
  description: string;
  status: 'active' | 'running' | 'ready' | 'completed' | 'pending';
  gradient: string;
  icon: string;
}

export interface BuildStatistic {
  label: string;
  value: string;
  color: string;
}

export interface NavigationItem {
  name: string;
  href: string;
}