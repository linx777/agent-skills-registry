
export enum Role {
  ALL = 'All Roles',
  FRONTEND = 'Frontend',
  BACKEND = 'Backend',
  DEVOPS = 'DevOps',
  // SECURITY = 'Security',
  DATA = 'Data Science',
  PRODUCT = 'Product Management',
  MARKETING = 'Marketing'
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  author: string;
  downloads: string;
  stars: number;
  roles: Role[];
  isTrending: boolean;
  isCowork: boolean;
  setupCommand: string;
  yamlConfig: string;
  lastUpdated: string;
  type: string;
  repoUrl?: string;
  compatibility: string[];
  files: string[];
  triggers: string[];
  features: string[];
  bestFor: string[];
  // New field for tags
  tags: string[];
  repoUrl?: string;
}
