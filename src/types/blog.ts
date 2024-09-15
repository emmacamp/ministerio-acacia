export type Blog = {
  userImage: string;
  buttonLabel: string;
  titleText: string;
  dateText: string;
  url: string;
  content: Content;
};

export type Content = {
  introduction: string;
  subjects: Subject[];
};

export type Subject = {
  title: string;
  text: string;
};
