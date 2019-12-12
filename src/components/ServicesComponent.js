import React from 'react';
import { Icon } from './Icon';

const ServicesComponent = ({ title, serviceList }) => (
  <div className="services">
    <div className="services__wrapper">
      <h2 class="services__title">{title}</h2>
      <div class="services__col">
        {
          serviceList && serviceList.length > 0 && serviceList.map((service, i) => 
              <div key={i} class="services__col-item">
                <div class="services__col-item-icon">
                  <Icon icon={service.icon} />
                </div>
                <p class="services__col-item-text">{service.text}</p>
              </div>
          )
        }
      </div>
    </div>
  </div>
)

export default ServicesComponent;