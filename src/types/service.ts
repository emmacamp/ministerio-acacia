export type Service = {
  url: string;
  image: string;
  title: string;
  description: string;
  content: ServiceContent[];
};

interface ServiceContent {
  title?: string;
  subtitle?: string;
  paragraph?: string;
}
