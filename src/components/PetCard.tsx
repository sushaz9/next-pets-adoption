import Image from "next/image";

interface Pet {
  name: string;
  breed: string;
  species: string;
  color: string;
  fun_fact: string;
  image?: string;
}

interface PetCardProps {
  petProp: Pet;
}

export default function PetCard({ petProp }: PetCardProps) {
  return (
    <div>
      {petProp.image && (
        <Image
          src={`${petProp.image}`}
          alt="petProp.name"
          height="550"
          width="400"
        />
      )}
      <h1>{petProp.name}</h1>
      <h3>
        {petProp.breed} | {petProp.species} | {petProp.color}
      </h3>
      <p>{petProp.fun_fact}</p>
    </div>
  );
}
