const education = {
    url: "/education",
    categoryHeader: "Education",
    listItems: [
        {header: "Haaga-Helia University of Applied Sciences, 2020 - (2022)", bullets: ["Bachelor of Business Administration (Ongoing)"]},
        {header: "Taitotalo, 2020 - 2021", bullets: ["Vocational Qualification"]},
        {header: "University of Turku, 2005 - 2012", bullets: ["Master of Science (Physics/Materials Science)"]}
    ]
  }

const skills = {
    url: "/skills",
    categoryHeader: "Skills",
    listItems: [
        {header: "Developer skills", bullets: ["Frontend: Java/Typescript, HTML, CSS + React", "Backend: Python + Flask", "Database: SQL, elasticsearch, neo4j"]},
        {header: "Researcher skills", bullets: ["SEM-EDS", "XPS (ESCA)", "Broad Ion Beam", "etc..."]},
    ]
}

const work = {
    url: "/work",
    categoryHeader: "Work history",
    listItems: [
        {header: "Inbot (2021)", bullets: ["Junior Full-Stack Developer"]},
        {header: "Microsoft (2019)", bullets: ["Laboratory engineer (HoloLens R&D)"]},
        {header: "Top Analytica (2011-2019)", bullets: ["Team Leader in asbestos analysis", "Researcher", "Master Thesis Work"]}
    ]
}


export { education, skills, work }