import { FeatureTypes } from "@/types";

export const features: FeatureTypes[] = [
  {
    home: {
      name: "Team A",
      logo: "/images/team-a.png",
      abr: "TA",
      couch: {
        name: "Couch A",
        occuation: "Couch"
      },
      details: {
        faculty: "FUSSOSA",
        department: "Computer Science",
        level: 200,
        school: "main-campus"
      },
      jersey: "/images/jersey-a.png"
    },
    away: {
      name: "Team B",
      logo: "/images/team-b.png",
      abr: "TB",
      couch: {
        name: "Couch B"
      },
      details: {
        faculty: "ENGINEERING",
        department: "Mechanical Engineering",
        level: 300,
        school: "affliate-campus"
      },
      jersey: "/images/jersey-b.png"
    },
    date: new Date("2023-10-01"),
    time: "15:00",
    venue: "Main Stadium",
    referee: "Referee A",
    assistant_referee: "Assistant Referee A, Assistant Referee B",
    votes: {
      home: 100,
      away: 50,
      draw: 25
    }
  },
  {
    home: {
      name: "Team C",
      logo: "/images/team-c.png",
      abr: "TC",
      couch: {
        name: "Couch C"
      },
      details: {
        faculty: "MANAGEMENT",
        department: "Business Administration",
        level: 400,
        school: "IPTS- Aiyegbaju"
      },
      jersey: "/images/jersey-c.png"
    },
    away: {
      name: "Team D",
      logo: "/images/team-d.png",
      abr: "TD",
      couch: {
        name: "Couch D"
      },
      details: {
        faculty: "ART",
        department: "Fine Arts",
        level: 100,
        school: "IPTS-Ire"
      },
      jersey: "/images/jersey-d.png"
    },
    date: new Date("2023-10-02"),
    time: "16:00",
    venue: "Secondary Stadium",
    referee: "Referee B",
    assistant_referee: "Assistant Referee C, Assistant Referee D",
    votes: {
      home: 200,
      away: 75,
      draw: 50
    }
  },
  {
    home: {
      name: "Team E",
      logo: "/images/team-e.png",
      abr: "TE",
      couch: {
        name: "Couch E"
      },
      details: {
        faculty: "SCIENCE",
        department: "Biology",
        level: 500,
        school: "IPTS-Ifaki"
      },
      jersey: "/images/jersey-e.png"
    },
    away: {
      name: "Team F",
      logo: "/images/team-f.png",
      abr: "TF",
      couch: {
        name: "Couch F"
      },
      details: {
        faculty: "AGRIC",
        department: "Agricultural Engineering",
        level: 600,
        school: "main-campus"
      },
      jersey: "/images/jersey-f.png"
    },
    date: new Date("2023-10-03"),
    time: "17:00",
    venue: "Tertiary Stadium",
    referee: "Referee C",
    assistant_referee: "Assistant Referee E, Assistant Referee F",
    votes: {
      home: 150,
      away: 80,
      draw: 30
    }
  },
  {
    home: {
      name: "Team G",
      logo: "/images/team-g.png",
      abr: "TG",
      couch: {
        name: "Couch G"
      },
      details: {
        faculty: "LAW",
        department: "Law",
        level: 200,
        school: "main-campus"
      },
      jersey: "/images/jersey-g.png"
    },
    away: {
      name: "Team H",
      logo: "/images/team-h.png",
      abr: "TH",
      couch: {
        name: "Couch H"
      },
      details: {
        faculty: "MEDICINE",
        department: "Medicine",
        level: 300,
        school: "affliate-campus"
      },
      jersey: "/images/jersey-h.png"
    },
    date: new Date("2023-10-04"),
    time: "18:00",
    venue: "Quaternary Stadium",
    referee: "Referee D",
    assistant_referee: "Assistant Referee G, Assistant Referee H",
    votes: {
      home: 120,
      away: 90,
      draw: 40
    }
  },
  {
    home: {
      name: "Team I",
      logo: "/images/team-i.png",
      abr: "TI",
      couch: {
        name: "Couch I"
      },
      details: {
        faculty: "FUSSOSA",
        department: "Computer Science",
        level: 400,
        school: "IPTS- Aiyegbaju"
      },
      jersey: "/images/jersey-i.png"
    },
    away: {
      name: "Team J",
      logo: "/images/team-j.png",
      abr: "TJ",
      couch: {
        name: "Couch J"
      },
      details: {
        faculty: "ENGINEERING",
        department: "Mechanical Engineering",
        level: 100,
        school: "IPTS-Ire"
      },
      jersey: "/images/jersey-j.png"
    },
    date: new Date("2023-10-05"),
    time: "19:00",
    venue: "Quinary Stadium",
    referee: "Referee E",
    assistant_referee: "Assistant Referee I, Assistant Referee J",
    votes: {
      home: 130,
      away: 110,
      draw: 60
    }
  }
]