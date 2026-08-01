import {
  Cloud,
  Database,
  BrainCircuit,
  Plug,
  Workflow,
  Tags,
  Gauge,
  Search,
  RefreshCw,
  Layers,
  Rocket,
  Zap,
  type LucideIcon,
} from "lucide-react";

/** Icons for the "Who we are" capability chips (Home + About), in content order. */
export const whoWeAreIcons: LucideIcon[] = [
  Cloud, // Cloud engineering
  Database, // Data modernization
  BrainCircuit, // AI implementation
  Plug, // Systems integration
  Workflow, // Automation frameworks
  Tags, // Intelligent metadata architectures
];

/** Illustration images for the services list, keyed by service `num`. */
export const serviceImages: Record<string, string> = {
  "01": "/services/database-modernization.jpg",
  "02": "/services/ai-frameworks.jpg",
  "03": "/services/mainframe-cloud.jpg",
  "04": "/services/ai-agents.jpg",
  "05": "/services/metadata-platforms.jpg",
  "06": "/services/performance-ai.jpg",
  "07": "/services/governance.jpg",
};

/** Icons for the five-stage framework steps, in content order. */
export const frameworkIcons: LucideIcon[] = [
  Search, // Assess
  RefreshCw, // Transform
  Layers, // Modernize
  Zap, // Operationalize
  Rocket, // Scale
];

/** Icons for the About-page differentiator blocks, in content order. */
export const differentiatorIcons: LucideIcon[] = [
  BrainCircuit, // AI-First Modernization
  Workflow, // Automation-First Strategy
  Gauge, // Performance Optimization for AI
];

/** Illustration images for the differentiator blocks (Solutions page), in content order. */
export const differentiatorImages: string[] = [
  "/services/ai-frameworks.jpg", // AI-First Modernization
  "/services/automation-strategy.jpg", // Automation-First Strategy
  "/services/performance-ai.jpg", // Performance Optimization for AI
];
