import './Stats.css'

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBCardSubTitle
} from 'mdb-react-ui-kit';

const Stats = () => {
    return (
        <div className="stats">

            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                <MDBCol>
                    <MDBCard className='h-100 img-fluid z-depth-1 wow zoomIn' alignment='center'>
                        <MDBCardBody>
                            <MDBCardTitle className='stats-heading'>Heading</MDBCardTitle>
                            <MDBCardSubTitle className='stats-num'>99</MDBCardSubTitle>
                            <MDBCardText>
                                This is a longer card with supporting text below as a natural lead-in to additional content.
                                This content is a little bit longer.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className='h-100' alignment='center'>
                        <MDBCardBody>
                            <MDBCardTitle className='stats-heading'>Heading</MDBCardTitle>
                            <MDBCardSubTitle className='stats-num'>99</MDBCardSubTitle>
                            <MDBCardText>This is a short card.</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard className='h-100' alignment='center'>
                        <MDBCardBody>
                            <MDBCardTitle className='stats-heading'>Heading</MDBCardTitle>
                            <MDBCardSubTitle className='stats-num'>99</MDBCardSubTitle>
                            <MDBCardText>
                                This is a longer card with supporting text below as a natural lead-in to additional content.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </div>
    )
}

export default Stats;