import React from 'react';
import './CrewMembers.css';
import CrewCard from './CrewCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useSearchParams } from 'react-router-dom';


const team2025 = [
  {
    name: "Vamshi",
    image: "https://drive.google.com/uc?export=view&id=1V_ewWCE66kfIygFry2S7SslRS8DcVxp_",
    position: "Brakes",
    text: "https://www.linkedin.com/in/vamshi-lavudya-744190230"
  },
  {
    name: "Siddharth Bharad",
    image: "https://drive.google.com/uc?export=view&id=1q9XSifjTgXtFcIQz1jNFrjamnQYEkWa4",
    position: "Powertrain",
    text: "https://www.linkedin.com/in/siddharth-bharad-596aa5253"
  },
  {
    name: "Prithish Panchal",
    image: "https://drive.google.com/uc?export=view&id=1qy5Sox5G4sAiroiwTP8dPkw8UdAGJXas",
    position: "Powertrain",
    text: "https://www.linkedin.com/in/prithish-panchal-06339921a"
  },
  {
    name: "Akshit Tomar",
    image: "https://drive.google.com/uc?export=view&id=1KvE54AeK7X8pfrKRXE3Q50ID8aiTrKhN",
    position: "Chasis",
    text: "https://www.linkedin.com/in/akshit-tomar-43409425a"
  },
  {
    name: "JAYESH PATIL",
    image: "https://drive.google.com/uc?export=view&id=1-bG_DEO7aoIL3AWDCLz2JmGOKJ-vPi71",
    position: "Powertrain",
    text: "https://www.linkedin.com/in/jayesh-patil-495b01221"
  },
  {
    name: "Jaykumar Gohel",
    image: "https://drive.google.com/uc?export=view&id=1uYyjYg52oyMzNXLGkvhsVBiWp80pLD2m",
    position: "Electrical",
    text: "https://www.linkedin.com/in/jay-gohel-85a1a0254"
  },
  {
    name: "Behera Nitish",
    image: "https://drive.google.com/uc?export=view&id=1TZ4ffezhJKzDzGOs7Yy_oj1ddjJt7Sov",
    position: "Powertrain",
    text: "https://www.linkedin.com/in/nitish-behera-9a9423261"
  },
  {
    name: "Puneet Suvarna",
    image: "https://drive.google.com/uc?export=view&id=1w8iMIZRBEvhRf3y_TQqJu88AUjGkePrP",
    position: "Chasis",
    text: "https://www.linkedin.com/in/puneet-suvarna-096378277/"
  },
  {
    name: "Jayesh Kailash Patil",
    image: "https://drive.google.com/uc?export=view&id=1wBgqXBZjys8gyv5d81Hng-L0G_Qlnq5H",
    position: "Powertrain",
    text: "https://www.linkedin.com/in/jayesh-patil-57b18b260"
  },
  {
    name: "Niteesh J",
    image: "https://drive.google.com/uc?export=view&id=1k1GTxIQ-4G7pwr1ya4WjLRf1FGE7ztUh",
    position: "Sns",
    text: "https://www.linkedin.com/in/niteesh-j-0a3967268"
  },
  {
    name: "Pulkit Garhwal",
    image: "https://drive.google.com/uc?export=view&id=1n_IBTHVJNGQVberEf-PL9TCRCcUXeHeF",
    position: "Sns",
    text: "https://www.linkedin.com/in/pulkit-garhwal-b77416277"
  },
  {
    name: "Jay Pokal",
    image: "https://drive.google.com/uc?export=view&id=189my4btV-V6vX3Y7AxyfkNb6VP1FOa0n",
    position: "Powertrain",
    text: "https://www.linkedin.com/in/jay-pokal-671741266"
  },
  {
    name: "Piyush S Bhuriya",
    image: "https://drive.google.com/uc?export=view&id=1ugGZazTstsAO5EyRl3OED6YcF5E8CBWL",
    position: "Brakes",
    text: "https://www.linkedin.com/in/piyush-bhuriya-404789229"
  },
  {
    name: "Mihirsinh Chauhan",
    image: "https://drive.google.com/uc?export=view&id=1QDAqqxacc-VA7lW7b8Y3V9gCYsYzsClQ",
    position: "Chasis",
    text: "https://www.linkedin.com/in/mihirsinh-chauhan-5bb437239"
  },
  {
    name: "Meha Virendra Patel",
    image: "https://drive.google.com/uc?export=view&id=1FLQTLkAxONtML6BlEUyNTkS_w4z5Lkwq",
    position: "Sns",
    text: "https://www.linkedin.com/in/meha-patel-60897b20a"
  },
  {
    name: "Abhishek Pandya",
    image: "https://drive.google.com/uc?export=view&id=1Adt0CFhIwQXUv9BT4dk8n3hw5ZdRD2ts",
    position: "Brakes",
    text: "https://www.linkedin.com/in/abhishek-pandya-016083277/"
  },
  {
    name: "Hemang Kokate",
    image: "https://drive.google.com/uc?export=view&id=1ZDxH7E5qersH-C1R1zYQq-s_u6KGvn19",
    position: "Electrical",
    text: "https://www.linkedin.com/in/hemang-kokate-21a705241"
  },
  {
    name: "Dakshraj Parmar",
    image: "https://drive.google.com/uc?export=view&id=16hzmsFw-_dmQJ4I_Q4fPYfwaYtgg81aY",
    position: "Electrical",
    text: "https://www.linkedin.com/in/dakshraj-parmar-83b53a235"
  },
  {
    name: "Abhinav Gupta",
    image: "https://drive.google.com/uc?export=view&id=1YKX2OMHrlquW0yrj_ytswyQCFKzQ0k7t",
    position: "Sns",
    text: "https://www.linkedin.com/in/abhinav-gupta-690526228/"
  },
  {
    name: "Devam Vadher",
    image: "https://drive.google.com/uc?export=view&id=1M7AT4Fnhbx37hC428vEKceo7PKQR3OyN",
    position: "Electrical",
    text: "https://www.linkedin.com/in/devam-vadher-37705b241"
  },
  {
    name: "Durga syamanth",
    image: "https://drive.google.com/uc?export=view&id=1IYy5X9R3DAgoPKJKsbUxAxYHXsM25bMe",
    position: "Sns",
    text: "https://www.linkedin.com/in/akurathi-durga-syamanth-658062277"
  },
  {
    name: "Vishnu sai Kummari",
    image: "https://drive.google.com/uc?export=view&id=10eCMPEKWVUYlkOnRh_I1Ykud3_rUayoZ",
    position: "Electrical",
    text: "https://www.linkedin.com/in/k-vishnu-sai-b1a767248"
  },
  {
    name: "Rishabh Gondane",
    image: "https://drive.google.com/uc?export=view&id=1327v6OWUY1nCBLruOqHvRCrQEzICyB7p",
    position: "Brakes",
    text: "https://www.linkedin.com/in/rishabh-gondane-59a805249"
  },
  {
    name: "Amit B Mahiya",
    image: "https://drive.google.com/uc?export=view&id=1obIRj3CNrSvs5E-6odUuckKkF3FZHBug",
    position: "Electrical",
    text: "https://www.linkedin.com/in/amit-b-mahiya-279245228"
  },
  {
    name: "Vidhi Prakashbhai Patel",
    image: "https://drive.google.com/uc?export=view&id=10U9k-MjKCRtM1lW17BH_M3BCxbtX0-it",
    position: "Sns",
    text: "https://www.linkedin.com/in/vidhi-patel-98131a272"
  },
  {
    name: "Priyanshu Kumar",
    image: "https://drive.google.com/uc?export=view&id=1yAp4byaS5wk7eFAoZurJK847Ze3J1ko1",
    position: "Sns",
    text: "https://www.linkedin.com/in/priyanshu-singh-7aa6aa1b4/"
  },
  {
    name: "Shrey Shalan",
    image: "https://drive.google.com/uc?export=view&id=1zcQxo6yhPOGAGN_JAq1V-Zrdvgf4c0R1",
    position: "Electrical",
    text: "https://www.linkedin.com/in/shrey-shalan-97565a244"
  },
  {
    name: "Niraj Kalwani",
    image: "https://drive.google.com/uc?export=view&id=1QCWVvYEYttE5_Y5FyvYP6K7x3AZroyfg",
    position: "Powertrain",
    text: "https://in.linkedin.com/in/niraj-kalwani-615138241"
  },
  {
    name: "MIHIR P",
    image: "https://drive.google.com/uc?export=view&id=1a1tcDqZMKyHGUl3NMoE7fSKVU0v_uFsM",
    position: "Chasis",
    text: "https://www.linkedin.com/in/mihir-pandor-475169278"
  },
  {
    name: "Yash Katare",
    image: "https://drive.google.com/uc?export=view&id=15dlfNeNds7LLckHLHbQ6QPuDY0j_2THU",
    position: "Sns",
    text: "https://www.linkedin.com/in/katareyash"
  },
  {
    name: "Shivaram S",
    image: "https://drive.google.com/uc?export=view&id=1KN-sY7hnxrrhLSkLbVWtKC2Jk-e2ACaZ",
    position: "Sns",
    text: "www.linkedin.com/in/shivaram-s-633aa3268"
  },
  {
    name: "Kancharapu Sai Bhargavi",
    image: "https://drive.google.com/uc?export=view&id=1ZRTEMjl5GDGlfcWSna-EJPv5mB225NFc",
    position: "Brakes",
    text: "https://www.linkedin.com/in/kancharapu-sai-bhargavi-915505278"
  }


];

const filterFunc = (position) => {
  return (data) => {
    return data.position === position;
  }
}


const team2024 = [
  {
    name: "Harsh Patel",
    position: "Captain",
    image: "https://drive.google.com/uc?export=view&id=1B5SVHh8pDDxuZukRrALPY3Vzo77pmILK",
    text: "https://www.linkedin.com/in/harsh-patel-b43b81191"
  },
  {
    name: "Rushi Desai",
    position: "Vice-Captain",
    image: "https://drive.google.com/uc?export=view&id=1bylbQ1VGkMt8WGsCMY0UGd3lXZJCvA4X",
    text: "https://www.linkedin.com/in/rushi-desai-4988001ba/"
  },
  {
    name: "Anish Shah",
    position: "Chairperson",
    image: "https://drive.google.com/uc?export=view&id=16IFcRzDe0zYmTGdRWQaRvXDkrilRB8ut",
    text: "https://www.linkedin.com/in/2002-anish-shah"
  },
  {
    name: "Pooja Patel",
    position: "Co-Chairperson",
    image: "https://drive.google.com/uc?export=view&id=1QaRGyaDrkCUQ7BsD5MbOD9ncCTrmO4eD",
    text: "https://www.linkedin.com/in/pooja-patel-b08292217"
  },
  {
    name: "Arnav Vaghela",
    position: "Sponsorship and Procurement Head",
    image: "https://drive.google.com/uc?export=view&id=167cpNP-6lNlJd9PIIrHdQQ_89R9eTwik",
    text: ""
  },
  {
    name: "Yatharth Kapadia",
    position: "Treasurer",
    image: "https://drive.google.com/uc?export=view&id=1YdjUHUpA3-74iJZs3W7SCGlUqONy8A5m",
    text: "https://www.linkedin.com/in/yatharth-kapadia-705784200"
  },
  {
    name: "Burhanuddin Lokhandwala",
    position: "Team Manager",
    image: "https://drive.google.com/uc?export=view&id=1CdIbyNoXN7IaT7t87K4xiTVphbmVtxCX",
    text: "https://www.linkedin.com/in/burhanuddinlokhandwala04"
  },
  {
    name: "Janvi Gohil",
    position: "Public Relations Head",
    image: "https://drive.google.com/uc?export=view&id=1lIcQAnahIzDBM5hVLG-2unNjumQHhoAU",
    text: ""
  },
  {
    name: "Pratham Parmar",
    position: "Brakes Head",
    image: "https://drive.google.com/uc?export=view&id=1QmOYrJ4vnejXjoLnntQbTBcTna7VyL1n",
    text: "https://www.linkedin.com/in/pratham-parmar-244022215"
  },
  {
    name: "Hardik Choudhary",
    position: "Chassis Head",
    image: "https://drive.google.com/uc?export=view&id=1gJqr5Lzy3VULe-J5MA65B3AtAy_9dX1W",
    text: "https://www.linkedin.com/in/hardik-choudhary-38524324a"
  },
  {
    name: "Alin Polra",
    position: "Electrical Head",
    image: "https://drive.google.com/uc?export=view&id=11KJVzQc_UcdOVeG7NZoAHDy63dq2kwjn",
    text: ""
  },
  {
    name: "Parthiv Patel",
    position: "Powertrain Head",
    image: "https://drive.google.com/uc?export=view&id=1xyWyiheMq7oEBl0CSx-RO5LWBi1peWxk",
    text: ""
  },
  {
    name: "Pratham Sharma",
    position: "Powertrain Head",
    image: "https://drive.google.com/uc?export=view&id=1SbT9mv1BaGNsEaSzaBs4ZWe9pNxxokU6",
    text: "https://www.linkedin.com/in/pratham-sharma-b8741024a?trk=contact-info"
  },
  {
    name: "Vansh Jogia",
    position: "Steering and Suspension Head",
    image: "https://drive.google.com/uc?export=view&id=1vmm54KGoYS_Vh_qaYO9N_LHDGiRhZKYV",
    text: "https://www.linkedin.com/in/vansh-jogia-238773216"
  },
  {
    name: "S L Satyanarayana",
    position: "Team Member",
    image: "https://drive.google.com/uc?export=view&id=1GEEjYLmVgipUqlKbIw8Aq6aQE5kbPObI",
    text: "https://www.linkedin.com/in/slsatyanarayana"
  },
  {
    name: "Kartik Mohadarkar",
    position: "Team Member",
    image: "https://drive.google.com/uc?export=view&id=1mNSsmEWfJVC4IkkL67lr-U_xCbQO3lhP",
    text: "https://www.linkedin.com/in/kartik-m0390"
  },
  {
    name: "Nishit Prajapati",
    position: "Team Member",
    image: "https://drive.google.com/uc?export=view&id=1VGpljkuHu_PQq52io1eUAG4IOPZWndlo",
    text: ""
  },
  {
    name: "Miit Chetan Pabari",
    position: "Public Relations Head",
    image: "https://drive.google.com/uc?export=view&id=1z01wnGhZ4wDwlY8dzSbtycchOwXRAsOJ",
    text: "www.linkedin.com/in/miit-pabari"
  },
  {
    name: "Aaditya Nimkar",
    position: "Team Member powertrain",
    image: "https://drive.google.com/uc?export=view&id=1zpR1Hm9dJqYVubpU7Zth7Pms-j_7TECz",
    text: "www.linkedin.com/in/aaditya-nimkar-21424224a"
  },
  {
    name: "Vishwa Menpara",
    position: "Team Member chassis",
    image: "https://drive.google.com/uc?export=view&id=14LMU03P34ZE6Aa4HA9smcorDUlIY3LYj",
    text: "https://www.linkedin.com/in/vishwa-menpara"
  },
  {
    name: "Adarsh Kataktalware",
    position: "Team Member brakes",
    image: "https://drive.google.com/uc?export=view&id=1d_zPYMYHMsYSSxqqicHvQvhFr9jQ-SqW",
    text: "https://www.linkedin.com/in/adarsh-kataktalware-0803a8243"
  },
  {
    name: "A. Hemanth Kumar",
    position: "Team Member sns",
    image: "https://drive.google.com/uc?export=view&id=1DwMvdtuH4gOfvk3LYPHVEd7XleDNBEwJ",
    text: ""
  },
  {
    name: "Nayan Lakade",
    position: "Team Member sns",
    image: "https://drive.google.com/uc?export=view&id=1nkdilWT5TkgLJU1DYn-rpt4xQtB0W4hE",
    text: "https://www.linkedin.com/in/nayan-lakade-34279a1bb"
  },
  {
    name: "Kunal Gupta",
    position: "Team Member powertrain",
    image: "https://drive.google.com/uc?export=view&id=1z01wnGhZ4wDwlY8dzSbtycchOwXRAsOJ",
    text: ""
  },
  {
    name: "Shrujal Zala",
    position: "Team Member sns",
    image: "https://drive.google.com/uc?export=view&id=1acT36ZuFVnw_i5fbGPnvbw03TmJNxTRG",
    text: "www.linkedin.com/in/shrujal-zala-a20887201"
  },
  {
    name: "Dhruv Chudasuma",
    position: "Team Member chassis",
    image: "https://drive.google.com/uc?export=view&id=1xeMpUnhGfyay1SewAxrNQ7ApbfGndblb",
    text: "https://www.linkedin.com/in/dhruv-chudasma-64828121b"
  },
];


const CrewMembers = () => {
  const [searchParams] = useSearchParams();
  const year = searchParams.get('year');
  const crewmembers = year == '2024' ? team2024 : team2025;


  return (
    <div className='crew-members'>
      <div className={`crew-hero ${year == '2024' ? 'crew-2024' : 'crew-2025'}`}>
        <div className='crew-hero-image'>
        </div>
      </div>
      <div className="crew-text">
      </div>
      <div className='team'>

        {
          year == '2024'
            ?
            <>
              <h1 className='team-heading'>Team</h1>
              <div className='thick-line' style={{ marginBottom: "30px" }}></div>
              <div>
                <div className='technical-crew'>
                  {team2024.map((member, index) => (
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
            </>
            :
            <>
              {/* <div className='technical'>
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
              </div> */}
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
            </>
        }

        <div className='thick-line'></div>
        <h1 className='team-heading'>Web Development</h1>
        <div className='black-line'></div>
        <div className='web-member'>
        <h1>Moon Patel</h1>
          <a href='https://www.linkedin.com/in/moon-patel/'>
            <FontAwesomeIcon icon={faLinkedinIn} className='me-4' size='xl' />
          </a>
        </div>
        <div className='black-light-line' />
        <div className='web-member'>
          
          <h1>Khushi Patel</h1>
          <a href='https://www.linkedin.com/in/khushi-patel-89304b256'></a>  
            <FontAwesomeIcon icon={faLinkedinIn} className='me-4' size='xl' />
        </div>
        <div className='black-light-line' />
        <div className='web-member'>
          <h1>Tejo Kaushal</h1>
          <a href='https://www.linkedin.com/in/tejo-kaushal-4a32b5256/'>
            <FontAwesomeIcon icon={faLinkedinIn} className='me-4' size='xl' />
          </a>
        </div>
        <div className='black-light-line' />
        <div className='web-member'>
          <h1>Abhishek</h1>
          <a href='https://www.linkedin.com/in/abhishek-kumar-068720250'>
            <FontAwesomeIcon icon={faLinkedinIn} className='me-4' size='xl' />
          </a>
        </div>
        <div className='black-light-line' />
        <div className='web-member'>
          <h1>Yatra Vaghasia</h1>
          <a href='https://www.linkedin.com/in/yatravaghasia/'>
            <FontAwesomeIcon icon={faLinkedinIn} className='me-4' size='xl' />
          </a>
        </div>
        <div className='black-line' />
      </div>
    </div>
  );
}

export default CrewMembers;
