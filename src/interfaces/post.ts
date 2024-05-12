export interface Post {
  id: number;
  title: string;
  tags: string[];
  content: {
    image: string;
    text: string;
  };
  summary: string;
  isExpanded: boolean;
}
