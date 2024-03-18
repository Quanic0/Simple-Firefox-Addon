// popup.js
function getRandomNumber() {
    return Math.floor(Math.random() * 50) + 1;
  }
  
  function getRandomSpeech() {
    const speeches = [
        "Every journey begins with a single step. Today, take that step towards your dreams and goals.",
        "The only way to guarantee failure is to never start. Today is your opportunity to begin.",
        "Success doesn't come to those who wait. It comes to those who take action. Start now.",
        "Your future is created by what you do today, not tomorrow. Seize this moment and take action.",
        "Stop waiting for the perfect moment. Start creating it by taking action right now.",
        "Don't let fear hold you back. Take action despite your fears and watch yourself grow.",
        "You have the power to change your life, but it starts with taking action. What will you do today?",
        "Small actions lead to big results. Start small, but start now.",
        "Excuses won't get you anywhere. It's time to take responsibility and take action.",
        "The time for dreaming is over. Now is the time for doing. Take action and make it happen.",
        "You are capable of more than you realize. Take action and unlock your full potential.",
        "Life rewards those who take risks and take action. Dare to step out of your comfort zone.",
        "Your goals won't achieve themselves. It's up to you to take action and make them a reality.",
        "Procrastination is the enemy of progress. Beat it by taking action right now.",
        "Opportunities are all around you, but they won't wait forever. Seize them by taking action today.",
        "Believe in yourself enough to take action, even when no one else does.",
        "Success doesn't come to those who wish for it. It comes to those who work for it. Start working.",
        "Don't let the fear of failure stop you. Let the fear of never trying be your motivation to take action.",
        "You have the power to change your life story. Start a new chapter by taking action today.",
        "The road to success is paved with action, not intentions. Lace up your shoes and start walking.",
        "Dreams without action are just fantasies. Turn your dreams into reality by taking action now.",
        "The world is full of possibilities, but they won't come knocking on your door. Go out and find them through action.",
        "The time for waiting is over. The time for action is now. Seize the day!",
        "You are the author of your own destiny. Write a compelling story by taking action every day.",
        "Challenges are meant to be overcome. Face them head-on by taking decisive action.",
        "Success is not for the chosen few; it's for those who dare to take action. Will you be one of them?",
        "Your dreams are within reach, but only if you're willing to reach out and grab them through action.",
        "The difference between where you are and where you want to be is the action you take. Start moving forward.",
        "You have everything you need to succeed within you. Now, it's time to unleash it through action.",
        "Don't just talk about your dreams; take action to make them a reality.",
        "Life is too short to live with regrets. Take action now so you can look back with pride.",
        "Every action you take either brings you closer to your goals or further away. Choose wisely.",
        "The greatest risk is not taking any action. Don't let fear paralyze you. Take that first step.",
        "Success is not a destination; it's a journey. Start your journey by taking action today.",
        "You are the architect of your own future. Build something extraordinary by taking action now.",
        "It's not enough to want it; you have to work for it. Start working by taking action today.",
        "The time for waiting for the perfect moment is over. The perfect moment is now. Take action.",
        "Great things never came from comfort zones. Step out of yours and take action towards your dreams.",
        "Don't let the fear of failure hold you back. Let the desire for success drive you forward into action.",
        "Life rewards action-takers. Be bold, be courageous, and take action.",
        "Your destiny is not a matter of chance; it's a matter of choice. Choose to take action.",
        "The only limit to what you can achieve is the limit you place on your own actions. Remove those limits.",
        "You have the power to shape your own reality. Start shaping it with purposeful action.",
        "Small actions, when multiplied by consistency, lead to big results. Start small, but start now.",
        "Every action you take is a step towards the life you want to live. Choose your steps wisely.",
        "You have the power to change the world, but it starts with changing yourself through action.",
        "Success is not about luck; it's about hard work and taking action. Roll up your sleeves and get to work.",
        "The only way to predict the future is to create it. Start creating yours by taking action today.",
        "Don't wait for inspiration to strike. Take action, and inspiration will follow.",
        "Your dreams are worth fighting for. Fight for them by taking relentless action every single day.",
        
    
    ];
  
    const randomNumber = getRandomNumber();
    const speech = speeches[randomNumber - 1] || "No motivational speech found for this number.";
    return { number: randomNumber, speech: speech };
  }
  
  function displaySpeech(speechData) {
    document.getElementById('speech').textContent = `${speechData.speech}`;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const initialSpeech = getRandomSpeech();
    displaySpeech(initialSpeech); // Display initial speech when popup is opened initially
    
    document.getElementById('getSpeech').addEventListener('click', function() {
      const newSpeech = getRandomSpeech();
      displaySpeech(newSpeech);
      setInterval(getAndDisplaySpeech, 120000);
    });
  });
  