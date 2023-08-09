import React from 'react';
import './CrewMembers.css';
import CrewCard from './CrewCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useSearchParams } from 'react-router-dom';


const crewmembers = [
  {
    name: "Vamshi",
    image: "https://drive.google.com/open?id=1V_ewWCE66kfIygFry2S7SslRS8DcVxp_",
    position: "Brakes",
    text: "https://www.linkedin.com/in/vamshi-lavudya-744190230"
  },
  {
    name: "Siddharth Bharad",
    image: "https://drive.google.com/open?id=1q9XSifjTgXtFcIQz1jNFrjamnQYEkWa4",
    position: "Powertrain",
    text: "https://www.linkedin.com/in/siddharth-bharad-596aa5253"
  },
  {
    name: "Prithish Panchal",
    image: "https://drive.google.com/open?id=1qy5Sox5G4sAiroiwTP8dPkw8UdAGJXas",
    position: "Powertrain",
    text: "https://www.linkedin.com/in/prithish-panchal-06339921a"
  },
  {
    name: "Akshit Tomar",
    image: "https://drive.google.com/open?id=1KvE54AeK7X8pfrKRXE3Q50ID8aiTrKhN",
    position: "Chasis",
    text: "https://www.linkedin.com/in/akshit-tomar-43409425a"
  },
  {
    name: "JAYESH PATIL",
    image: "https://drive.google.com/open?id=1-bG_DEO7aoIL3AWDCLz2JmGOKJ-vPi71",
    position: "Powertrain",
    text: "https://www.linkedin.com/in/jayesh-patil-495b01221"
  },
  {
    name: "Jaykumar Gohel",
    image: "https://drive.google.com/open?id=1uYyjYg52oyMzNXLGkvhsVBiWp80pLD2m",
    position: "Electrical",
    text: "https://www.linkedin.com/in/jay-gohel-85a1a0254"
  },
  {
    name: "Behera Nitish",
    image: "https://drive.google.com/open?id=1TZ4ffezhJKzDzGOs7Yy_oj1ddjJt7Sov",
    position: "Powertrain",
    text: "https://www.linkedin.com/in/nitish-behera-9a9423261"
  },
  {
    name: "Puneet Suvarna",
    image: "https://drive.google.com/open?id=1w8iMIZRBEvhRf3y_TQqJu88AUjGkePrP",
    position: "Chasis",
    text: "https://www.linkedin.com/in/puneet-suvarna-096378277/"
  },
  {
    name: "Jayesh Kailash Patil",
    image: "https://drive.google.com/open?id=1wBgqXBZjys8gyv5d81Hng-L0G_Qlnq5H",
    position: "Powertrain",
    text: "https://www.linkedin.com/in/jayesh-patil-57b18b260"
  },
  {
    name: "Niteesh J",
    image: "https://drive.google.com/open?id=1k1GTxIQ-4G7pwr1ya4WjLRf1FGE7ztUh",
    position: "Sns",
    text: "https://www.linkedin.com/in/niteesh-j-0a3967268"
  },
  {
    name: "Pulkit Garhwal",
    image: "https://drive.google.com/open?id=1n_IBTHVJNGQVberEf-PL9TCRCcUXeHeF",
    position: "Sns",
    text: "https://www.linkedin.com/in/pulkit-garhwal-b77416277"
  },
  {
    name: "Jay Pokal",
    image: "https://drive.google.com/open?id=189my4btV-V6vX3Y7AxyfkNb6VP1FOa0n",
    position: "Powertrain",
    text: "https://www.linkedin.com/in/jay-pokal-671741266"
  },
  {
    name: "Piyush S Bhuriya",
    image: "https://drive.google.com/open?id=1ugGZazTstsAO5EyRl3OED6YcF5E8CBWL",
    position: "Brakes",
    text: "https://www.linkedin.com/in/piyush-bhuriya-404789229"
  },
  {
    name: "Mihirsinh Chauhan",
    image: "https://drive.google.com/open?id=1QDAqqxacc-VA7lW7b8Y3V9gCYsYzsClQ",
    position: "Chasis",
    text: "https://www.linkedin.com/in/mihirsinh-chauhan-5bb437239"
  },
  {
    name: "Meha Virendra Patel",
    image: "https://drive.google.com/open?id=1FLQTLkAxONtML6BlEUyNTkS_w4z5Lkwq",
    position: "Sns",
    text: "https://www.linkedin.com/in/meha-patel-60897b20a"
  },
  {
    name: "Abhishek Pandya",
    image: "https://drive.google.com/open?id=1Adt0CFhIwQXUv9BT4dk8n3hw5ZdRD2ts",
    position: "Brakes",
    text: "https://www.linkedin.com/in/abhishek-pandya-016083277/"
  },
  {
    name: "Hemang Kokate",
    image: "https://drive.google.com/open?id=1ZDxH7E5qersH-C1R1zYQq-s_u6KGvn19",
    position: "Electrical",
    text: "https://www.linkedin.com/in/hemang-kokate-21a705241"
  },
  {
    name: "Dakshraj Parmar",
    image: "https://drive.google.com/open?id=16hzmsFw-_dmQJ4I_Q4fPYfwaYtgg81aY",
    position: "Electrical",
    text: "https://www.linkedin.com/in/dakshraj-parmar-83b53a235"
  },
  {
    name: "Abhinav Gupta",
    image: "https://drive.google.com/open?id=1YKX2OMHrlquW0yrj_ytswyQCFKzQ0k7t",
    position: "Sns",
    text: "https://www.linkedin.com/in/abhinav-gupta-690526228/"
  },
  {
    name: "Devam Vadher",
    image: "https://drive.google.com/open?id=1M7AT4Fnhbx37hC428vEKceo7PKQR3OyN",
    position: "Electrical",
    text: "https://www.linkedin.com/in/devam-vadher-37705b241"
  },
  {
    name: "Durga syamanth",
    image: "https://drive.google.com/open?id=1IYy5X9R3DAgoPKJKsbUxAxYHXsM25bMe",
    position: "Sns",
    text: "https://www.linkedin.com/in/akurathi-durga-syamanth-658062277"
  },
  {
    name: "Vishnu sai Kummari",
    image: "https://drive.google.com/open?id=10eCMPEKWVUYlkOnRh_I1Ykud3_rUayoZ",
    position: "Electrical",
    text: "https://www.linkedin.com/in/k-vishnu-sai-b1a767248"
  },
  {
    name: "Rishabh Gondane",
    image: "https://drive.google.com/open?id=1327v6OWUY1nCBLruOqHvRCrQEzICyB7p",
    position: "Brakes",
    text: "https://www.linkedin.com/in/rishabh-gondane-59a805249"
  },
  {
    name: "Amit B Mahiya",
    image: "https://drive.google.com/open?id=1obIRj3CNrSvs5E-6odUuckKkF3FZHBug",
    position: "Electrical",
    text: "https://www.linkedin.com/in/amit-b-mahiya-279245228"
  },
  {
    name: "Vidhi Prakashbhai Patel",
    image: "https://drive.google.com/open?id=10U9k-MjKCRtM1lW17BH_M3BCxbtX0-it",
    position: "Sns",
    text: "https://www.linkedin.com/in/vidhi-patel-98131a272"
  },
  {
    name: "Priyanshu Kumar",
    image: "https://drive.google.com/open?id=1yAp4byaS5wk7eFAoZurJK847Ze3J1ko1",
    position: "Sns",
    text: "https://www.linkedin.com/in/priyanshu-singh-7aa6aa1b4/"
  },
  {
    name: "Shrey Shalan",
    image: "https://drive.google.com/open?id=1zcQxo6yhPOGAGN_JAq1V-Zrdvgf4c0R1",
    position: "Electrical",
    text: "https://www.linkedin.com/in/shrey-shalan-97565a244"
  },
  {
    name: "Niraj Kalwani",
    image: "https://drive.google.com/open?id=1QCWVvYEYttE5_Y5FyvYP6K7x3AZroyfg",
    position: "Powertrain",
    text: "https://in.linkedin.com/in/niraj-kalwani-615138241"
  },
  {
    name: "MIHIR P",
    image: "https://drive.google.com/open?id=1a1tcDqZMKyHGUl3NMoE7fSKVU0v_uFsM",
    position: "Chasis",
    text: "https://www.linkedin.com/in/mihir-pandor-475169278"
  },
  {
    name: "Yash Katare",
    image: "https://drive.google.com/open?id=15dlfNeNds7LLckHLHbQ6QPuDY0j_2THU",
    position: "Sns",
    text: "https://www.linkedin.com/in/katareyash"
  },
  {
    name: "Shivaram S",
    image: "https://drive.google.com/open?id=1KN-sY7hnxrrhLSkLbVWtKC2Jk-e2ACaZ",
    position: "Sns",
    text: "www.linkedin.com/in/shivaram-s-633aa3268"
  },
  {
    name: "Kancharapu Sai Bhargavi",
    image: "https://drive.google.com/open?id=1ZRTEMjl5GDGlfcWSna-EJPv5mB225NFc",
    position: "Brakes",
    text: "https://www.linkedin.com/in/kancharapu-sai-bhargavi-915505278"
  }


];

const filterFunc = (position) => {
  return (data) => {
    return data.position === position;
  }
}

const CrewMembers = () => {
  const [searchParams] = useSearchParams();
  const year = searchParams.get('year');

  return (
    <div className='crew-members'>
      <div className={`crew-hero ${year == '2024' ? 'crew-2024' : 'crew-2025'}`}>
        <div className='crew-hero-image'>
        </div>
      </div>
      <div className="crew-text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum beatae doloremque fuga! Non cumque odit nemo tempore sint autem distinctio, explicabo cum vitae dolores quia quod dolor excepturi sed sunt!</p>
      </div>
      <div className='team'>
        <h1 className='team-heading'>Team</h1>
        <div className='thick-line'></div>
        <div className='technical'>
          <div className='technical-heading'>Technical</div>
          <div className='technical-crew'>
            {crewmembers.filter(filterFunc()).map((member, index) => (
              <CrewCard
                key={index}
                name={member.name}
                image={member.image}
                position={member.position}
                text={member.text}
              />
            ))}
          </div>
        </div>
        <div className='thin-line'></div>
        <div className='technical'>
          <div className='technical-heading'>Managerial</div>
          <div className='technical-crew'>
            {crewmembers.filter(filterFunc()).map((member, index) => (
              <CrewCard
                key={index} // Ensure a unique key for each item
                name={member.name}
                image={member.image}
                position={member.position}
                text={member.text}
              />
            ))}
          </div>
        </div>
        <div className='thick-line'></div>
        <h1 className='team-heading'>Departments</h1>
        <div className='thick-line'></div>
        <div className='technical'>
          <div className='technical-heading'>Electrical</div>
          <div className='technical-crew'>
            {crewmembers.filter(filterFunc()).map((member, index) => (
              <CrewCard
                key={index} // Ensure a unique key for each item
                name={member.name}
                image={member.image}
                position={member.position}
                text={member.text}
              />
            ))}
          </div>
        </div>
        <div className='thin-line'></div>
        <div className='technical'>
          <div className='technical-heading'>Brakes</div>
          <div className='technical-crew'>
            {crewmembers.filter(filterFunc('Brakes')).map((member, index) => (
              <CrewCard
                key={index} // Ensure a unique key for each item
                name={member.name}
                image={member.image}
                position={member.position}
                text={member.text}
              />
            ))}
          </div>
        </div>
        <div className='thin-line'></div>
        <div className='technical'>
          <div className='technical-heading'>Suspension & Steering</div>
          <div className='technical-crew'>
            {crewmembers.filter(filterFunc('Sns')).map((member, index) => (
              <CrewCard
                key={index} // Ensure a unique key for each item
                name={member.name}
                image={member.image}
                position={member.position}
                text={member.text}
              />
            ))}
          </div>
        </div>
        <div className='technical'>
          <div className='technical-heading'>Powertrain</div>
          <div className='technical-crew'>
            {crewmembers.filter(filterFunc('Powertrain')).map((member, index) => (
              <CrewCard
                key={index} // Ensure a unique key for each item
                name={member.name}
                image={member.image}
                position={member.position}
                text={member.text}
              />
            ))}
          </div>
        </div>
        <div className='technical'>
          <div className='technical-heading'>Chasis</div>
          <div className='technical-crew'>
            {crewmembers.filter(filterFunc('Chasis')).map((member, index) => (
              <CrewCard
                key={index} // Ensure a unique key for each item
                name={member.name}
                image={member.image}
                position={member.position}
                text={member.text}
              />
            ))}
          </div>
        </div>
        <div className='technical'>
          <div className='technical-heading'>Electrical</div>
          <div className='technical-crew'>
            {crewmembers.filter(filterFunc('Electrical')).map((member, index) => (
              <CrewCard
                key={index} // Ensure a unique key for each item
                name={member.name}
                image={member.image}
                position={member.position}
                text={member.text}
              />
            ))}
          </div>
        </div>
        <div className='thick-line'></div>
        <h1 className='team-heading'>Web Development</h1>
        <div className='black-line'></div>
        <div className='web-member'>
          <h1>Name</h1>
          <a href='https://getbootstrap.com/docs/5.0/utilities/flex/'>
            <FontAwesomeIcon icon={faLinkedinIn} className='me-4' size='xl' />
          </a>
        </div>
        <div className='black-light-line' />
        <div className='web-member'>
          <h1>Name</h1>
          <a href='https://getbootstrap.com/docs/5.0/utilities/flex/'>
            <FontAwesomeIcon icon={faLinkedinIn} className='me-4' size='xl' />
          </a>
        </div>
        <div className='black-light-line' />
        <div className='web-member'>
          <h1>Name</h1>
          <a href='https://getbootstrap.com/docs/5.0/utilities/flex/'>
            <FontAwesomeIcon icon={faLinkedinIn} className='me-4' size='xl' />
          </a>
        </div>
        <div className='black-light-line' />
        <div className='web-member'>
          <h1>Name</h1>
          <a href='https://getbootstrap.com/docs/5.0/utilities/flex/'>
            <FontAwesomeIcon icon={faLinkedinIn} className='me-4' size='xl' />
          </a>
        </div>
        <div className='black-light-line' />
        <div className='web-member'>
          <h1>Name</h1>
          <a href='https://getbootstrap.com/docs/5.0/utilities/flex/'>
            <FontAwesomeIcon icon={faLinkedinIn} className='me-4' size='xl' />
          </a>
        </div>
        <div className='black-line' />
      </div>
    </div>
  );
}

export default CrewMembers;
