import heartSVG from '../assets/heart.svg';

export default function Home() {
  return (
    <div className='homeContent'>
      <h1>AIDEN MOLYNEAUX</h1>
      <h2>PASSIONATE PROGRAMMER & FULL-STACK DEVELOPER</h2>
      <p className='topMargin'>MY HEART BEATS TO PROGRAM</p>
      <img src={heartSVG} alt='A red geometric heart drawing, animated to be beating' className='heartSVG'/>
    </div>
  );
}