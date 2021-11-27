type Icon = {
  height: Number;
  url: String;
  width: Number;
};

export type Item = {
  href: String;
  //   icons: [Icon];
  //   id: String;
  //   name: String;
  // };
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
