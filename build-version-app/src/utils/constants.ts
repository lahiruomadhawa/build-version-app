import { PipelineStep, BuildStatistic, NavigationItem } from '../types/pipeline';

// Import version info
let versionInfo;
try {
  versionInfo = require('../version.json');
} catch (error) {
  versionInfo = {
    version: '1.0.0.0',
    buildNumber: '0',
    shortCommit: 'unknown',
    buildDate: new Date().toLocaleDateString(),
    buildTime: new Date().toLocaleTimeString()
  };
}

export const APP_VERSION = versionInfo.version;
export const BUILD_INFO = versionInfo;

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: 'Dashboard', href: '#' },
  { name: 'Builds', href: '#' },
  { name: 'Deployments', href: '#' },
  { name: 'Settings', href: '#' }
];

export const BUILD_STATISTICS: BuildStatistic[] = [
  { label: 'App Version', value: versionInfo.version, color: 'text-blue-600' },
  { label: 'Build Number', value: `#${versionInfo.buildNumber}`, color: 'text-green-600' },
  { label: 'Git Commit', value: versionInfo.shortCommit, color: 'text-purple-600' },
  { label: 'Build Date', value: versionInfo.buildDate, color: 'text-orange-600' }
];

export const PIPELINE_STEPS: PipelineStep[] = [
  {
    name: "Source Control",
    shortName: "Git",
    description: "Version control with Git repositories and branch management",
    status: "active",
    gradient: "bg-gradient-to-br from-gray-600 to-gray-800",
    icon: '<svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>'
  },
  {
    name: "GenKings Pipeline",
    shortName: "GenKings",
    description: "Custom pipeline orchestration and build triggers",
    status: "running",
    gradient: "bg-gradient-to-br from-purple-500 to-pink-600",
    icon: '<svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>'
  },
  {
    name: "Code Analysis",
    shortName: "Analysis",
    description: "Static code analysis, security scanning, and quality gates",
    status: "completed",
    gradient: "bg-gradient-to-br from-emerald-500 to-teal-600",
    icon: '<svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
  },
  {
    name: "Unit Testing",
    shortName: "Tests",
    description: "Automated unit tests, integration tests, and coverage reports",
    status: "completed",
    gradient: "bg-gradient-to-br from-green-500 to-emerald-600",
    icon: '<svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
  },
  {
    name: "Azure DevOps",
    shortName: "Azure",
    description: "CI/CD pipeline orchestration and artifact management",
    status: "running",
    gradient: "bg-gradient-to-br from-blue-500 to-blue-700",
    icon: '<svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>'
  },
  {
    name: "Docker Build",
    shortName: "Docker",
    description: "Container image creation and registry push",
    status: "ready",
    gradient: "bg-gradient-to-br from-cyan-500 to-blue-600",
    icon: '<svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M13.5 3H20v4.5h-6v-3h-0.5V3zM11 5.5V3h-6v4.5h6v-2zM4.5 8.5H11V11H4.5V8.5zM13.5 8.5H20V11h-6.5V8.5zM4.5 13.5H11V16H4.5v-2.5zM13.5 13.5H20V16h-6.5v-2.5zM8 18v3h8v-3H8z"/></svg>'
  },
  {
    name: "Kubernetes Deploy",
    shortName: "K8s",
    description: "Container orchestration and deployment to clusters",
    status: "pending",
    gradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
    icon: '<svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'
  },
  {
    name: "Monitoring",
    shortName: "Monitor",
    description: "Application monitoring, logging, and alerting setup",
    status: "ready",
    gradient: "bg-gradient-to-br from-yellow-500 to-orange-600",
    icon: '<svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>'
  }
];