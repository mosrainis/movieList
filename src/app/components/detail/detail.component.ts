import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  //This one controls the 'end' argument on 'more.pipe.ts' :
  endParam: number = 100
  displayMore: boolean = true

  movieDetails = [
    {
      id: 1,
      title: 'Dawn of the Planet of the Apes',
      image: 'http://api.androidhive.info/json/movies/1.jpg',
      rating: 8.3,
      releaseYear: 2014,
      summary: 'Ten years after simian flu wiped out much of the world\'s homosapiens, genetically enhanced chimpanzee Caesar (Andy Serkis) and his ever-growing band of followers have established a thriving colony just outside San Francisco in Muir Woods. Meanwhile, a small band of human survivors emerges, which forces Caesar -- as leader -- to grapple with the dual challenge of protecting his people and re-establishing a relationship with the remaining human population -- the latter being Caesar\'s secret wish.',
      genre: [
        'Action',
        'Drama',
        'Sci-Fi'
      ]
    },
    {
      id: 2,
      title: 'District 9',
      image: 'http://api.androidhive.info/json/movies/2.jpg',
      rating: 8,
      releaseYear: 2009,
      summary: 'Thirty years ago, aliens arrive on Earth -- not to conquer or give aid, but -- to find refuge from their dying planet. Separated from humans in a South African area called District 9, the aliens are managed by Multi-National United, which is unconcerned with the aliens\' welfare but will do anything to master their advanced technology. When a company field agent (Sharlto Copley) contracts a mysterious virus that begins to alter his DNA, there is only one place he can hide: District 9.',
      genre: [
        'Action',
        'Sci-Fi',
        'Thriller'
      ]
    },
    {
      id: 3,
      title: 'Transformers: Age of Extinction',
      image: 'http://api.androidhive.info/json/movies/3.jpg',
      rating: 6.3,
      releaseYear: 2014,
      summary: 'After an epic battle, a great city lies in ruins, but the Earth itself is saved. As humanity begins to pick up the pieces, a shadowy group emerges to try to take control of history. Meanwhile, an ancient and powerful new menace sets its sights on Earth. A new group of humans, led by Cade Yeager (Mark Wahlberg), helps Optimus Prime (Peter Cullen) and the Autobots rise up to meet their most fearsome challenge yet: a worldwide war of good versus evil.',
      genre: [
        'Action',
        'Adventure',
        'Sci-Fi'
      ]
    },
    {
      id: 4,
      title: 'X-Men: Days of Future Past',
      image: 'http://api.androidhive.info/json/movies/4.jpg',
      rating: 8.4,
      releaseYear: 2014,
      summary: 'Convinced that mutants pose a threat to humanity, Dr. Bolivar Trask (Peter Dinklage) develops the Sentinels, enormous robotic weapons that can detect a mutant gene and zero in on that person. In the 21st century, the Sentinels have evolved into highly efficient killing machines. With mutants now facing extinction, Wolverine (Hugh Jackman) volunteers to go back in time and rally the X-Men of the past to help change a pivotal moment in history and thereby save their future.',
      genre: [
        'Action',
        'Sci-Fi',
        'Thriller'
      ]
    },
    {
      id: 5,
      title: 'The Machinist',
      image: 'http://api.androidhive.info/json/movies/5.jpg',
      rating: 7.8,
      releaseYear: 2004,
      summary: 'Factory worker Trevor Reznik (Christian Bale) suffers from insomnia so severe that his condition has taken its toll on his weight and his mental health. When Trevor unintentionally causes an on-the-job accident that horribly injures a coworker (Michael Ironside), he begins to become even more troubled. Despite a relationship with Stevie (Jennifer Jason Leigh), a pretty prostitute, Trevor descends further into paranoia, blaming his problems on an enigmatic figure named Ivan (John Sharian).',
      genre: [
        'Drama',
        'Thriller'
      ]
    },
    {
      id: 6,
      title: 'The Last Samurai',
      image: 'http://api.androidhive.info/json/movies/6.jpg',
      rating: 7.7,
      releaseYear: 2003,
      summary: 'Capt. Nathan Algren (Tom Cruise) is an American military officer hired by the Emperor of Japan to train the country\'s first army in the art of modern warfare. As the government attempts to eradicate the ancient Samurai warrior class in preparation for more Westernized and trade-friendly policies, Algren finds himself unexpectedly affected by his encounters with the Samurai, which places him at the center of a struggle between two eras and two worlds.',
      genre: [
        'Action',
        'Drama',
        'History'
      ]
    },
    {
      id: 7,
      title: 'The Amazing Spider-Man 2',
      image: 'http://api.androidhive.info/json/movies/7.jpg',
      rating: 7.3,
      releaseYear: 2014,
      summary: 'Confident in his powers as Spider-Man, Peter Parker (Andrew Garfield) embraces his new role as a hero and spends time with Gwen Stacy (Emma Stone) in between protecting New York from criminals. However, his greatest battle yet is about to begin. With the emergence of Electro (Jamie Foxx), Peter must confront an enemy far more powerful than he is. And when his old friend Harry Osborn (Dane DeHaan) returns, Peter comes to realize that all his enemies have one thing in common: Oscorp.',
      genre: [
        'Action',
        'Adventure',
        'Fantasy'
      ]
    },
    {
      id: 8,
      title: 'Tangled',
      image: 'http://api.androidhive.info/json/movies/8.jpg',
      rating: 7.9,
      releaseYear: 2010,
      summary: 'When the kingdom\'s most-wanted bandit, Flynn Rider (Zachary Levi), hides in a convenient tower, he immediately becomes a captive of Rapunzel (Mandy Moore), the spire\'s longtime resident. Crowned with 70 feet of magical golden hair, she has been locked away for years and desperately wants freedom. The feisty teenager strikes a deal with Flynn, and together they begin a whirlwind adventure.',
      genre: [
        'Action',
        'Drama',
        'Sci-Fi'
      ]
    },
    {
      id: 9,
      title: 'Rush',
      image: 'http://api.androidhive.info/json/movies/9.jpg',
      rating: 8.3,
      releaseYear: 2013,
      summary: 'In the mid-1970s, charismatic English playboy James Hunt (Chris Hemsworth) and Austrian perfectionist Niki Lauda (Daniel Brühl) share an intense rivalry in Formula 1 racing. Driving vehicles that are little more than gas-filled, rolling bombs, Hunt and Lauda burn up the track, all the while pushing themselves to the breaking point of physical and mental endurance. Meanwhile, the women (Olivia Wilde, Alexandra Maria Lara) in their lives can only watch as both drivers risk death with every lap.',
      genre: [
        'Animation',
        'Comedy',
        'Family'
      ]
    },
    {
      id: 10,
      title: 'Drag Me to Hell',
      image: 'http://api.androidhive.info/json/movies/10.jpg',
      rating: 6.7,
      releaseYear: 2009,
      summary: 'Christine Brown (Alison Lohman) has a loving boyfriend (Justin Long) and a great job at a Los Angeles bank. But her heavenly life becomes hellish when, in an effort to impress her boss, she denies an old woman\'s request for an extension on her home loan. In retaliation, the crone places a curse on Christine, threatening her soul with eternal damnation. Christine seeks a psychic\'s help to break the curse, but the price to save her soul may be more than she can pay.',
      genre: [
        'Horror',
        'Thriller'
      ]
    },
    {
      id: 11,
      title: 'Despicable Me 2',
      image: 'http://api.androidhive.info/json/movies/11.jpg',
      rating: 7.6,
      releaseYear: 2013,
      summary: 'Now that Gru (Steve Carell) has forsaken a life of crime to raise Margo, Agnes and Edith, he\'s trying to figure out how to provide for his new family. As he struggles with his responsibilities as a father, the Anti-Villain League -- an organization dedicated to fighting evil -- comes calling. The AVL sends Gru on a mission to capture the perpetrator of a spectacular heist, for who would be better than the world\'s greatest ex-villain to capture the individual who seeks to usurp his power.',
      genre: [
        'Animation',
        'Comedy',
        'Family'
      ]
    },
    {
      id: 12,
      title: 'Kill Bill: Vol. 1',
      image: 'http://api.androidhive.info/json/movies/12.jpg',
      rating: 8.2,
      releaseYear: 2003,
      summary: 'A former assassin, known simply as The Bride (Uma Thurman), wakes from a coma four years after her jealous ex-lover Bill (David Carradine) attempts to murder her on her wedding day. Fueled by an insatiable desire for revenge, she vows to get even with every person who contributed to the loss of her unborn child, her entire wedding party, and four years of her life. After devising a hit list, The Bride sets off on her quest, enduring unspeakable injury and unscrupulous enemies.',
      genre: [
        'Action',
        'Crime'
      ]
    },
    {
      id: 13,
      title: 'A Bug\'s Life',
      image: 'http://api.androidhive.info/json/movies/13.jpg',
      rating: 7.2,
      releaseYear: 1998,
      summary: 'Flik (Dave Foley) is an inventive ant who\'s always messing things up for his colony. His latest mishap was destroying the food stores that were supposed to be used to pay off grasshopper Hopper (Kevin Spacey). Now the strong-arming insect is demanding that the ants gather double the food -- or face annihilation. To avert disaster, Flik goes on a journey to recruit fighters to defend the colony. When he meets a band of high-flying circus insects, he thinks he\'s found his salvation.',
      genre: [
        'Animation',
        'Adventure',
        'Comedy'
      ]
    },
    {
      id: 14,
      title: 'Life of Brian',
      image: 'http://api.androidhive.info/json/movies/14.jpg',
      rating: 8.9,
      releaseYear: 1972,
      summary: 'Brian Cohen (Graham Chapman) is an average young Jewish man, but through a series of ridiculous events, he gains a reputation as the Messiah. When he\'s not dodging his followers or being scolded by his shrill mother (Terry Jones), the hapless Brian has to contend with the pompous Pontius Pilate (Michael Palin) and acronym-obsessed members of a separatist movement. Rife with Monty Python\'s signature absurdity, the tale finds Brian\'s life paralleling Biblical lore, albeit with many more laughs.',
      genre: [
        'Comedy'
      ]
    },
    {
      id: 15,
      title: 'How to Train Your Dragon',
      image: 'http://api.androidhive.info/json/movies/15.jpg',
      rating: 8.2,
      releaseYear: 2010,
      summary: 'Hiccup (Jay Baruchel) is a Norse teenager from the island of Berk, where fighting dragons is a way of life. His progressive views and weird sense of humor make him a misfit, despite the fact that his father (Gerard Butler) is chief of the clan. Tossed into dragon-fighting school, he endeavors to prove himself as a true Viking, but when he befriends an injured dragon he names Toothless, he has the chance to plot a new course for his people\'s future.',
      genre: [
        'Animation',
        'Adventure',
        'Family'
      ]
    }
  ]
  movieSelected
  relatedMovies = []

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.findMovie();
  }

  findMovie() {
    this.activateRoute.params.subscribe(params => {
      let idSelected = +params["id"];
      if(isNaN(idSelected)) {
        this.router.navigate(["/"])
      }else {
        this.movieSelected = this.getMovieById(idSelected)
      }
    })
  }

  getMovieById(id: number) {
    return this.movieDetails.find(
      function(movieDetails) {
        return movieDetails.id == id
      }
    )
  }

}
