const data =[
  {
    id: 1,
    category: 'Road signs',
    question: 'What does this sign mean?',
    image: 'BILD-1.png',
    options: [
      { key: 1.1, text: 'No entry', isCorrect: true },
      { key: 1.2, text: 'One-way street', isCorrect: false },
      { key: 1.3, text: 'Parking allowed', isCorrect: false },
      { key: 1.4, text: 'Give way', isCorrect: false }
    ],
    explanation: 'A red circle with a white horizontal bar indicates "No entry" for all vehicles.'
  },
  {
    id: 2,
    category: 'Road signs',
    question: 'What does this sign indicate?',
    image: 'BILD-2.png',
    options: [
      { key: 2.1, text: 'Priority road', isCorrect: true },
      { key: 2.2, text: 'Stop sign', isCorrect: false },
      { key: 2.3, text: 'Motorway', isCorrect: false },
      { key: 2.4, text: 'Cycle path', isCorrect: false }
    ],
    explanation: 'A yellow diamond with a white border means you are on a priority road.'
  },
  {
    id: 3,
    category: 'Road signs',
    question: 'What does this sign indicate?',
    image: 'BILD-3.png',
    options: [
      { key: 3.1, text: 'Speed limit', isCorrect: true },
      { key: 3.2, text: 'Speed bump', isCorrect: false },
      { key: 3.3, text: 'Motorway', isCorrect: false },
      { key: 3.4, text: 'No parking', isCorrect: false }
    ],
    explanation: 'A circular sign with a number indicates the maximum allowed speed.'
  },
  {
    id: 4,
    category: 'Road signs',
    question: 'What does this sign mean?',
    image: 'BILD-4.png',
    options: [
      { key: 4.1, text: 'No parking', isCorrect: true },
      { key: 4.2, text: 'No entry', isCorrect: false },
      { key: 4.3, text: 'Loading zone only', isCorrect: false },
      { key: 4.4, text: 'End of priority road', isCorrect: false }
    ],
    explanation: 'A blue circle with a red border and one red diagonal stripe means no parking.'
  },
  {
    id: 5,
    category: 'Road signs',
    question: 'What does this triangular sign indicate?',
    image: 'BILD-5.jpg',
    options: [
      { key: 5.1, text: 'Yield', isCorrect: false },
      { key: 5.2, text: 'Stop sign', isCorrect: true },
      { key: 5.3, text: 'Children crossing', isCorrect: false },
      { key: 5.4, text: 'Roundabout', isCorrect: false }
    ],
    //explanation: 'A triangular warning sign with a car skidding symbol indicates slippery road conditions.'
  },

  // --- Traffic rules ---
  {
    id: 6,
    category: 'Traffic rules',
    question: 'Who has the right of way at an uncontrolled intersection?',
    options: [
      { key: 6.1, text: 'Vehicle on the left', isCorrect: false },
      { key: 6.2, text: 'Vehicle on the right', isCorrect: true },
      { key: 6.3, text: 'Vehicle going straight', isCorrect: false },
      { key: 6.4, text: 'Vehicle turning left', isCorrect: false }
    ],
    explanation: 'At uncontrolled intersections, vehicles coming from the right have the right of way.'
  },
  {
    id: 7,
    category: 'Traffic rules',
    question: 'What should you do at a red traffic light?',
    options: [
      { key: 7.1, text: 'Stop before the stop line', isCorrect: true },
      { key: 7.2, text: 'Proceed if no traffic is coming', isCorrect: false },
      { key: 7.3, text: 'Slow down and continue', isCorrect: false },
      { key: 7.4, text: 'Stop only if pedestrians are present', isCorrect: false }
    ],
    explanation: 'You must always stop at a red traffic light, before the stop line.'
  },
  {
    id: 8,
    category: 'Traffic rules',
    question: 'What does a flashing yellow light mean?',
    options: [
      { key: 8.1, text: 'Stop immediately', isCorrect: false },
      { key: 8.2, text: 'Proceed with caution', isCorrect: true },
      { key: 8.3, text: 'Traffic must yield', isCorrect: false },
      { key: 8.4, text: 'Pedestrian crossing active', isCorrect: false }
    ],
    explanation: 'A flashing yellow light indicates that you should proceed carefully but you do not need to stop.'
  },
  {
    id: 9,
    category: 'Traffic rules',
    question: 'When are you allowed to use a mobile phone while driving?',
    options: [
      { key: 9.1, text: 'At traffic lights', isCorrect: false },
      { key: 9.2, text: 'Using hands-free device', isCorrect: true },
      { key: 9.3, text: 'While waiting in traffic', isCorrect: false },
      { key: 9.4, text: 'Always allowed', isCorrect: false }
    ],
    explanation: 'Using a mobile phone while driving is only allowed if using a hands-free device.'
  },
  {
    id: 10,
    category: 'Traffic rules',
    question: 'What is the minimum safe following distance in normal conditions?',
    options: [
      { key: 10.1, text: '1 second', isCorrect: false },
      { key: 10.2, text: '2 seconds', isCorrect: true },
      { key: 10.3, text: '3 seconds', isCorrect: false },
      { key: 10.4, text: '4 seconds', isCorrect: false }
    ],
    explanation: 'A minimum 2-second following distance is recommended in normal driving conditions.'
  },

  // --- Safety ---
  {
    id: 11,
    category: 'Safety',
    question: 'When should you use your seatbelt?',
    options: [
      { key: 11.1, text: 'Only on highways', isCorrect: false },
      { key: 11.2, text: 'Always', isCorrect: true },
      { key: 11.3, text: 'Only when driving fast', isCorrect: false },
      { key: 11.4, text: 'Only in city traffic', isCorrect: false }
    ],
    explanation: 'Seatbelts should always be worn to protect occupants in any driving situation.'
  },
  {
    id: 12,
    category: 'Safety',
    question: 'What is the main purpose of ABS brakes?',
    options: [
      { key: 12.1, text: 'Reduce fuel consumption', isCorrect: false },
      { key: 12.2, text: 'Prevent wheels from locking', isCorrect: true },
      { key: 12.3, text: 'Increase stopping distance', isCorrect: false },
      { key: 12.4, text: 'Improve steering comfort', isCorrect: false }
    ],
    explanation: 'ABS prevents wheel lockup during braking, helping maintain steering control.'
  },
  {
    id: 13,
    category: 'Safety',
    question: 'What should you do if your car starts to skid?',
    options: [
      { key: 13.1, text: 'Brake hard immediately', isCorrect: false },
      { key: 13.2, text: 'Steer in the direction of the skid', isCorrect: true },
      { key: 13.3, text: 'Accelerate', isCorrect: false },
      { key: 13.4, text: 'Turn the wheel opposite to the skid', isCorrect: false }
    ],
    explanation: 'Steering into the skid helps regain control of the vehicle.'
  },
  {
    id: 14,
    category: 'Safety',
    question: 'When is it dangerous to drive after taking medicine?',
    options: [
      { key: 14.1, text: 'If it causes drowsiness or affects reaction', isCorrect: true },
      { key: 14.2, text: 'Only if it is prescription medicine', isCorrect: false },
      { key: 14.3, text: 'It is never dangerous', isCorrect: false },
      { key: 14.4, text: 'Only at night', isCorrect: false }
    ],
    explanation: 'Any medication that affects alertness or reaction time increases driving risk.'
  },
  {
    id: 15,
    category: 'Safety',
    question: 'What should you do when approaching a pedestrian crossing?',
    options: [
      { key: 15.1, text: 'Speed up', isCorrect: false },
      { key: 15.2, text: 'Slow down and be ready to stop', isCorrect: true },
      { key: 15.3, text: 'Ignore pedestrians', isCorrect: false },
      { key: 15.4, text: 'Honk and pass quickly', isCorrect: false }
    ],
    explanation: 'Always slow down and yield to pedestrians at crossings.'
  },

  // --- Environment ---
  {
    id: 16,
    category: 'Environment',
    question: 'Which driving behavior reduces fuel consumption?',
    options: [
      { key: 16.1, text: 'Smooth acceleration and braking', isCorrect: true },
      { key: 16.2, text: 'Frequent speeding', isCorrect: false },
      { key: 16.3, text: 'Keeping engine idling', isCorrect: false },
      { key: 16.4, text: 'Rapid lane changes', isCorrect: false }
    ],
    explanation: 'Smooth driving reduces fuel usage and emissions.'
  },
  {
    id: 17,
    category: 'Environment',
    question: 'What is the best way to reduce pollution from your car?',
    options: [
      { key: 17.1, text: 'Use electric or hybrid vehicles', isCorrect: true },
      { key: 17.2, text: 'Drive faster', isCorrect: false },
      { key: 17.3, text: 'Rev the engine regularly', isCorrect: false },
      { key: 17.4, text: 'Keep tires overinflated', isCorrect: false }
    ],
    explanation: 'Electric or hybrid cars produce less harmful emissions.'
  },
  {
    id: 18,
    category: 'Environment',
    question: 'Why should you avoid unnecessary idling?',
    options: [
      { key: 18.1, text: 'To save fuel and reduce emissions', isCorrect: true },
      { key: 18.2, text: 'To warm up the tires', isCorrect: false },
      { key: 18.3, text: 'To charge the battery faster', isCorrect: false },
      { key: 18.4, text: 'It has no effect', isCorrect: false }
    ],
    explanation: 'Idling wastes fuel and produces unnecessary pollution.'
  },
  {
    id: 19,
    category: 'Environment',
    question: 'How can you drive more environmentally friendly?',
    options: [
      { key: 19.1, text: 'Plan trips efficiently', isCorrect: true },
      { key: 19.2, text: 'Drive aggressively', isCorrect: false },
      { key: 19.3, text: 'Leave engine running at stops', isCorrect: false },
      { key: 19.4, text: 'Use maximum air conditioning', isCorrect: false }
    ],
    explanation: 'Planning trips reduces fuel use and emissions.'
  },
  {
    id: 20,
    category: 'Environment',
    question: 'What type of tires improve fuel efficiency?',
    options: [
      { key: 20.1, text: 'Low rolling resistance tires', isCorrect: true },
      { key: 20.2, text: 'Off-road tires', isCorrect: false },
      { key: 20.3, text: 'Winter tires in summer', isCorrect: false },
      { key: 20.4, text: 'Overinflated tires', isCorrect: false }
    ],
    explanation: 'Low rolling resistance tires reduce friction and save fuel.'
  },

  // --- Mixed / General ---
  {
    id: 21,
    category: 'General',
    question: 'At night, when should you use dipped headlights?',
    options: [
      { key: 21.1, text: 'In poor visibility or when meeting another vehicle', isCorrect: true },
      { key: 21.2, text: 'Only on highways', isCorrect: false },
      { key: 21.3, text: 'Never at night', isCorrect: false },
      { key: 21.4, text: 'Only in city streets', isCorrect: false }
    ],
    explanation: 'Dipped headlights prevent dazzling other drivers while providing sufficient light.'
  },
  {
    id: 22,
    category: 'General',
    question: 'When is it mandatory to use winter tires?',
    options: [
      { key: 22.1, text: 'During snowy or icy conditions', isCorrect: true },
      { key: 22.2, text: 'All year round', isCorrect: false },
      { key: 22.3, text: 'Only on highways', isCorrect: false },
      { key: 22.4, text: 'In rainy weather', isCorrect: false }
    ],
    explanation: 'Winter tires provide better traction on snow and ice.'
  },
  {
    id: 23,
    category: 'General',
    question: 'What does a double continuous line in the center of the road mean?',
    options: [
      { key: 23.1, text: 'Overtaking prohibited', isCorrect: true },
      { key: 23.2, text: 'Parking allowed', isCorrect: false },
      { key: 23.3, text: 'Traffic light ahead', isCorrect: false },
      { key: 23.4, text: 'Pedestrian crossing', isCorrect: false }
    ],
    explanation: 'A double continuous line means you must not cross it for overtaking.'
  },
  {
    id: 24,
    category: 'General',
    question: 'What should you check before overtaking another vehicle?',
    options: [
      { key: 24.1, text: 'Rear and side traffic, speed, and distance', isCorrect: true },
      { key: 24.2, text: 'Only the rearview mirror', isCorrect: false },
      { key: 24.3, text: 'Traffic signs only', isCorrect: false },
      { key: 24.4, text: 'Nothing, just overtake', isCorrect: false }
    ],
    explanation: 'Safe overtaking requires checking mirrors, blind spots, and ensuring enough space.'
  },
  {
    id: 25,
    category: 'General',
    question: 'When approaching a roundabout, who has priority?',
    options: [
      { key: 25.1, text: 'Traffic inside the roundabout', isCorrect: true },
      { key: 25.2, text: 'Traffic entering from the right', isCorrect: false },
      { key: 25.3, text: 'Traffic entering from the left', isCorrect: false },
      { key: 25.4, text: 'Pedestrians only', isCorrect: false }
    ],
    explanation: 'Vehicles already on the roundabout have priority over entering traffic.'
  },
  {
    id: 26,
    category: 'General',
    question: 'What is the main purpose of using hazard warning lights?',
    options: [
      { key: 26.1, text: 'Warn other drivers of danger or stopped vehicle', isCorrect: true },
      { key: 26.2, text: 'Signal turning', isCorrect: false },
      { key: 26.3, text: 'Park in no-parking zones', isCorrect: false },
      { key: 26.4, text: 'Speed up in emergencies', isCorrect: false }
    ],
    explanation: 'Hazard lights warn other road users about an emergency or stationary vehicle.'
  },
  {
    id: 27,
    category: 'General',
    question: 'What is the effect of overloading your vehicle?',
    options: [
      { key: 27.1, text: 'Longer stopping distances and reduced control', isCorrect: true },
      { key: 27.2, text: 'Better fuel efficiency', isCorrect: false },
      { key: 27.3, text: 'Improved stability', isCorrect: false },
      { key: 27.4, text: 'Faster acceleration', isCorrect: false }
    ],
    explanation: 'Overloading increases stopping distances and reduces vehicle control.'
  },
  {
    id: 28,
    category: 'General',
    question: 'What should you do if your headlights fail while driving at night?',
    options: [
      { key: 28.1, text: 'Use hazard lights and stop safely', isCorrect: true },
      { key: 28.2, text: 'Drive faster to reach destination', isCorrect: false },
      { key: 28.3, text: 'Switch to high beams', isCorrect: false },
      { key: 28.4, text: 'Turn on fog lights only', isCorrect: false }
    ],
    explanation: 'Hazard lights help alert other drivers, and you should stop safely.'
  },
  {
    id: 29,
    category: 'General',
    question: 'What is aquaplaning and how can it be prevented?',
    options: [
      { key: 29.1, text: 'Tires losing grip on wet roads; reduce speed and avoid sudden maneuvers', isCorrect: true },
      { key: 29.2, text: 'Driving on ice; use winter tires', isCorrect: false },
      { key: 29.3, text: 'Overheating brakes; use engine braking', isCorrect: false },
      { key: 29.4, text: 'Excessive speed; always drive fast', isCorrect: false }
    ],
    explanation: 'Aquaplaning occurs when tires lose contact with the road due to water; reducing speed and avoiding sudden movements helps prevent it.'
}

];

export default data;