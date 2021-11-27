type Icon = {
  height: string;
  url: string;
  width: string;
};

export type Item = {
  href: string;
  id: string;
  name: string;
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
