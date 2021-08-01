import fin_flag from '../../images/flags/fin_flag.jpg'
import swe_flag from '../../images/flags/swe_flag.jpg'
import eng_flag from '../../images/flags/eng_flag.jpg'
import fra_flag from '../../images/flags/fra_flag.jpg'

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
    {name: "Finnish", level: "Native", imgsrc: fin_flag},
    {name: "English", level: "Excellent", imgsrc: eng_flag},
    {name: "Swedish", level: "Poor", imgsrc: swe_flag},
    {name: "French", level: "Basics", imgsrc: fra_flag},
]}

export { researcherSkills, developerSkills, languageSkills }