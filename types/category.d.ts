interface Categories {
  id: number;
  name: string;
  description: string;
  sub: SubCategory[];
}

type SubCategory = {
  id: number;
  name: string;
  description: string;
}