document.addEventListener("DOMContentLoaded", () => {
  let record = [];
  let quizes = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which language runs in a web browser?",
      choices: ["Python", "Java", "C++", "JavaScript"],
      answer: "JavaScript",
    },
    {
      question: "What is 5 + 7?",
      choices: ["10", "11", "12", "13"],
      answer: "12",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "William Shakespeare",
        "Mark Twain",
        "Leo Tolstoy",
      ],
      answer: "William Shakespeare",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars",
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      answer: "Carbon Dioxide",
    },
    {
      question: "What is the largest ocean on Earth?",
      choices: ["Atlantic", "Indian", "Arctic", "Pacific"],
      answer: "Pacific",
    },
    {
      question: "Who painted the Mona Lisa?",
      choices: [
        "Vincent Van Gogh",
        "Pablo Picasso",
        "Leonardo da Vinci",
        "Claude Monet",
      ],
      answer: "Leonardo da Vinci",
    },
    {
      question: "What is the chemical symbol for water?",
      choices: ["H2O", "O2", "CO2", "NaCl"],
      answer: "H2O",
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      choices: ["China", "Japan", "Thailand", "India"],
      answer: "Japan",
    },
    {
      question: "What is the largest planet in our solar system?",
      choices: ["Earth", "Saturn", "Jupiter", "Mars"],
      answer: "Jupiter",
    },
    {
      question: "Who discovered gravity?",
      choices: [
        "Albert Einstein",
        "Isaac Newton",
        "Galileo Galilei",
        "Nikola Tesla",
      ],
      answer: "Isaac Newton",
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      choices: ["Oxygen", "Gold", "Iron", "Helium"],
      answer: "Oxygen",
    },
    {
      question: "Which continent is the Sahara Desert located in?",
      choices: ["Asia", "Africa", "Australia", "Europe"],
      answer: "Africa",
    },
    {
      question: "Which is the longest river in the world?",
      choices: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      answer: "Nile",
    },
    {
      question: "Who wrote 'Pride and Prejudice'?",
      choices: [
        "Jane Austen",
        "Mary Shelley",
        "Charlotte Bronte",
        "Emily Dickinson",
      ],
      answer: "Jane Austen",
    },
    {
      question: "What is the hardest natural substance?",
      choices: ["Gold", "Iron", "Diamond", "Quartz"],
      answer: "Diamond",
    },
    {
      question: "Which organ purifies blood in the human body?",
      choices: ["Heart", "Kidney", "Liver", "Lungs"],
      answer: "Kidney",
    },
    {
      question: "What is the square root of 144?",
      choices: ["10", "11", "12", "14"],
      answer: "12",
    },
    {
      question: "Who is known as the Father of Computers?",
      choices: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
      answer: "Charles Babbage",
    },
    {
      question: "Which planet is closest to the Sun?",
      choices: ["Mercury", "Venus", "Earth", "Mars"],
      answer: "Mercury",
    },
    {
      question: "Which is the smallest continent by land area?",
      choices: ["Australia", "Europe", "Antarctica", "South America"],
      answer: "Australia",
    },
    {
      question: "Who invented the telephone?",
      choices: [
        "Thomas Edison",
        "Alexander Graham Bell",
        "Nikola Tesla",
        "Guglielmo Marconi",
      ],
      answer: "Alexander Graham Bell",
    },
    {
      question: "Which country gifted the Statue of Liberty to the USA?",
      choices: ["UK", "France", "Spain", "Italy"],
      answer: "France",
    },
    {
      question: "What is the main gas in the Earth's atmosphere?",
      choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      answer: "Nitrogen",
    },
    {
      question: "Which blood type is known as the universal donor?",
      choices: ["A", "B", "AB", "O"],
      answer: "O",
    },
    {
      question: "Who wrote 'The Odyssey'?",
      choices: ["Homer", "Plato", "Socrates", "Virgil"],
      answer: "Homer",
    },
    {
      question: "Which country is famous for tulips?",
      choices: ["Netherlands", "Germany", "Belgium", "Switzerland"],
      answer: "Netherlands",
    },
    {
      question: "What is the freezing point of water in Celsius?",
      choices: ["0", "32", "100", "-10"],
      answer: "0",
    },
    {
      question: "Which planet is known for its rings?",
      choices: ["Mars", "Jupiter", "Saturn", "Venus"],
      answer: "Saturn",
    },
    {
      question: "Who developed the theory of relativity?",
      choices: [
        "Isaac Newton",
        "Albert Einstein",
        "Galileo Galilei",
        "Stephen Hawking",
      ],
      answer: "Albert Einstein",
    },
    {
      question: "Which instrument measures atmospheric pressure?",
      choices: ["Thermometer", "Barometer", "Hygrometer", "Altimeter"],
      answer: "Barometer",
    },
    {
      question: "What is the largest mammal?",
      choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      answer: "Blue Whale",
    },
    {
      question: "Which is the tallest mountain in the world?",
      choices: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
      answer: "Mount Everest",
    },
    {
      question: "Which country hosted the 2016 Summer Olympics?",
      choices: ["China", "Brazil", "UK", "Russia"],
      answer: "Brazil",
    },
    {
      question: "Which vitamin is produced when sunlight hits the skin?",
      choices: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
      answer: "Vitamin D",
    },
    {
      question: "Which is the fastest land animal?",
      choices: ["Cheetah", "Lion", "Tiger", "Leopard"],
      answer: "Cheetah",
    },
    {
      question: "Who painted 'Starry Night'?",
      choices: [
        "Vincent Van Gogh",
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Claude Monet",
      ],
      answer: "Vincent Van Gogh",
    },
    {
      question: "Which is the smallest prime number?",
      choices: ["0", "1", "2", "3"],
      answer: "2",
    },
    {
      question: "Which metal is liquid at room temperature?",
      choices: ["Mercury", "Iron", "Copper", "Gold"],
      answer: "Mercury",
    },
    {
      question: "What is the main language spoken in Brazil?",
      choices: ["Spanish", "Portuguese", "French", "English"],
      answer: "Portuguese",
    },
    {
      question: "Which country has the most population?",
      choices: ["USA", "India", "China", "Russia"],
      answer: "China",
    },
    {
      question: "Which is the longest bone in the human body?",
      choices: ["Femur", "Tibia", "Humerus", "Fibula"],
      answer: "Femur",
    },
    {
      question: "Which is the capital of Australia?",
      choices: ["Sydney", "Melbourne", "Canberra", "Perth"],
      answer: "Canberra",
    },
    {
      question: "What is the boiling point of water in Celsius?",
      choices: ["0", "50", "100", "212"],
      answer: "100",
    },
    {
      question: "Which planet is known as the Morning Star?",
      choices: ["Venus", "Mars", "Jupiter", "Mercury"],
      answer: "Venus",
    },
    {
      question: "Who invented the light bulb?",
      choices: [
        "Nikola Tesla",
        "Thomas Edison",
        "Alexander Bell",
        "James Watt",
      ],
      answer: "Thomas Edison",
    },
    {
      question: "Which ocean is the Bermuda Triangle located in?",
      choices: ["Atlantic", "Pacific", "Indian", "Arctic"],
      answer: "Atlantic",
    },
    {
      question: "Which is the smallest country in the world?",
      choices: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
      answer: "Vatican City",
    },
    {
      question: "What is the chemical symbol for gold?",
      choices: ["Au", "Ag", "Gd", "Go"],
      answer: "Au",
    },
    {
      question: "Which is the deepest part of the ocean?",
      choices: [
        "Mariana Trench",
        "Tonga Trench",
        "Java Trench",
        "Puerto Rico Trench",
      ],
      answer: "Mariana Trench",
    },
    {
      question: "Which country is called the 'Land of Maple Leaf'?",
      choices: ["USA", "Canada", "Australia", "UK"],
      answer: "Canada",
    },
    {
      question: "Which organ is responsible for pumping blood?",
      choices: ["Lungs", "Heart", "Kidney", "Liver"],
      answer: "Heart",
    },
    {
      question: "What is the main source of energy for the Earth?",
      choices: ["Moon", "Sun", "Stars", "Wind"],
      answer: "Sun",
    },
    {
      question: "Which gas do humans exhale?",
      choices: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
      answer: "Carbon Dioxide",
    },
    {
      question: "Who is the author of 'Harry Potter' series?",
      choices: [
        "J.K. Rowling",
        "J.R.R. Tolkien",
        "George R.R. Martin",
        "Suzanne Collins",
      ],
      answer: "J.K. Rowling",
    },
  ];
  let next=document.querySelector(".next")

  let start = document.querySelector(".start");
  let quiz=document.querySelector(".quiz")
  start.addEventListener("click", (e) => {
    randomquiz();
  });
  nextfor()
 
  let right=0;
  function randomquiz() {
    let randoomNumber = Math.floor(Math.random() * quizes.length);
    let randomquiz = quizes[randoomNumber];
    let question = randomquiz.question;
   
    let quizquestion=document.createElement("h2")
    quizquestion.textContent=question
    let ul=document.createElement("ul")
    ul.classList.add("lists")
    record.push(question)
    ul.innerHTML=`<li class="answers">${randomquiz.choices[0]}</li>
    <li class="answers">${randomquiz.choices[1]}</li>
    <li class="answers">${randomquiz.choices[2]}</li>
    <li class="answers">${randomquiz.choices[3]}</li>`
    quiz.append(quizquestion)
    quiz.append(ul)
    start.classList.add("hidden")
    ul.addEventListener("click",(e)=>{
        if (e.target.tagName === "LI"){

            ul.style.pointerEvents="none"
            let li=e.target
            li.style.background="rgb(149, 8, 214)"
             next.classList.remove("hidden")
             if (li.textContent===randomquiz.answer){
                right+=1
             }
             
        }
        
        
        
        
        
    })

  }

  function nextfor(){
    next.addEventListener("click",()=>{
        quiz.innerHTML=""
        
       
       quizes=quizes.filter(quz=>!record.includes(quz.question))
       console.log(quizes.length)
       let randomquiz= quizes[Math.floor(Math.random() * quizes.length)]
       record.push(randomquiz.question)
      let quizquestion=document.createElement("h2")
    quizquestion.textContent=randomquiz.question

    let ul=document.createElement("ul")
    ul.classList.add("lists")
   
    ul.innerHTML=`<li class="answers">${randomquiz.choices[0]}</li>
    <li class="answers">${randomquiz.choices[1]}</li>
    <li class="answers">${randomquiz.choices[2]}</li>
    <li class="answers">${randomquiz.choices[3]}</li>`
    quiz.append(quizquestion)
    quiz.append(ul)
    start.classList.add("hidden")
    next.classList.add("hidden")
     if (record.length>=11){
        quiz.innerHTML=""
        let showmark=document.createElement("h3")
        let mark=document.createElement("h4")
        if (right<=4){
            showmark.textContent=`Your Score is very Bad ${right}`
            showmark.style.color="red"
            showmark.style.textAlign="center"
            mark.textContent=`Your Score:10/${right}`
            mark.style.textAlign="center"
        }
        else if(right>=4 && right<=7){
            showmark.textContent=`You got good Score ${right}`
            showmark.style.color="yellow"
            showmark.style.textAlign="center"
            mark.textContent=`Your Score:10/${right}`
            mark.style.textAlign="center"

        }
        else{
            showmark.textContent=`You got prefect score ever ${right}`
            showmark.style.color="green"
            showmark.style.textAlign="center"
             mark.textContent=`Your Score:${right}/10`
             mark.style.textAlign="center"

        }
        quiz.append(showmark)
        quiz.append(mark)
      
        next.classList.add("hidden")
        start.classList.remove("hidden")
        record.length=0
        console.log(right)
     }
    ul.addEventListener("click",(e)=>{
        if (e.target.tagName === "LI"){

            ul.style.pointerEvents="none"
            let li=e.target
            li.style.background="rgb(149, 8, 214)"
             next.classList.remove("hidden")
             if (li.textContent===randomquiz.answer){
                right+=1
             }
            
             
        }
       



    })

  })}
  
});
