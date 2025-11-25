export interface PageContent {
  title: string;
  heroImageKeyword: string;
  introText: string;
  sidebarItems: string[];
  articles: Array<{
    headline: string;
    summary: string;
  }>;
}

export interface CanvasProps {
  width?: number;
  height?: number;
  className?: string;
}