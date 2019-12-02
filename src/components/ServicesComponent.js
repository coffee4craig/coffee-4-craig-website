import React from 'react';

const ServicesComponent = ({ title, serviceList }) => (
  <div className="services-component">
    <div className="services__wrapper">
      <h2 class="services__title">{title}</h2>
      <div class="services__col">
        {
          serviceList.map((service, i) => 
              <div key={i} class="services__col-item">
                {service.icon}
                <p>{service.text}</p>
              </div>
          )
        }
      </div>
    </div>
  </div>
)

export default ServicesComponent;