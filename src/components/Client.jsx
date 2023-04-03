import React, { useState, useRef } from "react";
import axios from 'axios';
import ava from "../assets/images/ava.svg";
import history from "../assets/images/history.svg";
import education from "../assets/images/education.svg";
import boook from "../assets/images/boook.svg";
import volunteering from "../assets/images/volunteering.svg";
import awards from "../assets/images/awards.svg";
import publications from "../assets/images/publications.svg";
import membership from "../assets/images/membership.svg";
import patents from "../assets/images/patents.svg";
import skills from "../assets/images/skills.svg";
import coverletter from "../assets/images/coverletter.svg";
import Topbar from "./Topbar";
import PersonalInfo from "./clientInfo/PersonalInfo";
import WorkHistory from "./clientInfo/WorkHistory";
import Skills from "./clientInfo/Skills";
import CoverLetter from "./clientInfo/CoverLetter";
import Accordion from "./clientInfo/Accordion";
import Education from "./clientInfo/Education";
import Certificate from "./clientInfo/Certificate";
import Volunteering from "./clientInfo/Volunteering";
import Awards from "./clientInfo/Awards";
import Publications from "./clientInfo/Publications";
import Membership from "./clientInfo/Membership";
import Patents from "./clientInfo/Patents";
import Sidebar from "./Sidebar";
// import file from '../assets/file/resume.docx'

const Client = () => {
  
  const [finalData, setFinalData] = useState({});
  const componentRef = useRef();
  const [personalInfoData, setPersonalInfoData] = useState();
  const [personalInfoDescription, setPersonalInfoDescription] = useState();
  const [workHistoryData, setWorkHistoryData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [certificatesData, setCertificatesData] = useState([]);
  const [volunteeringData, setVolunteeringData] = useState([]);
  const [awardsData, setAwardsData] = useState([]);
  const [publicationsData, setPublicationsData] = useState([]);
  const [membershipData, setMembershipData] = useState([]);
  const [patentsData, setPatentsData] = useState([]);
  const [coverletterData, setCoverletterData] = useState([]);


  const downloadCVHandler = async () => {
    const data = {
        "first_name": personalInfoData?.first_name,
        "last_name": personalInfoData?.last_name,
        "phone": personalInfoData?.phone,
        "email": personalInfoData?.email,
        "location": personalInfoData?.location,
        "portfolio": personalInfoData?.portfolio,
        "description": personalInfoData?.description,
        "work_history": workHistoryData,
        "education": educationData,
        "certificates": certificatesData,
        "volunteering": volunteeringData,
        "awards": awardsData,
        "publications": publicationsData,
        "membership": membershipData,
        "patents": patentsData,
        "skills": ["Web Development", "Web Designing"],
        "cover_letter": coverletterData
    }  

    console.log(data)

    const config =  {
      headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }

    const response = await axios.post('http://127.0.0.1:5000/download_cv', data, config)
    if(response.status === 200) {
      const link = document.createElement("a");
    import('../assets/file/resume.docx')
    .then((module) =>{ 
      link.href = module.default;
      link.download = "file.docx";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch((err) => console.log(err));
    }
  }



  const ClientTabs = [
    {
      id: "one",
      title: "Personal Information",
      icon: ava,
      content: (
        <PersonalInfo
          setPersonalInfoData={setPersonalInfoData}
          setPersonalInfoDescription={setPersonalInfoDescription}
        />
      ),
    },
    {
      id: "three",
      title: "Work History",
      icon: history,
      content: <WorkHistory setWorkHistoryData={setWorkHistoryData} />,
    },
    {
      id: "four",
      title: "Education",
      icon: education,
      content: <Education setEducationData={setEducationData} />,
    },
    {
      id: "five",
      title: "Certificates",
      icon: boook,
      content: <Certificate setCertificatesData={setCertificatesData} />,
    },
    {
      id: "six",
      title: "Volunteering",
      icon: volunteering,
      content: <Volunteering setVolunteeringData={setVolunteeringData} />,
    },
    {
      id: "seven",
      title: "Awards",
      icon: awards,
      content: <Awards setAwardsData={setAwardsData} />,
    },
    {
      id: "eight",
      title: "Publications",
      icon: publications,
      content: <Publications setPublicationsData={setPublicationsData} />,
    },
    {
      id: "nine",
      title: "Membership",
      icon: membership,
      content: <Membership setMembershipData={setMembershipData} />,
    },
    {
      id: "ten",
      title: "Patents",
      icon: patents,
      content: <Patents setPatentsData={setPatentsData} />,
    },
    {
      id: "eleven",
      title: "Skills",
      icon: skills,
      content: <Skills setWorkHistoryData={setWorkHistoryData} />,
    },
    {
      id: "thirteeen",
      title: "Cover Letter",
      icon: coverletter,
      content: <CoverLetter setCoverletterData={setCoverletterData} />,
    },
  ];

  return (
    <div className="w-full pb-40">
      <div>
        <div>
          <Sidebar />
        </div>
        <Topbar />
        <div className="ml-[160px]">
          <div className="flex mt-16 gap-28">
            <div>
              {ClientTabs.map((item) => {
                return (
                  <Accordion
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                    content={item.content}
                  />
                );
              })}
            </div>

            <div className="flex flex-col items-center gap-4 mt-4 text-grey">
              <span>Save</span>
              <button onClick={downloadCVHandler}>Download CV</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Client;
