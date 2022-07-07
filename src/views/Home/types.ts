export interface OverviewData {
  circSupply?: string
  curPrice?: number
  nextRebase?: number
  scalingFactor?: number
  targetPrice?: number
  totalSupply?: string
}

export enum PageView {
  POSITIONS = 'positions',
  HISTORY = 'history',
  CHART = 'chart',
}
