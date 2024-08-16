import { useState, useEffect } from "react";

export default function Services() {
  const [services, setServices] = useState(null);

  useEffect(() => {
    const getServices = async () => {
      try {
        let response = await fetch("http://localhost:8888/api/services");
        let data = await response.json();
        setServices(data);
      } catch (err) {
        console.error("Failed to fetch services", err);
      }
    };
    getServices();
  }, []);

  if (!services) return <div>Loading...</div>;

  return (
    <section id="services" className="section-padding">
      <div className="services-header-block w-100">
        <h2 className="section-heading">{services.header.title}</h2>
        <p className="body-text-two">{services.header.description}</p>
      </div>
      <div className="services-body-block w-100">
        {services.services.map((service, index) => (
          <div className="services-category" key={index}>
            <div className="services-category-title-block">
              <img
                src={`http://localhost:8888/${service.icon}`}
                alt=""
                aria-hidden="true"
              />
              <h3>{service.title}</h3>
            </div>
            <div className="services-category-body relative">
              <p>{service.description}</p>
              <ul className="services-category-list">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <span className="indicator w-100">{service.indicator}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
