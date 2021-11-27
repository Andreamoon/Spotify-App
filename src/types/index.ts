type Icon = {
  height: string;
  url: string;
  width: string;
};

export type Item = {
  href: String;
  id: String;
  name: String;
  icons: [Icon];
};

export type Categories = {
  href: String;
  items: [Item];
  limit: Number;
  next: String;
  offset: Number;
  previous?: String;
  total: Number;
};
