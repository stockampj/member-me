import React from 'react';
import './BioFeed.css';
import BioCard from './BioCard';

var bioList = [
  {
    imgURL: 'https://sadanduseless.b-cdn.net/wp-content/uploads/2019/02/nicolas-cage-catge4.jpg',
    name: '&rew',
    bio: 'I am not a demon. I am a lizard, a shark, a heat-seeking panther. I want to be Bob Denver on acid playing th e accordion.'
  },
  {
    imgURL: 'https://www.sadanduseless.com/wp-content/uploads/2019/02/nicolas-cage-catge1.jpg',
    name: 'Anita',
    bio: 'Every good story seems to begin with a snake.'
  },
  {
    imgURL: 'https://sadanduseless.b-cdn.net/wp-content/uploads/2019/02/nicolas-cage-catge6.jpg',
    name: 'Brendon',
    bio: 'I use technology for communication, but I don\'t have a Blackberry or an iPhone. I use an outdated cell phone, but I\'m fine with it.'
  },
  {
    imgURL: 'https://sadanduseless.b-cdn.net/wp-content/uploads/2019/02/nicolas-cage-catge13.jpg',
    name: 'Carrie',
    bio: 'The end of the world is on people\'s minds. We have the power to destroy or save ourselves, but the question is what do you do with that responsibility?'

  },
  {
    imgURL: 'https://sadanduseless.b-cdn.net/wp-content/uploads/2019/02/nicolas-cage-catge19.jpg',
    name: 'Christine',
    bio: 'Nobody ever thinks clearly at the airport.'
  },
  {
    imgURL: 'https://sadanduseless.b-cdn.net/wp-content/uploads/2019/02/nicolas-cage-catge3.jpg',
    name: 'Chris',
    bio: 'I don\'t drink blood, and last time I looked in the mirror, I had a reflection.'
  },
  {
    imgURL: 'https://sadanduseless.b-cdn.net/wp-content/uploads/2019/02/nicolas-cage-catge21.jpg',
    name: 'Devin',
    bio: 'I could eat a peach for hours.'
  },
  {
    imgURL: 'https://sadanduseless.b-cdn.net/wp-content/uploads/2019/02/nicolas-cage-catge5.jpg',
    name: 'Erin',
    bio: 'One of the pluses of getting older is you set some limits.'
  },
  {
    imgURL: 'https://img.buzzfeed.com/buzzfeed-static/static/enhanced/web05/2012/6/18/12/enhanced-buzz-17157-1340035712-3.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto&output-quality=auto&output-format=auto&downsize=360:*',
    name: 'Ethan',
    bio: 'There\'s a fine line between the method actor and the schizophrenic.'
  },
  {
    imgURL: 'https://img.buzzfeed.com/buzzfeed-static/static/enhanced/terminal05/2012/6/18/12/enhanced-buzz-30833-1340035720-5.jpg?downsize=700:*&output-format=auto&output-quality=auto',
    name: 'Haley',
    bio: 'How do you rebel in a family of rebels?'
  },
  {
    imgURL: 'https://sadanduseless.b-cdn.net/wp-content/uploads/2019/02/nicolas-cage-catge18.jpg',
    name: 'Jaykwellin',
    bio: 'Picasso said, "Art is a lie that tells the truth." What if you just want to tell the truth and not lie about it?'
  },
  {
    imgURL: 'https://sadanduseless.b-cdn.net/wp-content/uploads/2019/02/nicolas-cage-catge14.jpg',
    name: 'J.son',
    bio: 'I know what it\'s like to meet someone you admire and have them be a complete jerk'
  },
  {
    imgURL: 'https://i.pinimg.com/originals/dc/7d/1a/dc7d1aa00d82e6ea8d8345a199b4f7ed.jpg',
    name: 'Jen',
    bio: 'I\'ve always started a movie with a song in my heart, and even when I\'m a little unclear about it, something magical happens.'
  },
  {
    imgURL: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/14d90cb5-7b98-4d46-b170-4a00f01f6950/d7q00p1-927d0d55-0f47-4a23-aeb5-b79772cd837e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE0ZDkwY2I1LTdiOTgtNGQ0Ni1iMTcwLTRhMDBmMDFmNjk1MFwvZDdxMDBwMS05MjdkMGQ1NS0wZjQ3LTRhMjMtYWViNS1iNzk3NzJjZDgzN2UucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.gheYwtVEWC8-68VTcjdW-OxFXU8aD5LNSlNz6QkWEeU',
    name: 'Kira',
    bio: 'Snakes are sometimes perceived as evil, but they are also perceived as medicine. If you look at an ambulance, there\'s the two snakes on the side of the ambulance. The caduceus, or the staff of Hermes, there\'s the two snakes going up it, which means that the venom can also be healing.'
  },
  {
    imgURL: 'https://unrealitymag.com/nicolas-cage-as-cats-that-is-all/cage-cats29/',
    name: 'Lauren',
    bio: 'To begin... To begin... How to start? I\'m hungry. I should get coffee. Coffee would help me think. Maybe I should write something first, then reward myself with coffee. Coffee and a muffin. Okay, so I need to establish the themes. Maybe a banana-nut. That\'s a good muffin.'
  },
  {
    imgURL: 'https://static1.fjcdn.com/comments/My+personal+favourite+_7cab9212f04603d43f4af03fa019c48a.jpg',
    name: 'Loewy',
    bio: 'Those are the deals with the devil. I don\'t see the devil as somebody who is a horned, goateed guy with a fork.'
  },
  {
    imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBCG88hxnb20HwCEQeLXLDzJeKoVL2Lp65_BAJO6Ami23p13wx&s',
    name: 'Micah',
    bio: 'To be a good actor you have to be something like a criminal, to be willing to break the rules to strive for something new.'
  },
  {
    imgURL: 'https://cdn.acidcow.com/pics/20190228/nicolas_cage_04.jpg',
    name: 'Mike',
    bio: 'Put... the bunny... back... in the box'
  },
  {
    imgURL: 'https://66.media.tumblr.com/tumblr_m8v6hp7f181rq84v4o1_400.jpg',
    name: 'Molly',
    bio: 'I think what makes people fascinating is conflict, it\'s drama, it\'s the human condition. Nobody wants to watch perfection.'
  },
  {
    imgURL: 'https://i.imgur.com/uLvGQnT.jpg',
    name: 'Neha',
    bio: 'Children, to me, are of the utmost importance. They\'re really the future, aren\'t they?'
  },
  {
    imgURL: 'https://i.pinimg.com/236x/08/4d/0a/084d0a1ad7c44093b54a8ce6fd82ff87--nicolas-cage-funny-google-searches.jpg',
    name: 'Nikhil',
    bio: 'Often you hear stories about never working with children. I disagree because children still have that residual magical thinking. They haven\'t had their imagination knocked out of them by turning into adults and life experiences.'
  },
  {
    imgURL: 'https://unrealitymag.com/nicolas-cage-as-cats-that-is-all/cage-cats33/',
    name: 'Rachel',
    bio: 'You can\'t make your choices based on what critics think. You have to make your choices based on what\'s honest for you.'
  },
  {
    imgURL: 'https://i0.wp.com/brightestyoungthings.com/wp-content/uploads/2014/01/nic-cage-cats1.jpg?fit=408%2C296&quality=100&ssl=1',
    name: 'Sofia',
    bio: 'I\'m going to steal the Declaration of Independence.'
  },
  {
    imgURL: 'https://i.imgur.com/nCt9kKC.jpg',
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