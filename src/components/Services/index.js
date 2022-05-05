import React from 'react'
import Icon1 from '../../images/svg-3.svg'
import Icon2 from '../../images/svg-6.svg'
import Icon3 from '../../images/svg-1.svg'
import Icon4 from '../../images/svg-7.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, 
    ServicesIcon, ServicesH2, ServicesP} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="vconsult" >
        <ServicesH1>
            Our Services
        </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>
                    Video Consultation
                </ServicesH2>
                <ServicesP>
                    Get in touch with any desired Medical Professional Online or near you and get diagnosed.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>
                    Appointment Booking
                </ServicesH2>
                <ServicesP>
                    Book an Appointment with your Choice of Doctor or Hospital hassel free.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>
                   Patient Management
                </ServicesH2>
                <ServicesP>
                    We provide  EMR possessing CRM software and Dashboard for Doctors.
                </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon4}/>
                <ServicesH2>
                    Labtests and Surgeries
                </ServicesH2>
                <ServicesP>
                    Surgeries and LabTests now covered under one roof. Book one Now!.
                </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services