import './Faculty.css'
import FacultyCard from './FacultyCard'

const Faculty = () => {
  const name='Dr. John Doe';
  const position='Associate Professor';
  const mail='mail@mail.com'
    return (
        <div className='faculty'>
        <div className='faculty-heading'>Faculty Advisors</div>
        <div className='faculty-crew'>
          <FacultyCard name={name} position={position} mail={mail}/>
          <FacultyCard name={name} position={position} mail={mail}/>
          <FacultyCard name={name} position={position} mail={mail}/>
        </div>
      </div>
    )
}

export default Faculty;