import { ProjectType } from "types";

export const getAge = (birthday: string):number => {
    const today = new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

export const projects:ProjectType[] = [
    {
        name: 'mytaggie',
        skills: ['Front-end', 'Back-end', 'React', 'MySQL'],
        description: 'The first remote platform that facilitates the understanding of ideas through attachable multimedia nodes.',
        headerAsset: ['taggie-header1.jpg', 'taggie-header2.jpg', 'taggie-header3.jpg', 'taggie-header4.jpg', 'taggie-header5.jpg', 'taggie-header6.jpg'],
    },
    {
        name: 'atom8',
        skills: ['Front-end', 'Back-end', 'UX'],
        description: 'An integral ERP for e-commerce business owners. Automating data entry and actionable insights.',
        headerAsset: ['atom-h-1.jpg', 'atom-h-2.jpg', 'atom-h-3.jpg', 'atom-h-4.jpg', 'atom-h-5.jpg', 'atom-h-6.jpg', 'atom-h-7.jpg', 'atom-h-8.jpg'],
    },
    {
        name: 'path',
        skills: ['Front-end', 'Back-end', 'Laravel'],
        description: 'International examinations platform. Developed to preserve the health and safety of candidates due to the COVID-19 outbreak.',
        headerAsset: ['header0.jpg', 'header2.jpg', 'header3.jpg', 'header4.jpg', 'header5.jpg', 'header6.jpg'],
    },
    {
        name: 'fluxq',
        skills: ['Front-end', 'UX'],
        description: 'Appointment manager for the pharmaceutic industry. Currently present in dozens of physical commerces.',
        headerAsset: ['fluxq-header1.jpg', 'fluxq-header2.jpg', 'fluxq-header3.jpg', 'fluxq-header4.jpg'],
    },
]

