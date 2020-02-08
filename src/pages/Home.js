import React from 'react'

import { getServices } from '../store'
import ServiceItem from '../components/service/ServiceItem'

class Home extends React.Component {
  state = {
    services: []
  }

  componentDidMount(){
    const services = getServices()
    this.setState({services:services})
  }

  renderServices = (services) => {
    return services.map(service =>
      <ServiceItem service={service} key={service.id} />
    )
  }

  render() {
    const { services } = this.state
    return (
      <div>

        <section className="hero is-default is-bold">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-vcentered">
                <div className="column is-5 is-offset-1 landing-caption">
                  <h1 className="title is-1 is-bold is-spaced">
                      Learn, Collaborate.
                  </h1>
                  <h2 className="subtitle is-5 is-muted">Lorem ipsum sit dolor amet is a dummy text used by typography industry </h2>
                  <p>
                    <a className="button cta rounded primary-btn raised">
                        Get Started
                    </a>
                  </p>
                </div>
                <div className="column is-5 is-offset-1">
                  <figure className="image is-4by3">
                      <img src={process.env.PUBLIC_URL + '/worker.svg'} alt="Description" />
                  </figure>
                </div>
              </div>
            </div>
          </div>


        </section>

        <section className="section section-feature-grey is-medium">
          <div className="container">
            <div className="title-wrapper has-text-centered">
              <h2 className="title is-2">Great Power Comes </h2>
              <h3 className="subtitle is-5 is-muted">With great Responsability</h3>
              <div className="divider is-centered"></div>
            </div>

            <div className="content-wrapper">
              <div className="columns">

                { this.renderServices(services) }


              </div>
            </div>
          </div>
        </section>

      </div>
    )
  }
}

export default Home
