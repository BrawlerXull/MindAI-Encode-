# MindAi

MindAi is an innovative web application designed to enhance mental well-being through a variety of features, including journaling, questionnaires, meditation, mini-games, events, and more. The project also integrates an advanced chatbot powered by a fine-tuned Gemini 1.5 Flash model, with additional capabilities for text-to-speech and speech-to-text functionalities.

---

## Features

### Core Features

- **Journaling**: Helps users document their daily thoughts and emotions.
- **Questionnaire**: Enables self-assessment for mental health insights.
- **Meditation**: Provides guided meditation sessions.
- **Mini-Games**: Fun and engaging games to help users relax.
- **Event Management**: Create and manage events related to mental health and personal growth.
- **Mood Calendar**: Track moods over time to identify patterns and trends.

### Chatbot

- **Gemini 1.5 Flash Chatbot**: Fine-tuned for personalized and insightful conversations.
- **Text-to-Speech (TTS)**: Powered by Smallest.ai for seamless voice responses.
- **Speech-to-Text (STT)**: Integrated using the Web Speech API for voice input.

---

## Project Structure

```plaintext
brawlerxull-mindai-encode/
├── README.md
├── components.json
├── middleware.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── .eslintrc.json
├── app/
│   ├── global.d.ts
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── api/
│   │   ├── chat/
│   │   │   └── route.ts
│   │   ├── check-in/
│   │   │   └── route.ts
│   │   ├── events/
│   │   │   ├── route.ts
│   │   │   └── create/
│   │   │       └── route.ts
│   │   ├── process-questionnaire/
│   │   │   └── route.ts
│   │   └── tts/
│   │       └── route.ts
│   ├── calendar/
│   │   └── page.tsx
│   ├── chatbot/
│   │   └── page.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   ├── events/
│   │   └── page.tsx
│   ├── fonts/
│   │   ├── GeistMonoVF.woff
│   │   └── GeistVF.woff
│   ├── helpline/
│   │   └── page.tsx
│   ├── input/
│   │   └── page.tsx
│   ├── meditation/
│   │   └── page.tsx
│   ├── mini-games/
│   │   └── page.tsx
│   ├── questionnaire/
│   │   └── page.tsx
│   ├── report/
│   │   └── page.tsx
│   ├── sign-in/
│   │   └── [[...sign-in]]/
│   │       └── page.tsx
│   └── sign-up/
│       └── [[...sign-up]]/
│           └── page.tsx
├── components/
│   ├── joke-of-the-day.tsx
│   ├── mode-toggle.tsx
│   ├── theme-provider.tsx
│   └── ui/
│       ├── button.tsx
│       ├── calendar.tsx
│       ├── card.tsx
│       ├── dropdown-menu.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── radio-group.tsx
│       ├── scroll-area.tsx
│       ├── select.tsx
│       ├── slider.tsx
│       ├── tabs.tsx
│       ├── textarea.tsx
│       └── toast.ts
├── hooks/
│   ├── use-toast.ts
│   ├── useChat.ts
│   ├── useEvents.ts
│   ├── useForm.ts
│   ├── useJoke.ts
│   ├── useMeditationTimer.ts
│   ├── useMemoryGame.ts
│   ├── useMoodCalendar.ts
│   ├── useQuestionnaire.ts
│   └── useReports.ts
├── lib/
│   ├── meditationData.ts
│   ├── mongodb.ts
│   └── utils.ts
├── models/
│   ├── CheckIns.ts
│   └── Events.ts
├── public/
│   └── sounds/
├── redux/
│   ├── store.ts
│   └── slices/
│       ├── checkInsSlice.ts
│       └── reportSlice.ts
└── types/
    └── global.d.ts
```

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/brawlerxull/mindai.git
   cd mindai
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory and add the required variables.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the application:
   Navigate to `http://localhost:3000` in your web browser.

---

## Tech Stack

- **Frontend**: React, Next.js, TailwindCSS
- **Backend**: Node.js, MongoDB, API routes
- **State Management**: Redux Toolkit
- **AI Integration**: Gemini 1.5 Flash model, Smallest.ai, Web Speech API
- **Testing**: Jest (if applicable)

---

## Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add feature-name'`).
5. Push to the branch (`git push origin feature-name`).
6. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

