import React from "react";

import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$35/hour",
      location: "Mumbai, India",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$55/hour",
      location: "Mumbai, India",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$40/hour",
      location: "Mumbai, India",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$60/hour",
      location: "Mumbai, India",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      companyName: "Netflix",
      datePosted: "1 week ago",
      post: "Web Application Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hour",
      location: "Mumbai, India",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$38/hour",
      location: "Mumbai, India",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
      companyName: "Tesla",
      datePosted: "6 weeks ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$58/hour",
      location: "Mumbai, India",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      companyName: "IBM",
      datePosted: "10 weeks ago",
      post: "Frontend Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$30/hour",
      location: "Mumbai, India",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      companyName: "Oracle",
      datePosted: "8 days ago",
      post: "UI Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$34/hour",
      location: "Mumbai, India",
    },
    {
      logo: "https://tse1.mm.bing.net/th/id/OIP.Z0WaAEp4fOq3Q92Idq29cwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      companyName: "Uber",
      datePosted: "12 days ago",
      post: "Frontend Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$52/hour",
      location: "Mumbai, India",
    },
  ];
  console.log(jobOpenings);
  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return (
          <div className="idx">
            <Card
              company={elem.companyName}
              post={elem.post}
              datePosted={elem.datePosted}
              tag1={elem.tag1}
              tag2={elem.tag2}
              brandLogo={elem.logo}
              pay={elem.pay}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
