const researcherSkills = {
    header: "Researcher Skills",
    content: [{
        name: "Expert",
        bullets: [
            "SEM-EDS - Scanning Electron Microscopy",
            "XPS (ESCA) - X-ray Photoelectron Spectroscopy",
            "BIB - Broad Ion Beam",
            "LM/PLM - Polarized/Light Microscopy"    
        ]},
        {
        name: "Experience",
        bullets: [
            "Laser diffractometer",
            "XRF - X-ray Fluoresence",
            "TOF-SIMS - Time-of-Flight Secondary Ion Mass Spectroscopy",
            "FTIR - Fourier Transform InfraRed spectroscopy",
            "RAMAN spectroscopy",
            "AFM - Atomic Force Microscopy",   
        ]},
        {
        name: "Laboratory working",
        bullets: [
            "10 year experience in laboratory environment",
            "Cleanroom laboratory working",
            "Sample handling and preparation methods",
            "Equipment maintenance & calibration",
            "Chemicals handling", 
        ]},
]}

const developerSkills = {
    header: "Developer Skills",
    content: [{
        name: "Programming",
        bullets: [
            {items: "Python, Javascript, Typescript", level: "good"},
            {items: "React, Flask", level: "good"},
            {items: "SQL, Neo4j", level: "avg"},
            {items: "C++,C,C#,Java,", level: "basic"}, 
        ]},
        {
            name: "Web Development",
        bullets: [
            {items: "React, Flask", level: "good"},
            {items: "HTML, CSS", level: "good"},
            {items: "Redux", level: "basic"},  
        ]},
        {
            name: "Tools",
        bullets: [
            {items: "VSCode", level: "good"},
            {items: "Unity, Linux", level: "basic"},
            {items: "Video editing", level: "avg"},  
        ]},
]}

const languageSkills = {
    header: "Language skills",
    content: [
    {name: "Finnish", level: "Native", imgsrc: "'../../images/fin_flag.jpg'"},
    {name: "English", level: "Excellent", imgsrc: "'../../images/eng_flag.jpg'"},
    {name: "Swedish", level: "Poor", imgsrc: "'../../images/swe_flag.jpg'"},
    {name: "French", level: "Basics", imgsrc: "'../../images/fra_flag.jpg'"},
]}

export { researcherSkills, developerSkills, languageSkills }