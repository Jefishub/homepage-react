const education = {
    url: "/education",
    header: "Education",
    listItems: [
        {item: "Haaga-Helia University of Applied Sciences, 2020 - (2022)", bullets: ["Bachelor of Business Administration (Ongoing)"]},
        {item: "Taitotalo, 2020 - 2021", bullets: ["Vocational Qualification"]},
        {item: "University of Turku, 2005 - 2012", bullets: ["Master of Science (Physics/Materials Science)"]}
    ]
  }

const skills = {
    url: "/skills",
    header: "Skills",
    listItems: [
        {item: "Developer skills", bullets: ["Frontend: Java/Typescript, HTML, CSS + React", "Backend: Python + Flask", "Database: SQL, elasticsearch, neo4j"]},
        {item: "Researcher skills", bullets: ["SEM-EDS", "XPS (ESCA)", "Broad Ion Beam", "etc..."]},
    ]
}

const work = {
    url: "/work",
    header: "Work history",
    listItems: [
        {item: "Inbot (2021)", bullets: ["Junior Full-Stack Developer"]},
        {item: "Microsoft (2019)", bullets: ["Laboratory engineer (HoloLens R&D)"]},
        {item: "Top Analytica (2011-2019)", bullets: ["Team Leader in asbestos analysis", "Researcher", "Master Thesis Work"]}
    ]
}


export { education, skills, work }