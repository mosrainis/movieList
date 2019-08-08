import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movieList = [
    {
      id: 1,
      title: 'Dawn of the Planet of the Apes',
      genre: [
        'Action',
        'Drama',
        'Sci-Fi'
      ]
    },
    {
      id: 2,
      title: 'District 9',
      genre: [
        'Action',
        'Sci-Fi',
        'Thriller'
      ]
    },
    {
      id: 3,
      title: 'Transformers: Age of Extinction',
      genre: [
        'Action',
        'Adventure',
        'Sci-Fi'
      ]
    },
    {
      id: 4,
      title: 'X-Men: Days of Future Past',
      genre: [
        'Action',
        'Sci-Fi',
        'Thriller'
      ]
    },
    {
      id: 5,
      title: 'The Machinist',
      genre: [
        'Drama',
        'Thriller'
      ]
    },
    {
      id: 6,
      title: 'The Last Samurai',
      genre: [
        'Action',
        'Drama',
        'History'
      ]
    },
    {
      id: 7,
      title: 'The Amazing Spider-Man 2',
      genre: [
        'Action',
        'Adventure',
        'Fantasy'
      ]
    },
    {
      id: 8,
      title: 'Tangled',
      genre: [
        'Action',
        'Drama',
        'Sci-Fi'
      ]
    },
    {
      id: 9,
      title: 'Rush',
      genre: [
        'Animation',
        'Comedy',
        'Family'
      ]
    },
    {
      id: 10,
      title: 'Drag Me to Hell',
      genre: [
        'Horror',
        'Thriller'
      ]
    },
    {
      id: 11,
      title: 'Despicable Me 2',
      genre: [
        'Animation',
        'Comedy',
        'Family'
      ]
    },
    {
      id: 12,
      title: 'Kill Bill: Vol. 1',
      genre: [
        'Action',
        'Crime'
      ]
    },
    {
      id: 13,
      title: 'A Bug\'s Life',
      genre: [
        'Animation',
        'Adventure',
        'Comedy'
      ]
    },
    {
      id: 14,
      title: 'Life of Brian',
      genre: [
        'Comedy'
      ]
    },
    {
      id: 15,
      title: 'How to Train Your Dragon',
      genre: [
        'Animation',
        'Adventure',
        'Family'
      ]
    }
  ]

  constructor() {

  }

  ngOnInit() {
    
  }

}
