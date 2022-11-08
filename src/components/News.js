import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
   articles =[
    {
    "source": {
    "id": "polygon",
    "name": "Polygon"
    },
    "author": "Owen S. Good",
    "title": "EA Sports FIFA 23 World Cup prediction: Who wins, plus Golden Boot",
    "description": "EA Sports has correctly predicted the past three World Cup winners using its FIFA soccer video game. This year, the last one under FIFA branding, the game has predicted a winner who hasn’t taken home the championship in more than 30 years.",
    "url": "https://www.polygon.com/23447782/fifa-23-world-cup-prediction-winner-ea-sports",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/PRnuwSf1TJOOkZBRJHA_zspPSlA=/0x380:1080x945/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24179250/FIFA23_4x5_NoLogosCopy.png",
    "publishedAt": "2022-11-08T20:26:36Z",
    "content": "There are plenty of good, moral reasons for not wanting to give FIFA or its 22nd World Cup your eyeballs when that tournament kicks off Nov. 20. \r\nThe whole thing is a sportswashing boondoggle to leg… [+1955 chars]"
    },
    {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Jaclyn Trop",
    "title": "How Formula E will shape Maserati's first passenger EV",
    "description": "The 2024 Maserati GranTurismo Folgore, the automaker's first EV, will have some Formula E motorsports DNA running through it.",
    "url": "https://techcrunch.com/2022/11/08/how-formula-e-will-shape-maseratis-first-passenger-ev/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/11/01_Maserati-GranTurismo-Folgore.jpg?resize=1200,668",
    "publishedAt": "2022-11-08T18:49:54Z",
    "content": "When the 2024 Maserati GranTurismo Folgore comes to market next fall, consumers might notice some Formula E motorsports DNA running through the automaker’s first EV.\r\nIn January, Maserati will become… [+2932 chars]"
    },
    {
    "source": {
    "id": "the-wall-street-journal",
    "name": "The Wall Street Journal"
    },
    "author": "Jessica Toonkel, Sarah Krouse, Jessica Toonkel",
    "title": "Netflix Explores Investing in Sports Leagues, Bidding on Streaming Rights",
    "description": "Streaming giant eyes sports like tennis and surfing; Co-CEO Reed Hastings has been wary of rising costs for rights",
    "url": "https://www.wsj.com/articles/netflix-explores-investing-in-sports-leagues-bidding-on-streaming-rights-11667930861?mod=hp_lead_pos6",
    "urlToImage": "https://images.wsj.net/im-661039/social",
    "publishedAt": "2022-11-08T18:07:00Z",
    "content": "Netflix Inc. is warming up to the idea of offering live sports on its platformas long as it can do so without breaking the bank, according to people familiar with the discussions.\r\nThe company recent… [+308 chars]"
    },
    {
    "source": {
    "id": "nrk",
    "name": "NRK"
    },
    "author": "Anna Stensrud, Synne Sofie Christiansen",
    "title": "Bråthen bekrefter at hopp snur: Innfører helseattest",
    "description": "Den beskjeden gir sportssjef Clas Brede Bråthen under Dagsnytt 18.",
    "url": "https://www.nrk.no/sport/hopp-innforer-helseattest-1.16171547",
    "urlToImage": "https://gfx.nrk.no/d1AeGih3usH9CktCGk0HegE0UcnqFcGVnO_4Bybhoz0g.jpg",
    "publishedAt": "2022-11-08T18:06:01Z",
    "content": "Sportskommentator i NRK Jan Petter Saltvedt, har kritisert hoppsporten for manglende helseattest, og nå viser det seg at det norske hoppforbundet snur i debatten.\r\nDet kom fram på Dagsnytt 18 tirsdag… [+2676 chars]"
    },
    {
    "source": {
    "id": "les-echos",
    "name": "Les Echos"
    },
    "author": "Les Echos",
    "title": "Jeudi noir attendu dans les transports parisiens",
    "description": "L'ensemble des syndicats des salariés de la RATP a prévu une mobilisation massive ce jeudi pour réclamer hausses de salaires et amélioration des conditions de travail. Sept lignes de métro seront totalement fermées et les RER A et B très perturbés.",
    "url": "https://www.lesechos.fr/industrie-services/tourisme-transport/jeudi-noir-attendu-dans-les-transports-parisiens-1877055",
    "urlToImage": "https://media.lesechos.com/api/v1/images/view/636a8b201b0a8b26df2405b3/1280x720/0702735097963-web-tete.jpg",
    "publishedAt": "2022-11-08T16:59:53Z",
    "content": "Une nouvelle journée de grève devrait venir perturber la journée des Franciliens ce jeudi. L'ensemble des syndicats de la RATP - CGT, FO, Unsa, La Base et Solidaires - ont appelé à un mouvement socia… [+2416 chars]"
    },
    {
    "source": {
    "id": "fox-sports",
    "name": "Fox Sports"
    },
    "author": "Jordan Shusterman, Jake Mintz",
    "title": "2022 MLB free agent rankings, team fits: Aaron Judge leads top 30",
    "description": "This year's group of MLB free agents features superstar hitters like Aaron Judge and Carlos Correa and ace pitchers like Justin Verlander. FOX Sports ranks the top 30.",
    "url": "http://www.foxsports.com/stories/mlb/2022-mlb-free-agent-rankings-team-fits-aaron-judge-leads-top-30",
    "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2022/10/1408/814/10.03.22_AaronJudgeBB_Horizontal.jpg?ve=1&tl=1",
    "publishedAt": "2022-11-08T14:36:53Z",
    "content": "With a ridiculously fun World Series in the rearview mirror, we turn our attention to a different kind of ridiculous fun: MLB free agency.\r\nAdding to the intrigue and anticipation of this winter is t… [+16410 chars]"
    },
    {
    "source": {
    "id": "four-four-two",
    "name": "FourFourTwo"
    },
    "author": "Ed McCambridge",
    "title": "Liverpool put up for sale by Fenway Sports Group",
    "description": "Premier League side Liverpool have been made available to purchase by FSG, the American consortium that owns them",
    "url": "https://www.fourfourtwo.com/news/liverpool-put-up-for-sale-by-fenway-sports-group",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/ia6VjaG2i39vyn98jWq4SM-1200-80.jpg",
    "publishedAt": "2022-11-07T13:18:01Z",
    "content": "Liverpool have been put up for sale by Fenway Sports Group (FSG), with a full sales presentation created to entice potential buyers. \r\nAccording to the Athletic, FSG are looking to sell a club which … [+1430 chars]"
    },
    {
    "source": {
    "id": "reddit-r-all",
    "name": "Reddit /r/all"
    },
    "author": null,
    "title": "r/AnimalsBeingBros - A row of turtles giving convenient help to a duckling",
    "description": "7,429 votes and 56 comments so far on Reddit",
    "url": "https://www.reddit.com/r/AnimalsBeingBros/comments/yocl9h/a_row_of_turtles_giving_convenient_help_to_a/",
    "urlToImage": "https://preview.redd.it/yicz0qylhgy91.jpg?auto=webp&s=c376f70d0b35bc0ebc94cda9a5c38620fa549d82",
    "publishedAt": "2022-11-07T09:07:46.6743504Z",
    "content": "Instead of duck, duck, goose they're playing turtle, turtle, snapping turtle."
    }
   ]
  constructor(){
    super()             //super() is a must to be used here before initialising any other constructor because its super class.
    console.log("Hello how are you ?")
    this.state ={                             //creating state 
        article :this.articles,                    //state initialised and will be set afterwards.
        load :false
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>Click Times - Top Headlines </h2>
        <div className='row my-4' >
        {this.state.article.map((elements) =>{
          return <div className='col md-4' key={elements.url}>
          <NewsItem title={elements.title.slice(0,15)} description={elements.description.slice(0,20)} imageUrl={elements.urlToImage} newsUrl={elements.url}/>
        </div> 
        })}
        </div>
      </div>
    )
  }
}

export default News
