import { ProjectType, TextsType, AssetAndTextType, IconType } from "types";
import { projects } from "../index";

export const project:ProjectType = projects[0]

export const texts:TextsType[] = [
    {title: "industry", description: "Project management software."},
    {title: "client", description: "Adrian Alvarado, a Mexico based entrepreneur & arquitect."},
    {title: "duration", description: "7 sprints. 9 months."}
]

export const integrations = [
    {name:'google-auth', des: 'user creation and authentication'},
    {name:'paypal', des: 'dynamic user subscriptions'},
]

export const assetsAndText:AssetAndTextType[] = [
    {
        asset:{
            src:"mytaggie/wire-components.svg",
            width: 470,
            height: 271
        }, 
        text:{
            title: "wireframes",
            description: "The wide collection of functional components in the UI required an extensive wireframing phase."
        }
    },
    {
        asset:{
            src:"mytaggie/components.png",
            width: 1235,
            height: 708
        }, 
        text:{
            title: "functional components",
            description: "With colors and design guidelines in place, components succesfully merged with the playful tone across taggie's brand image."

        }
    },
    {
        asset:{
            src:"mytaggie/taggie-demo.gif"
        }, 
        text:{
            title: "left and right connects",
            description: "An overview of both ends of the platform in action. The result is a stunningly fast canvas for streaming ideas."
        }
    }
]

export const icons:IconType[] =[
    {title: "multimedia", description: "Work with images, videos and .pdf files.", src: "multimedia.png"},
    {title: "validate", description: "Share project related polls for feedback.", src: "valida.png"},
    {title: "collaborate", description: "Take on team projects collaboratively.", src: "colabora.png"},
]

export const process = {col1: "Taggie allows users to create projects and share them with friends and co-workers. It is equiped with an integrated chat and user generated polls among many other features that allow collaborative work.", col2: "It was the most robust front-end project I had the opprtunity to engage with. The high dimension of nested components displayed the importance of working with a deliberate modular design system."}

export const quote = {quote: "Juan went above and beyond in terms of quality. The webapp's functionality is top-notch.", source: "Adrian Alvarado - CEO"}
