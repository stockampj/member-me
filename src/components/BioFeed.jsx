import React from 'react';
import './BioFeed.css';
import BioCard from './BioCard';
import andrew from '../assets/img/andrew.jpeg';
import anita from '../assets/img/anita.jpeg';
import brendon from '../assets/img/brendon.jpeg';
import christine from '../assets/img/christine.jpeg';
import christopher from '../assets/img/christopher.jpeg';
import devin from '../assets/img/devin.jpeg';
import erin from '../assets/img/erin.jpeg';
import hailey from '../assets/img/hailey.jpeg';
import jacqueline from '../assets/img/jacqueline.jpeg';
import jason from '../assets/img/jason.jpeg';
import jen from '../assets/img/jen.jpeg';
import joel from '../assets/img/joel.jpeg';
import kira from '../assets/img/kira.jpeg';
import lauren from '../assets/img/lauren.jpeg';
import loewy from '../assets/img/loewy.jpeg';
import micah from '../assets/img/micah.jpeg';
import mike from '../assets/img/mike.jpeg';
import molly from '../assets/img/molly.jpeg';
import neha from '../assets/img/neha.jpeg';
import nikhil from '../assets/img/nikhil.jpeg';
import rachael from '../assets/img/rachael.jpeg';
import sofia from '../assets/img/sofia.jpeg';
import ethan from '../assets/img/ethan.jpeg';
import carrie from '../assets/img/carrie.jpeg';



var bioList = [
  {
    imgURL: andrew,
    name: '&rew',
    bio: 'I am not a demon. I am a lizard, a shark, a heat-seeking panther. I want to be Bob Denver on acid playing th e accordion.'
  },
  {
    imgURL: anita,
    name: 'Anita',
    bio: 'Every good story seems to begin with a snake.'
  },
  {
    imgURL: brendon,
    name: 'Brendon',
    bio: 'I use technology for communication, but I don\'t have a Blackberry or an iPhone. I use an outdated cell phone, but I\'m fine with it.'
  },
  {
    
    imgURL: carrie,
    name: 'Carrie',
    bio: 'The end of the world is on people\'s minds. We have the power to destroy or save ourselves, but the question is what do you do with that responsibility?'

  },
  {
    imgURL: christine,
    name: 'Christine',
    bio: 'Nobody ever thinks clearly at the airport.'
  },
  {
    imgURL: christopher,
    name: 'Chris',
    bio: 'I don\'t drink blood, and last time I looked in the mirror, I had a reflection.'
  },
  {
    imgURL: devin,
    name: 'Devin',
    bio: 'I could eat a peach for hours.'
  },
  {
    imgURL: erin,
    name: 'Erin',
    bio: 'One of the pluses of getting older is you set some limits.'
  },
  {
    imgURL: ethan,
    name: 'Ethan',
    bio: 'There\'s a fine line between the method actor and the schizophrenic.'
  },
  {
    imgURL: hailey,
    name: 'Haley',
    bio: 'How do you rebel in a family of rebels?'
  },
  {
    imgURL: jacqueline,
    name: 'Jaykwellin',
    bio: 'Picasso said, "Art is a lie that tells the truth." What if you just want to tell the truth and not lie about it?'
  },
  {
    imgURL: jason,
    name: 'J.son',
    bio: 'I know what it\'s like to meet someone you admire and have them be a complete jerk'
  },
  {
    imgURL: jen,
    name: 'Jen',
    bio: 'I\'ve always started a movie with a song in my heart, and even when I\'m a little unclear about it, something magical happens.'
  },
  {
    imgURL: kira,
    name: 'Kira',
    bio: 'Snakes are sometimes perceived as evil, but they are also perceived as medicine. If you look at an ambulance, there\'s the two snakes on the side of the ambulance. The caduceus, or the staff of Hermes, there\'s the two snakes going up it, which means that the venom can also be healing.'
  },
  {
    imgURL: lauren,
    name: 'Lauren',
    bio: 'To begin... To begin... How to start? I\'m hungry. I should get coffee. Coffee would help me think. Maybe I should write something first, then reward myself with coffee. Coffee and a muffin. Okay, so I need to establish the themes. Maybe a banana-nut. That\'s a good muffin.'
  },
  {
    imgURL: loewy,
    name: 'Loewy',
    bio: 'Those are the deals with the devil. I don\'t see the devil as somebody who is a horned, goateed guy with a fork.'
  },
  {
    imgURL: micah,
    name: 'Micah',
    bio: 'To be a good actor you have to be something like a criminal, to be willing to break the rules to strive for something new.'
  },
  {
    imgURL: mike,
    name: 'Mike',
    bio: 'Put... the bunny... back... in the box'
  },
  {
    imgURL: molly,
    name: 'Molly',
    bio: 'I think what makes people fascinating is conflict, it\'s drama, it\'s the human condition. Nobody wants to watch perfection.'
  },
  {
    imgURL: neha,
    name: 'Neha',
    bio: 'Children, to me, are of the utmost importance. They\'re really the future, aren\'t they?'
  },
  {
    imgURL: nikhil,
    name: 'Nikhil',
    bio: 'Often you hear stories about never working with children. I disagree because children still have that residual magical thinking. They haven\'t had their imagination knocked out of them by turning into adults and life experiences.'
  },
  {
    imgURL: rachael,
    name: 'Rachel',
    bio: 'You can\'t make your choices based on what critics think. You have to make your choices based on what\'s honest for you.'
  },
  {
    imgURL: sofia,
    name: 'Sofia',
    bio: 'I\'m going to steal the Declaration of Independence.'
  },
  {
    imgURL: joel,
    name: 'Joel',
    bio: 'If you\'re really special, meaning you\'re doing something unique and original, it could scare people.'
  }
];

function BioFeed(){
  return(
    <div className='flex-container'>
      {bioList.map((alum, index)=>
        <BioCard
          imgURL={alum.imgURL}
          name={alum.name}
          bio={alum.bio}
          key={index}
        />
      )}
    </div>

  );
}

export default BioFeed;