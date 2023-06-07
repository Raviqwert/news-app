import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  article = [
   
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "BBC News",
          "title": "British Vogue editor Edward Enninful steps down",
          "description": "After six years as editor-in-chief, Edward Enninful will help lead Vogue brands globally in a new role.",
          "url": "http://www.bbc.co.uk/news/entertainment-arts-65794311",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/AECB/production/_129974744_f4fcde540c56771298938b1d49cba3e322850c0f.jpg",
          "publishedAt": "2023-06-03T15:07:19.4827078Z",
          "content": "British Vogue editor-in-chief Edward Enninful will be stepping down from his role after six years of breaking boundaries at the top fashion magazine.\r\nThe 51-year-old will remain as an editorial advi… [+4307 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "BBC Sport",
          "title": "Watch FA Cup final: Fernandes equalises for Man Utd against Man City",
          "description": "Watch BBC One coverage and follow live text commentary as Manchester City face Manchester United in the FA Cup final.",
          "url": "http://www.bbc.co.uk/sport/live/football/65468309",
          "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
          "publishedAt": "2023-06-03T14:52:22.7017507Z",
          "content": "Andrew Mitchell: As a United fan Im delighted it was given, and by the current interpretation of the law thats a pen, but law is absurd - what is Grealish supposed to do there? You cant jump for a he… [+375 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "BBC News",
          "title": "Parents clash in Pride protest at US primary school",
          "description": "Rival protesters trade insults and then blows as a quiet LA suburb becomes a culture war battleground.",
          "url": "http://www.bbc.co.uk/news/world-us-canada-65688615",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6D99/production/_129975082_gettyimages-1495475708.jpg",
          "publishedAt": "2023-06-03T14:07:21.2323761Z",
          "content": "More than a hundred protesters and counter-protesters stood on opposite sides of a normally quiet suburban Los Angeles street on Friday. \r\nThe two groups had come for one reason: the local primary sc… [+4860 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "BBC News",
          "title": "India train accident: Modi vows punishments over deadly Odisha crash",
          "description": "At least 288 people were killed in the collision of two passenger trains and a goods train in Odisha.",
          "url": "http://www.bbc.co.uk/news/world-asia-india-65798640",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/15B5/production/_129975550_mediaitem129975549.jpg",
          "publishedAt": "2023-06-03T13:52:19.5916304Z",
          "content": "Media caption, Watch: Drone footage shows the devastation after Friday's train crash\r\nPeople found guilty over a deadly rail accident in eastern India will be \"punished stringently\", the country's Pr… [+5306 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "BBC News",
          "title": "Do Russians really hate the West?",
          "description": "The BBC's Steve Rosenberg visits Yaroslavl to find out if people there carry the Kremlin's message.",
          "url": "http://www.bbc.co.uk/news/world-europe-65785664",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/10E93/production/_129976296_p0fs2d4h.jpg",
          "publishedAt": "2023-06-03T12:07:12.5304549Z",
          "content": "Video shows air strikes on insurgents, Russia says. Video, 00:00:24Video shows air strikes on insurgents, Russia says"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "BBC News",
          "title": "Three Israeli soldiers killed near Egypt border",
          "description": "The incident came after a drug smuggling operation was thwarted at the border, the army says.",
          "url": "http://www.bbc.co.uk/news/world-middle-east-65798205",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/83B3/production/_115651733_breaking-large-promo-nc.png",
          "publishedAt": "2023-06-03T11:52:16.4196564Z",
          "content": "Three Israeli soldiers have been killed and others wounded by a gunman near the border with Egypt, the army says.\r\nThe Israeli military says a male and female soldier were shot dead on Saturday morni… [+621 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "BBC News",
          "title": "India train crash: ‘I survived but many died around me’",
          "description": "The BBC spoke to local villagers and a passenger, who witnessed the train crash in Odisha.",
          "url": "http://www.bbc.co.uk/news/world-asia-india-65795959",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/DEEB/production/_129976075_6546ba34-5f85-4c8e-9883-9246b382bf3c.jpg",
          "publishedAt": "2023-06-03T07:37:13.6231687Z",
          "content": "The train collision in India's eastern Odisha state on Friday evening - the country's worst this century - involved two passenger trains and a freight train.\r\nOfficials said several carriages from th… [+2293 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "BBC News",
          "title": "Utah primary schools ban Bible for 'vulgarity and violence'",
          "description": "The ban followed a parental complaint that the book has content unsuitable for children.",
          "url": "http://www.bbc.co.uk/news/world-us-canada-65794363",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/241F/production/_129974290_gettyimages-510185353.jpg",
          "publishedAt": "2023-06-03T00:22:16.4683519Z",
          "content": "A school district in the US state of Utah has removed the Bible from elementary and middle schools for containing \"vulgarity and violence\".\r\nThe move follows a complaint from a parent that the King J… [+2572 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "BBC News",
          "title": "YouTube stops deleting false 2020 election claims",
          "description": "The move, ahead of the 2024 elections, is a reversal of its policy put in place after the 2020 vote.",
          "url": "http://www.bbc.co.uk/news/world-us-canada-65772505",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/AED1/production/_129935744_gettyimages-1247204739.jpg",
          "publishedAt": "2023-06-02T23:52:17.2347442Z",
          "content": "YouTube will stop removing videos with false claims of fraud in the 2020 presidential election, the social media platform announced on Friday. \r\nThe move, ahead of the 2024 elections, is a reversal o… [+1998 chars]"
        },
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "BBC News",
          "title": "Lake Maggiore boat accident: Questions remain over spy deaths",
          "description": "Intelligence officers from Italy and Israel are among the four people who drowned on 28 May.",
          "url": "http://www.bbc.co.uk/news/world-europe-65788462",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7CE8/production/_129967913_1ed0b9490b8b8b0481ab7d2947e9be93d93af74f.jpg",
          "publishedAt": "2023-06-02T23:52:16.547415Z",
          "content": "The story of a boat that sunk on Lake Maggiore on 28 May has elements of a spy novel. \r\nFour people tragically drowned on the picturesque and popular lake south of the Swiss Alps. \r\nOne was a former … [+5227 chars]"
        }
      
    
  ]
  constructor() {
    super();
    this.state = {
      article: this.article

    }
  }
   async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7d3dc5c373284894919ad343993d0ba8"
    let data= await fetch(url);
    let praseddata= await data.json()
    
     this.setState({article:praseddata.article})
   }
  render() {
    return (
      <div className="container">
        <h2>money </h2>
        <div className="row">
        {this.state.article.map((element) => {
        return <div className="col-md-3" key={element.url}>
           <Newsitem  title={element.title?element.title:""} description={element.description?element.description:""}imageurl= {element.urlToImage} newsurl={element.url}/>
        </div>
        })}
      </div>
      </div>
    )
  }
}

export default News
