import { BotMessageSquare, LucideSkull } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import {Home} from "lucide-react";
import {Skull } from "lucide-react";
import {CircleDollarSign} from "lucide-react";
import {GraduationCap } from "lucide-react"
import {Handshake} from "lucide-react"
import {Disc2 } from "lucide-react"
import{Link} from "react-router-dom"

import umaragwan from "../assets/profile-pictures/umaragwan.jpg";
import sulaimanagwan from "../assets/profile-pictures/sulaimanagwan.jpg";
import sulaimanaligogda from "../assets/profile-pictures/sulaimanaligogda.jpg";
import umarhasan from "../assets/profile-pictures/umarhasan.jpg";
import sattarderaiya from "../assets/profile-pictures/sattarderaiya.jpg";
import abdullahsulaiman from "../assets/profile-pictures/abdullahsulaiman.jpg";

export const navItems = [
   {label:"Home",href:"/Home"},
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "#" },
  { label: "Contact", href: "/contact" },
  { label: "Head members", href: "/founders" },
 
];

export const testimonials = [
  {
    user: "Umar Muhammad",
    company: "Agwan",
    image: umaragwan,
    text:"Umar Muhammad son of Muhammad Waraim Agwan belong to Ghadhakda village in Gujarat India"
  },
  {
    user: "Sulaiman Wali",
    company: "Agwan",
    image: sulaimanagwan,
    text: "Sulaiman Wali  son of Wali Muhammad Agwan belong to Babra village in Gujarat India.He served the  community as a president for many years ",
  },
  {
    user: "Umar Hasan",
    company: "Malaviya",
    image: umarhasan,
    text: "Umar Hasan son of Hasan Malaviya belong to Bilkha village in Junagadh taluka in Gujarat India.He worked as an Editor in Dawn newspaper",
  },
  {
    user: "Abdul-Sattar Ismail",
    company: "Deraiya",
    image: sattarderaiya,
    text: " Abdul-Sattar son of Ismail Deraiya belong to Damnagar village in Gujarat India.",
  },
  {
    user: "Abdullah Sulaiman",
    company: "Radhanpura",
    image: abdullahsulaiman,
    text: "Abdullah sulaiman son of Sulaiman Radhanpura belong to Ahmedabad city in Gujarat India",
  },
  {
    user: "Sulaiman Ali",
    company: "Gogda",
    image: sulaimanaligogda,
    text: "Sulaiman ali son of Muhammad Ali Gogda belong to Tansa village in Gujarat India ",
  },
];

export const features = [
  {
    icon: <GraduationCap /> ,
    text: "Education free",
    description:
      "Community will pay your children's school and tuition fee",
  },
  {
    icon: <Fingerprint />,
    text: "Loans for Business",
    description:
      "Coummunity will provide you capital to start a business",
  },
  {
    icon: <ShieldHalf />,
    text: "Medical services",
    description:
      "Community will help you in medical treatments after verifying your work and medical history",
  },
  {
    icon: <Home/>,
    text: "Monthly Groceries budget",
    description:
      "Community will give you monthly grossery budget after verifying your salary",
  },
  {
    icon: <Handshake />,
    text: "Amount for Marriges",
    description:
      "Community will arrange furniture,household accessories and will bear all expenses of marrige after verifying documents",
  },
  {
    icon: <GlobeLock />,
    text: "Death Rituals",
    description:
      "Community will not forget you in difficult times on death of any member they will manage all things related with death rituals such as transport,lunch for guests and graveyard expenses ",
  },
  {
    icon: <LucideSkull />,
    text: "GraveYard maintenance",
    description:
      "Taking care of graveyard's needs such as Graveyard's lights,water and cutting down of bushes will be our responsibility",
  },
  {
    icon:  <CircleDollarSign />,
    text: "Zakat services",
    description:
      "your zakat will be handed to rightful person in the community",
  },
  {
    icon: <Disc2 />,
    text: "Eid ul Adha services",
    description:
      "Meat after Qurbani will be given to families who dont sacrifice",
  },
];
export const contacts=[  {
  title: "Email",
  description:
    "Sorathiamuslimghanchi@gmail.com",
    href:"mailto:sorathiamuslimghanchi@gmail.com"
},
{
  title: "Phone-number",
  description:
    "0317-2578710",
},
{
  title: "Address",
  description:
   "V3V2+5RH, jamatkhana Road, PIB Colony, Karachi, Karachi City, Sindh",
   href:"https://maps.app.goo.gl/JUHCpELp6YLAJC6dA"
},];

export const checklistItems = [
  {
    title: "Election after 3 years",
    description:
      "Democracy after every three years for the position of community president",
  },
  {
    title: "Computerized cards",
    description:
      "Every 18 year person can vote through this card",
  },
  {
    title: "unbiased Result",
    description:
      "only after 1 hour unbiased result on the basis of majority votes",
  },
  {
    title: "Oath Ceremony",
    description:
      "oath of heads of each section of community infront of all council members",
  },
];

export const pricingOptions = [
  {
    title: "Zakat",
    
    features: [
      "through bank transfer",
      
      "available 24/7",
      "given to needy persons",
     
    ],
  },
  {
    title: "Fitrah",
    
    features: [
      "through bank transfer",
      "Service availaible till eid's morning",
      "Privacy Guaranteed",
    ],
  },
  {
    title: "Charity",
    features: [
      "through bank transfer",
      "available 24/7",
      "Privacy guaranteed",
    ],
  },
];

export const resourcesLinks = [
  {href: "/posts/categories/marriges", text: "Recent marriges"  },
  { href: "/posts/categories/deaths", text: "Recent deaths" },
  { href: "/posts/categories/warnings", text: "Warning to members" },
  { href: "/posts/categories/notifications", text: "Notifications" },
  { href: "/posts/categories/communityforms", text: "Community Forms" },
];

export const platformLinks = [
  { href: "#", text: "Educational Commitee event" },
  { href: "#", text: "Webinars" },
  { href: "/elections", text: "Elections" },
  { href: "#", text: "General-body-ijlaas" },
  { href: "#", text: "welcoming pilgrims" },
];

export const communityLinks = [
  { href: "https://ia801906.us.archive.org/20/items/dli.ernet.4189/4189-Hindu%20Castes%20And%20Sects.pdf", text: "Law Book" },
  { href: "#", text: "Members book" },
  { href: "/clans", text: "Clans history" },
  { href: "#", text: "Presidential history" },
  { href: "#", text: "Sectional head of each commitee" },
];
export const clans=[
  {user:"Agwan",
  text:"Agwan is the largest clan in sorathia muslim ghanchi jamat,karachi.This clan is also in junagadh ghanchi jamat as well as in gujarati turks,silawat castes.The sorathia and junagadia Agwan belongs to  Bilkha,Junagadh,Gadhakra,Babra,Bagdu,Talalageer, Bhavnagar, Sawar Kundla with 11 different  races in Ghanchis in karachi.according to sources,The word Agwan orignated from the word 'Aage-vaan' which is used in many languages in subcontinent meaning the guide or the leader.Agwans have migrated to indian Gujarat and Rajasthan from the afghanistan or nearby turkey.at the time of war of alauddin khilji ,mahmud ghaznavi or the war when Akbar was defeated by Afghnistan people and Birbal was killed in the war and these people then migrated to indian states.They were muslim immigrants as Sayyed ,khilji,Behlim and Tajik who mixed with  silawat caste, Ghanchi caste and gujarati-turks.there is also a village named Agwan in maharashtra india.may the agwans have firstly migrated to that place then they dispersed in india or agwan village maybe the center of the agwan tribes in the past and also a deity worshipped by Hindu named agwan-deo.This surname is also found in some hindus either they mixed with muslim Agwans or their surname was aagevaan which was changed to agwan.or may be agwans were basically from indian castes which then converted to Islam but first opinion is more reliable"
},
{user:"Bilaikhiya",
  text:""
},
{user:"Parmar",
  text:"It is the 3rd Largest Clan in Sorathia Muslim Ghanchi jamat,Karachi as well as in Zalawadiya ,kutchi and jhalavad ghanchi jamats as well as in non gujarati castes .Parmars clan of sorathia belongs to mahuava,Gadhra,Jasdan,Wasawar The Paramara dynasty was the ruling dynasty of Kingdom of Malwa in west-central India between 9th and 14th centuries. They belonged to the Parmara clan of the Rajputs.The dynasty was established in either the 9th or 10th century. By the time of his King Munja, the Malwa region in present-day Madhya Pradesh had become the core Paramara territory, with Dhara (now Dhar) as their capital."
},
{user:"Deraiya",
  text:""
},
{user:"Shekhda",
  text:""
},
{user:"Malaviya",
  text:"Malaviya clan in Sorathia ghanchi jamat has large number of families belonging to indian villages of Bilkha,Badhair,Talalageer ,Sardhar.They are also found in other ghanchi jamats and non gujarati castes.sometimes the surname is pronouned as marawiya.The word Malviya literally means those from Malwa in Central India.They can be trace back to rajputs "
},
{user:"Gogda",
  text:""
},
{user:"Rathore",
  text:""
},
{user:"Sodha",
  text:"Sodha is a clan in sorathia muslim ghanchi jamat,karachi as well as in junagadh ghanchi and other than ghanchi castes.Sodhas of sorathia Ghanchi basically belong to Bilkha village in Junagadh Taluka.They are off-shoot of Parmara Rajputs, who once controlled regions of Malwa and later North-West parts of Rajasthan. The area around Suratgarh was called 'Sodhawati' and south-east of Bhatner was once occupied by the Sodha Rajputs before being evicted from these regions by Bhati Rajputs, after which they moved their base to Thar desert."
},
{user:"Sayyed",
  text:""
},
{user:"Sarawiya",
  text:""
},
{user:"Borater",
  text:""
},
{user:"Dayater",
  text:""
},
{user:"Kalwater",
  text:""
},
{user:"Mahida",
  text:""
},
{user:"Bawariya",
text:""
},
{user:"Waraiya",
  text:""
},
{user:"Lukha",
  text:""
},
{user:"Bhukiya",
  text:""
},
{user:"Maiter",
  text:""
},
{user:"Padaya",
  text:""
},
{user:"Sudaisra",
  text:""
},
{user:"Dholakiya",
  text:""
},
{user:"Ghoghari",
  text:""
},
{user:"Jethwa",
  text:""
},
{user:"Solanki",
text:"Solanki Clan in sorathia muslim Ghanchi Jamat, karachi is small clan belonging to  .This clan is also in other Ghanchi jamats as well as in non gujarati castes.Solanki also known as Chaulukya are originally associated with the Rajputs.Solanki dynasty  ruled parts of what are now Gujarat and Rajasthan in north-western India, between c. 940 CE and c. 1244 CE. Their capital was located at Anahilavada (modern Patan). At times, their rule extended to the Malwa region in present-day Madhya Pradesh."
},{user:"Kabra",
text:""
},{user:"Modan",
text:""
},{user:"Modi",
text:""
},{user:"Panseriya",
text:""
},{user:"Payak",
text:""
},{user:"Chotaliya",
text:""
},{user:"Chohan",
text:""
},{user:"Sarmari",
text:""
},{user:"Chopda",
text:""
},{user:"Mithani",
text:""
},{user:"Kachra",
text:""
},{user:"Radhanpura",
text:""
},{user:"Sorathiya",
text:""
},{user:"Kalwaniya",
text:""
},{user:"Bhatti",
text:""
},{user:"Gondigara",
text:""
},
]
