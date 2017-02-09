const episodes = [{
  title: "1. Introduction",
  date: "02/01/2017",
  file: {
    url: "http://ocdevel.com/files/podcasts/machine-learning/ml-1.mp3",
    length: 11955748,
    type: "audio/mpeg",
    duration: "12:54"
  },
  guid: "a9bf6e09-aa7e-4126-9e36-22b152419c8f",
  teaser: "Introduction to the Machine Learning Guide",
  body:
`Who am I: [Tyler Renelle](https://www.linkedin.com/in/lefnire)
What is this podcast? 
  - "Middle" level overview (deeper than a bird's eye view of machine learning; higher than math equations)
  - No math/programming experience required
Who is it for
  - Anyone curious about machine learning fundamentals (coming from /r/singularity, futurology, learningmachinelearning, etc)
  - Aspiring machine learning developers (perhapse transitioning from web/mobile development)
Why audio?
  - Supplementary content for commute/exercise/chores will help solidify your book/course-work
What it's not
  - News and Interviews
    - [TWiML and AI](https://twimlai.com)
    - [O'Reilly Data Show](https://www.oreilly.com/topics/oreilly-data-show-podcast)
    - [Talking machines](http://www.thetalkingmachines.com/)
  - Misc Topics
    - [Linear Digressions](http://lineardigressions.com/)
    - [Data Skeptic](https://dataskeptic.com/)
  - iTunesU issues
  - [Learning machines 101](http://www.learningmachines101.com/)
Planned episodes
  - What is AI/ML: definition, comparison, history
  - Inspiration: automation, singularity, consciousness
  - ML Intuition: learning basics (infer/error/train); supervised/unsupervised/reinforcement; applications
  - Math overview: linear algebra, statistics, calculus
  - Linear models: supervised (regression, classification); unsupervised
  - Parts: regularization, performance evaluation, dimensionality reduction, etc
  - Deep models: neural networks, recurrent neural networks (RNNs), convolutional neural networks (convnets/CNNs)
  - Languages and Frameworks: Python vs R vs Java vs C/C++ vs MATLAB, etc; TensorFlow vs Torch vs Theano vs Spark, etc
Resources`
}, {
  title: "2. What is AI / ML",
  date: "02/19/2017",
  guid: "129d0157-fbda-4cc6-aaae-1c96745c12c9",
  file: {
    url: "http://ocdevel.com/files/podcasts/machine-learning/ml-2.mp3",
    length: 30172184,
    duration: "32:14",
    type: "audio/mpeg"
  },
  teaser: "What is artificial intelligence and machine learning? What's the difference? How about compared to statistics and data science? AI history.",
  body:
`## Episode
  - What is AI?
    - Simulate any intellectual task
    - Goals
      - Search / planning (eg chess)
      - Reasoning / knowledge representation (eg Watson on Jeopardy)
      - Perception
      - Ability to move and manipulate objects
      - Natural language processing (communication)
      - Learning
    - Applications
      - Autonomous vehicles (drones, self-driving cars)
      - Medical diagnosis
      - Creating art (such as poetry)
      - Proving mathematical theorems
      - Playing games (such as Chess or Go)
      - Search engines
      - Online assistants (such as Siri)
      - Image recognition in photographs
      - Spam filtering
      - Prediction of judicial decisions
      - Targeting online advertisements 
    - When a technique -> mainstream, no longer AI: "AI effect"
      - Pre-programming
      - Weak AI vs Strong / AGI
  - What is ML?
    - Pattern / Predict / Learn
    - Versus
      - AI
        - The "whole" (robotics, planning, etc)
        - Professional
          - ML more interesting, subsuming other fields
            - From circle to splotch, with ever-growing tendrils
            - Deep Learning ^
          - ML is starter
        - Conversation
          "AI when wow-ing or colloquial, ML when being professional. Like "coding" vs "software engineering""
      - Stats
      - DataScience
        - Professionally
        - Adsense v Analytics
  - History
    - Greek mythology, Golums
    - First attempt: Ramon Lull, 13th century
    - Davinci's walking animals
    - Descartes, Leibniz
    - 1700s-1800s: Statistics & Mathematical decision making
      - Thomas Bayes: reasoning about the probability of events
      - George Boole: logical reasoning / binary algebra
      - Gottlob Frege: Propositional logic 
    - 1832: Charles Babbage & Ada Byron / Lovelace: designed Analytical Engine (1832), programmable mechanical calculating machines
    - 1936: Universal Turing Machine
      - Computing Machinery and Intelligence - explored AI!
    - 1946: John von Neumann Universal Computing Machine
    - 1943: Warren McCulloch & Walter Pitts: cogsci rep of neuron; Frank Rosemblatt uses to create Perceptron (-> neural networks by way of MLP)
    - 50s-70s: "AI" coined @Dartmouth workshop 1956 - goal to simulate all aspects of intelligence. John McCarthy, Marvin Minksy, Arthur Samuel, Oliver Selfridge, Ray Solomonoff, Allen Newell, Herbert Simon
      - Newell & Simon: Hueristics -> Logic Theories, General Problem Solver
      - Slefridge: Computer Vision
      - NLP
      - Stanford Research Institute: Shakey
      - Feigenbaum: Expert systems
      - GOFAI / symbolism
        - symbolic
        - operations research / management science
        - logic-based
        - knowledge-based / expert systems
    - 70s: Lighthill report (James Lighthill), big promises -> AI Winter
    - 90s: Data, Computation, Practical Application -> AI back (90s)
      - Connectionism optimizations: Geoffrey Hinton: 2006, optimized back propagation
    - Bloomberg, 2015 was whopper for AI in industry
    - AlphaGo & DeepMind
    
## Resources
  - [Wikipedia:AI](https://en.wikipedia.org/wiki/Artificial_intelligence)
  - Brief history articles: [1](https://ai100.stanford.edu/2016-report/appendix-i-short-history-ai) [2](http://aitopics.org/misc/brief-history)
  - Accessible / short audiobook on AI history: [Machines of Loving Grace](http://amzn.to/2k8Atrx)
  - Exhaustive book on AI history (defacto) [The Quest for Artificial Intelligence](http://amzn.to/2lwoGQH)
`
}];

const podcast = {
  title: "Machine Learning Guide",
  link: "http://ocdevel.com/podcasts/machine-learning",
  feed: "http://ocdevel.com/files/podcasts/machine-learning/feed.xml",
  keywords: "machine,learning,ml,introduction,artificial,intelligence,ai",
  image: "http://ocdevel.com/files/podcasts/machine-learning/art.jpg",
  date: new Date('02/01/2017'),
  teaser: "Introduction and intuition on machine learning principles, algorithms, and math. Your 'start here' ML resource.",
  body: "",
  episodes: episodes
};

module.exports = podcast;