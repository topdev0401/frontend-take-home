export interface PackageLinks {
  npm: string;
  homepage: string;
  repository: string;
  bugs: string;
}

export interface Contributer {
  username: string;
  email: string;
}

export interface Author extends Contributer {
  url: string;
}

export interface PackageDetails {
  name: string;
  scope: string;
  version: string;
  description: string;
  keywords: string[];
  date: string;
  links: PackageLinks;
  author: Author;
  publisher: Contributer;
  maintainers: Contributer[];
}

export interface ScoreDetail {
  quality: number;
  popularity: number;
  maintenance: number;
}

export interface Score {
  final: number;
  detail: ScoreDetail;
}

export interface IPackage {
  package: PackageDetails;
  score: Score;
  searchScore: number;
  highlist: string;
}
