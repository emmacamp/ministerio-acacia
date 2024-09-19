export type Service = {
  url: string;
  image: string;
  extended_image: string;
  title: string;
  subtitle?: string | undefined;
  description: string;
  content: ServiceContent[];
};

interface ServiceContent {
  subtitle?: string;
  paragraph?: string;
}
