import React from "react";
import "./SoftwareSkill.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  const languagesAndTools = [
    {
      name: "Java",
      logoUrl:
        "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white"
    },
    {
      name: "Python",
      logoUrl:
        "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
    },
    {
      name: "JavaScript",
      logoUrl:
        "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
    },
    {
      name: "Kotlin",
      logoUrl:
        "https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white"
    },
    {
      name: "TypeScript",
      logoUrl:
        "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
    },
    {
      name: "HTML",
      logoUrl:
        "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
    },
    {
      name: "CSS",
      logoUrl:
        "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
    },
    {
      name: "C++",
      logoUrl:
        "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white"
    },
    {
      name: "C#",
      logoUrl:
        "https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white"
    },
    {
      name: "Git",
      logoUrl:
        "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
    },
    {
      name: "Figma",
      logoUrl:
        "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white"
    },
  ];

  const frameworks = [
    {
      name: "React",
      logoUrl:
        "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
    },
    {
      name: "NodeJS",
      logoUrl:
        "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
    },
    {
      name: "Redis",
      logoUrl:
        "https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white",
    },
    {
      name: "MySQL",
      logoUrl:
        "https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"
    },
    {
      name: "PostgreSQL",
      logoUrl:
        "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
    },
    {
      name: "MongoDB",
      logoUrl:
        "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
    },
    // {
    //   name: "Truffle",
    //   logoUrl:
    //     ""
    // },
    // {
    //   name: "Ganache",
    //   logoUrl:
    //     ""
    // },
    {
      name: "Matlab",
      logoUrl:
        "https://img.shields.io/badge/Matlab-AC9EBF.svg?style=for-the-badge"
    },
    {
      name: "Android Studio",
      logoUrl:
        "https://img.shields.io/badge/Android%20Studio-3DDC84.svg?style=for-the-badge&logo=android-studio&logoColor=white"
    },
    {
      name: "Unity Engine",
      logoUrl:
        "https://img.shields.io/badge/unity-%23000000.svg?style=for-the-badge&logo=unity&logoColor=white"
    },
    {
      name: "AWS",
      logoUrl:
        "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"
    },
    {
      name: "Google Cloud",
      logoUrl:
        "https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white"
    },
    // Add more frameworks here
  ];

  return (
    <div>
      <div className="software-skills-main-div">
        <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
          <div className="px-2 w-1/2">
            <p style={{ fontSize: "25px" }}>Languages and Tools</p>
            <div className="flex flex-wrap justify-center items-start w-full mt-2">
              {languagesAndTools.map((language, i) => (
                <img
                  key={i}
                  className="m-4" 
                  src={language.logoUrl}
                  alt={language.name}
                />
              ))}
            </div>
          </div>
          <div className="px-2 flex flex-wrap items-start w-1/2">
            <p style={{ fontSize: "25px" }}>Frameworks</p>
            <div className="flex flex-wrap justify-center items-start w-full mt-2">
              {frameworks.map((framework, i) => (
                <img
                  key={i}
                  className="m-4"
                  src={framework.logoUrl}
                  alt={framework.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
