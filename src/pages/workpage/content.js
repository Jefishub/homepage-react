
const workHistory = {
    header: "Work history",
    content: [
        {name: "Inbot Oy - 2021",
        roles: [{
            title: "Junior Full-Stack Developer",
            bullets: [
                {start: "Front-End", end: ": Typescript, React, Redux"},
                {start: "Back-End", end: ": Python, Flask"},
                {start: "DataBase", end: ": SQL, Neo4j, elasticsearch"},
        ]}]},

        {name: "Microsoft (via VMP oy) - 2019",
        roles: [{
            title: "Laboratory Engineer, Hololens R&D, Espoo",
            bullets: [
                {start: "", end: "Hardmastering team"},
                {start: "", end: "Characterization of Waveguide nanostructures"},
                {start: "", end: "Sample handling"},
        ]}]},

        {name: "Top Analytica Oy - 2011-2019",
        roles: [{
            title: "Researcher, Team leader in Asbestos analysis (2016-2019)",
            bullets: [
                {start: "Asbestos Analysis", end: ": team leading, analysis, process developement, customer collaboration, marketing"},
                {start: "Research tasks", end: ": Sample preparation, Sample analysis, reporting, customer collaboration, marketing"},
                {start: "Laboratory management", end: ": Person in Charge for XPS, BIB (secondary: SEM, FTIR, CA)"},
                {start: "Office", end: ": IT support, Social Media, Web page upkeep"},
        ]},
        {
            title: "Researcher (2014-2016)",
            bullets: [
                {start: "Research tasks", end: ": Sample preparation, sample analysis, reporting, customer collaboration"},
                {start: "Laboratory management", end: ": Person in charge for BIB (secondary: SEM, FTIR, CA)"},
                {start: "Office", end: ": IT support"},
        ]},
        {
            title: "Research Assistant / Master's thesis (2012-2014)",
            bullets: [
                {start: "Research tasks", end: ": Sample preparation, sample analysis"},
                {start: "Laboratory management", end: ": Person in charge for BIB"},
                {start: "Experience", end: ": SEM-EDS, BIB, XPS , Contact Angle, FTIR"},
                {start: "Master's thesis", end: ": The use of Broad Ion Beam (BIB) in microanalytical sample preparation"},
                {start: <a href="https://www.topanalytica.com/_media_17688_/Pro_Gradu_-_Jere_Manni_2012.pdf" target="_blank">Pro Gradu link</a>, end: ""},
                {start: "", end: ": Setting up new equipment (BIB), theoretical analysis, learning to use and manage BIB, testing with various samples, SEM imaging"},
        ]},
        {
            title: "Summer trainee (2011)",
            bullets: [
                {start: "Research tasks", end: ": Sample preparation, sample analysis"},
                {start: "Experience", end: ": SEM-EDS, Contact Angle"},
        ]}]},

        {name: "University of Turku - 2009",
        roles: [
            {title: "Summer trainee at Laboratory of Materials Science",
            bullets: [
                {start: "", end: "Sample handling"},
                {start: "", end: "XPS-measurements"},
                {start: "", end: "AFM-measurements"},
        ]}]},

        {name: "Posti - summer 2007,2008,2010",
        roles: [
            {title: "Summer trainee at Laboratory of Materials Science",
            bullets: [
                {start: "", end: "Newspaper deliver, summer helper"},
        ]}]},
]}

const publications = {
    header: "Publications",
    content: [
        {name: "",
        bullets: [
            "Saarimaa V. et co. (2018)",
            <em>Tailoring of Versatile Surface Morphologies on Hot Dip Galvanized Steel in Wet CO2: Aspects on Formation, Barrier Properties, and Utilization as a Substrate for Coatings</em>,
            "ACS Applied Materials & Interfaces, 10(25), pp 21730-21739",
            <p>doi: <a href="https://pubs.acs.org/doi/10.1021/acsami.8b05034" target="_blank">10.1021/acsami.8b05034</a></p>
        ]},
        {name: "",
        bullets: [
            <p>Saarimaa V., Markkula A., Arstila K., <strong>Manni J.</strong> and Juhanoja J., (2016)</p>,
            <em>Effect of Hot Dip Galvanized Steel Surface Chemistry and Morphology on Titanium Hexafluoride Pretreatment</em>,
            "Surface and Interface Analysis, 46, pages 620–624",
            <p>doi: <a href="https://www.scirp.org/journal/paperinformation.aspx?paperid=74041" target="_blank">10.4236/ampc.2017.72004</a></p>
        ]},
        {name: "",
        bullets: [
            <p>Saarimaa V., <strong>Manni J.</strong>, Kauppinen E., Markkula A., Juhanoja J. and Skrifvars B.-J. (2014)</p>,
            <em>High-resolution microscopy of thin pretreatment layers on hot dip galvanized steel</em>,
            "ACS Applied Materials & Interfaces, 10(25), pp 21730-21739",
            <p>doi: <a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/sia.5626" target="_blank">10.1002/sia.5626</a></p>
        ]},
]}

const secondaryOccupations = {
    header: "Secondary Occupations",
    content: [
        {name: "",
        bullets: [
            "Dance Teacher - Turku Swing Society, 2018-2019",
            "Ice Hockey Coach / Instructor - Taru Hockey, 2018",
            "Private Techer (Math/Physics) - Tuutorikeskus, 2016",
        ]},
]}

const responsibilities = {
    header: "Responsibilities",
    content: [
        {name: "",
        bullets: [
            "Member of the board - As Oy Nummenkorva, 2017 -> ",
        ]},
]}

export { workHistory, publications, secondaryOccupations, responsibilities }