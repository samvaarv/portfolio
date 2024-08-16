import { useState, useEffect } from "react";

export default function Works() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getProjects = async () => {
      let response = await fetch("http://localhost:8888/api/projects");
      let data = await response.json();
      setProjects(data);
    };
    getProjects();
  }, []);

  // Function to parse imageSet string into srcSet format
  const parseSrcSet = (imageSet) => {
    return imageSet
      .split(", ") // Split by ', ' to get individual entries
      .map((entry) => {
        const [src, descriptor] = entry.split(" "); // Split by space to get src and descriptor
        return `http://localhost:8888/${src} ${descriptor}`;
      })
      .join(", "); // Join back into a single string with ', ' separator
  };

  return (
    <section id="works" className="section-padding">
      <h2 className="section-heading">My Works.</h2>
      <div className="works-block">
        {projects.map((project) => (
          <div className="work" key={project.id}>
            <a href="#" className="group" target="_blank">
              <div className="works-image-block">
                <img
                  srcSet={parseSrcSet(project.imageSet)}
                  src={`http://localhost:8888/${project.image}`}
                  alt={project.altText}
                />
              </div>
              <div className="works-content-block">
                <h3>{project.name}</h3>
                <div className="works-content-tags">
                  {project.tags.map((tag, index) => (
                    <span className="outline-tags" key={index}>
                      {tag}
                    </span>
                  ))}
                  <span className="date-tags">{project.date}</span>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className="row">
        <a href="#" className="more-btn">
          <span className="bg-span">
            <span></span>
          </span>
          <span className="link-text relative">
            <span className="text-outer">
              <span className="text">More Works</span>
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}
