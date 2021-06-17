export class Pokemon {
  id: number;
  nom: string;
  categorie: string;
  type: string[];
  taille: number;
  poids: number;
  img: string;

  constructor(
    id: number,
    nom: string,
    categorie: string,
    type: string[],
    taille: number,
    poids: number,
    img: string
  ) {
    this.id = id;
    this.nom = nom;
    this.categorie = categorie;
    this.type = type;
    this.taille = taille;
    this.poids = poids;
    this.img = img;
  }
}
