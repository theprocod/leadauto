// Demo replay sequence — auto-plays in the Chat module
export const demoSequence = [
  {
    id: 'd1',
    type: 'incoming',
    text: 'How much is consultation?',
    time: '10:30 AM',
    delay: 0,
  },
  {
    id: 'd2',
    type: 'outgoing',
    text: 'Hi 👋 Thanks for contacting Dr. Smile Clinic. Consultation starts at ₹500. Would you like to book an appointment today?',
    time: '10:30 AM',
    delay: 2000,
    typingDuration: 1000,
  },
  {
    id: 'd3',
    type: 'outgoing',
    text: 'Just checking in 😊 Should I help you book your appointment?',
    time: '10:32 AM',
    delay: 8000,
    typingDuration: 1000,
  },
  {
    id: 'd4',
    type: 'outgoing',
    text: 'We still have slots available today. Let me know if you\'d like to visit.',
    time: '10:34 AM',
    delay: 14000,
    typingDuration: 1000,
  },
  {
    id: 'd5',
    type: 'incoming',
    text: 'Ok book me at 5pm tomorrow',
    time: '10:36 AM',
    delay: 20000,
  },
  {
    id: 'd6',
    type: 'outgoing',
    text: '✅ Appointment confirmed for tomorrow 5:00 PM with Dr. Mehta. We\'ll send a reminder 2 hours before. Reply CANCEL to reschedule.',
    time: '10:36 AM',
    delay: 23000,
    typingDuration: 1000,
  },
]

// Keyword-based auto-replies for live typing mode
export const autoReplies = {
  consultation: 'Our consultation fee is ₹500. Would you like to schedule an appointment with Dr. Mehta?',
  fees: 'Here are our standard rates:\n• Consultation: ₹500\n• Root Canal: ₹5,000–₹8,000\n• Dental Cleaning: ₹999\nWould you like to book?',
  price: 'Here are our standard rates:\n• Consultation: ₹500\n• Root Canal: ₹5,000–₹8,000\n• Dental Cleaning: ₹999\nWould you like to book?',
  cost: 'Here are our standard rates:\n• Consultation: ₹500\n• Root Canal: ₹5,000–₹8,000\n• Dental Cleaning: ₹999\nWould you like to book?',
  book: '📅 Sure! We have slots available today and tomorrow. What time works best for you?',
  appointment: '📅 Sure! We have slots available today and tomorrow. What time works best for you?',
  slot: '📅 Sure! We have slots available today and tomorrow. What time works best for you?',
  pain: '⚠️ We understand you\'re in discomfort. Dr. Mehta has an emergency slot at 2:00 PM today. Should I book it?',
  emergency: '🚨 For emergencies, please visit us directly or call +91 98765 00000. We\'ll keep a slot ready for you.',
  urgent: '🚨 For emergencies, please visit us directly or call +91 98765 00000. We\'ll keep a slot ready for you.',
  cancel: 'Your appointment has been cancelled. Would you like to reschedule for another time?',
  reschedule: 'No problem! What date and time would work better for you?',
  thanks: 'You\'re welcome! 😊 Feel free to reach out anytime. Have a great day!',
  thank: 'You\'re welcome! 😊 Feel free to reach out anytime. Have a great day!',
  hello: 'Hi there! 👋 Welcome to Dr. Smile Dental Clinic. How can we help you today?',
  hi: 'Hi there! 👋 Welcome to Dr. Smile Dental Clinic. How can we help you today?',
  default: 'Thanks for your message! 😊 Our team will get back to you shortly. In the meantime, reply BOOK to schedule an appointment.',
}

// Sample chat history for leads
export const leadChatHistory = {
  1: [
    { id: 'l1-1', type: 'incoming', text: 'Hi, I need root canal treatment', time: '9:15 AM', read: true },
    { id: 'l1-2', type: 'outgoing', text: 'Hi Rahul 👋 Thanks for contacting Dr. Smile Clinic! Root canal treatment starts at ₹5,000. Would you like to book a consultation first?', time: '9:15 AM', read: true },
    { id: 'l1-3', type: 'incoming', text: 'How much is root canal?', time: '9:20 AM', read: false },
  ],
  4: [
    { id: 'l4-1', type: 'incoming', text: 'Is RCT painful?', time: '10:05 AM', read: false },
  ],
  8: [
    { id: 'l8-1', type: 'incoming', text: 'Fever from 2 days', time: '10:12 AM', read: false },
    { id: 'l8-2', type: 'outgoing', text: 'Hi Sneha, we\'re sorry to hear that. Please visit us for a check-up. Dr. Mehta has a slot at 4 PM today.', time: '10:12 AM', read: true },
    { id: 'l8-3', type: 'incoming', text: 'What are the charges?', time: '10:14 AM', read: false },
    { id: 'l8-4', type: 'incoming', text: 'Also do you have parking?', time: '10:15 AM', read: false },
  ],
}
