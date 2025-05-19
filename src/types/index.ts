

export interface TeamTypes {
  name: string;
  logo: string;
  abr: string;
  couch: {
    name: string;
    occuation?: string;
  },
  details: {
    faculty: "FUSSOSA" | "ENGINEERING" | "MANAGEMENT" | "ART" | "SCIENCE" | "AGRIC" | "LAW" | "MEDICINE",
    department: string;
    level: 100 | 200 | 300 | 400 | 500 | 600,
    school: "main-campus" | "affliate-campus" | "IPTS- Aiyegbaju" | "IPTS-Ire" | "IPTS-Ifaki"
  },
  jersey: string;
}

export interface FeatureTypes {
  home: TeamTypes;
  away: TeamTypes;
  date: Date,
  time: string,
  venue: string;
  referee: string;
  assistant_referee: string;
  votes: {
    home: number;
    away: number;
    draw: number;
  }
}