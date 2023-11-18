
type QuizdataType = {
  question: string
  id: number
  options: {
    option: string
    rank: number
    id: number
  }[]
}[]

export const Quizdata: QuizdataType = [
  {
    "id": 1,
    "question": "Rank these animals from largest to smallest",
    "options": [
      { "option": "Lion", "rank": 4, "id": 1 },
      { "option": "Hippopotamus", "rank": 3, "id": 2 },
      { "option": "Elephant", "rank": 1, "id": 3 },
      { "option": "Tiger", "rank": 5, "id": 4 },
      { "option": "Giraffe", "rank": 2, "id": 5 }
    ]
  },
  {
    "id": 2,
    "question": "Rank these countries by population, from most populous to least populous",
    "options": [
      { "option": "Indonesia", "rank": 4, "id": 1 },
      { "option": "United States", "rank": 3, "id": 2 },
      { "option": "China", "rank": 1, "id": 3 },
      { "option": "Brazil", "rank": 5, "id": 4 },
      { "option": "India", "rank": 2, "id": 5 }
    ]
  },
  {
    "id": 3,
    "question": "Rank these rivers by length, from longest to shortest",
    "options": [
      { "option": "Amazon", "rank": 2, "id": 1 },
      { "option": "Yangtze", "rank": 3, "id": 2 },
      { "option": "Mississippi-Missouri-Red-Arkansas", "rank": 4, "id": 3 },
      { "option": "Nile", "rank": 1, "id": 4 },
      { "option": "Ob-Irtysh", "rank": 5, "id": 5 }
    ]
  },
  {
    "id": 4,
    "question": "Rank these mountains by height, from tallest to shortest",
    "options": [
      { "option": "K2", "rank": 2, "id": 1 },
      { "option": "Kangchenjunga", "rank": 3, "id": 2 },
      { "option": "Lhotse", "rank": 4, "id": 3 },
      { "option": "Nanga Parbat", "rank": 5, "id": 4 },
      { "option": "Mount Everest", "rank": 1, "id": 5 }
    ]
  },
  {
    "id": 5,
    "question": "Rank these oceans by average depth, from deepest to shallowest",
    "options": [
      { "option": "Atlantic Ocean", "rank": 2, "id": 1 },
      { "option": "Pacific Ocean", "rank": 1, "id": 2 },
      { "option": "Southern Ocean", "rank": 4, "id": 3 },
      { "option": "Indian Ocean", "rank": 3, "id": 4 },
      { "option": "Arctic Ocean", "rank": 5, "id": 5 }
    ]
  },
  {
    "id": 6,
    "question": "Rank these cities by population, from most populous to least populous",
    "options": [
      { "option": "Mumbai", "rank": 4, "id": 1 },
      { "option": "Tokyo", "rank": 2, "id": 2 },
      { "option": "Beijing", "rank": 5, "id": 3 },
      { "option": "New York City", "rank": 1, "id": 4 },
      { "option": "Cairo", "rank": 3, "id": 5 }
    ]
  },
  {
    "id": 7,
    "question": "Rank these programming languages by popularity, from most to least used",
    "options": [
      { "option": "JavaScript", "rank": 2, "id": 1 },
      { "option": "Ruby", "rank": 5, "id": 2 },
      { "option": "Java", "rank": 3, "id": 3 },
      { "option": "C++", "rank": 4, "id": 4 },
      { "option": "Python", "rank": 1, "id": 5 }
    ]
  },
  {
    "id": 8,
    "question": "Rank these planets by average distance from the sun, from closest to farthest",
    "options": [
      { "option": "Jupiter", "rank": 5, "id": 1 },
      { "option": "Saturn", "rank": 4, "id": 2 },
      { "option": "Earth", "rank": 2, "id": 3 },
      { "option": "Mars", "rank": 3, "id": 4 },
      { "option": "Venus", "rank": 1, "id": 5 }
    ]
  },
  {
    "id": 9,
    "question": "Rank these film genres by box office revenue, from highest to lowest",
    "options": [
      { "option": "Science Fiction", "rank": 4, "id": 1 },
      { "option": "Drama", "rank": 2, "id": 2 },
      { "option": "Horror", "rank": 5, "id": 3 },
      { "option": "Action", "rank": 1, "id": 4 },
      { "option": "Comedy", "rank": 3, "id": 5 }
    ]
  },
  {
    "id": 10,
    "question": "Rank these historical events by chronological order, from earliest to latest",
    "options": [
      { "option": "Renaissance", "rank": 1, "id": 1 },
      { "option": "American Civil War", "rank": 3, "id": 2 },
      { "option": "Cold War", "rank": 5, "id": 3 },
      { "option": "World War I", "rank": 4, "id": 4 },
      { "option": "French Revolution", "rank": 2, "id": 5 }
    ]
  }
];
