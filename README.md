AI Bot Chat
AI Bot Chat is a library for quickly setting up an AI-powered chat using the GPT API. It automatically gathers data from the website to generate more relevant responses.

🚀 Features
Automated Data Collection: The bot analyzes webpage content for more accurate responses.
Interactive UI: A ready-to-use chat component with customizable styles.
GPT API Integration: Uses OpenAI's GPT API to process user queries.
Easy Embedding: Simple installation and setup without complex configurations.
Customization: Modify colors, sizes, positioning, and API endpoint.
📦 Installation
Install the library using npm:

bash
Copy
Edit
npm i ai-bot-chat
🛠 Usage
Import AI Bot Chat into your Angular project:

typescript
Copy
Edit
import { Component } from '@angular/core';
import { ChatBotComponent } from 'ai-bot-chat';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChatBotComponent],
  template: `<app-chat-bot 
    backgroundColor="#333"
    inputColor="#555"
    botMassageColor="blue"
    userMassageColor="red"
    sendColor="orange"
    scrollbarColor="darkBlue"
    scrollbarTrackColor="lightBlue"
    aiUrl="https://your-ai-api.com"
  ></app-chat-bot>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
📖 Documentation
For detailed documentation and examples, visit the GitHub repository.
