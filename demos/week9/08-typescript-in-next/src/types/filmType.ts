//here I will declare the type I want to use with my films data

export type filmType = {
  id: number;
  name: string;
  director?: string; //director is optional becasue some films are missing the director property
  releaseYear: number;
};
