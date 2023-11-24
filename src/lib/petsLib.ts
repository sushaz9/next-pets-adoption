import PETS from "./pets.json";

export type typePets = {
  name: string;
  species: string;
  breed: string;
  age: number;
  color: string;
  slug: string;
  fun_fact: string;
  image?: string;
};

// question mark in image property means not all have images, so ? means some might some might not
export function getPets(): typePets[] {
  return PETS;
}

// write function that accepts slug as an argument
// check if the slug that it got as an argument matches
// .. one of the slugs in the pets array

export function findPetBySlug(slug: string) {
  return PETS.find((pet) => pet.slug === slug);
}
