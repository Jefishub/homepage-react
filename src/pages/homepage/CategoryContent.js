const education = {
    url: "/education",
    header: "Education",
    listItems: [
      {item: "University of Turku", bullets: ["Master of Physics (2012)"]},
      {item: "Haaga-Helia University of Applied Sciences", bullets: ["Bachelor of Business Administration (Ongoing)"]},
      {item: "Taitotalo", bullets: ["Vocational Qualification (2021)"]}
    ]
  }

const skills = {
    url: "/skills",
    header: "Skills",
    listItems: [
        {item: "Researcher skills", bullets: ["SEM-EDS", "XPS (ESCA)", "Broad Ion Beam", "etc..."]},
        {item: "Developer skills", bullets: ["Python, Javascript, Typescript...", "Flask, React...", "SQL, elasticsearch, neo4j", "VSCode, Unity, Linux..."]}
    ]
}

const work = {
    url: "/work",
    header: "Work history",
    listItems: [
        {item: "Microsoft (2019)", bullets: ["Laboratory engineer"]},
        {item: "Top Analytica (2011-2019)", bullets: ["Team Leader in asbestos analysis", "Researcher", "Master Thesis Work"]},
        {item: "University of Turku (2009)", bullets: ["Summer trainee"]}
    ]
}


export { education, skills, work }