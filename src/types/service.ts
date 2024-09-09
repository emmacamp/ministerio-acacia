export type Service = {
  url: string;
  image: string;
  title: string;
  subtitle?: string | undefined;
  description: string;
  content: ServiceContent[];
};

interface ServiceContent {
  subtitle?: string;
  paragraph?: string;
}
