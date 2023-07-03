import { Parallax, Background } from 'react-parallax';

const MakeParallax = ({imageUrl}) => {
    return (
        <>
        <Parallax strength={500}>
            <Background className="custom-bg">
                <div style={{ width: '100vw', height: '100vh', backgroundImage: `url(${imageUrl})`, backgroundSize: '100% 100%', textAlign: 'center', objectFit: 'cover' }} />
            </Background>
            <div style={{ height: '110vh', width: '100vw' }} />
        </Parallax>
        </>
    )
}

export default MakeParallax;