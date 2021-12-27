type Item = {
  name: string;
  ingredients: string;
  description: string;
  price: string;
  image: string;
};

interface Items {
  key: string;
  values: Item[];
  description: string;
}
