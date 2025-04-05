# GovGyan - Government Schemes Information Platform

GovGyan is a comprehensive platform designed to help citizens access and understand various government schemes and initiatives. Our platform features an AI-powered chatbot that provides instant, accurate information about government programs.

## Features

- 🤖 **AI-Powered Chatbot**: Get instant answers about government schemes using our Gemini-powered chatbot
- 🔒 **Secure & Reliable**: Built with robust error handling and rate limiting
- ⌨️ **Keyboard Shortcuts**: Efficient navigation with keyboard controls
- 💾 **Chat History**: Persistent chat history for continued conversations
- 🌙 **Dark Mode Support**: Comfortable viewing in any lighting condition
- ♿ **Accessibility**: WCAG compliant with full keyboard navigation and screen reader support

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn package manager
- A Gemini API key from Google

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/govigyan.git
   cd govigyan
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:

   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Chatbot Features

- Type your question about any government scheme in the chat input
- Press `Ctrl/⌘ + K` to quickly focus the chat input
- Press `Escape` to clear the input field
- Click the trash icon to clear chat history
- View message timestamps for better context
- Automatic error handling with clear feedback

### Rate Limiting

The chatbot implements rate limiting to ensure fair usage:

- 10 messages per minute per user
- Clear error messages when limits are reached

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **UI Components**: Shadcn/ui
- **Styling**: Tailwind CSS
- **AI Integration**: Google Gemini API
- **Type Safety**: TypeScript

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Run tests and ensure code quality
5. Submit a pull request

## Security

- All user inputs are validated and sanitized
- Rate limiting prevents abuse
- Content filtering through Gemini's safety settings
- No sensitive data storage

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/govigyan/issues) page
2. Create a new issue if needed
3. Contact us at support@govigyan.com

## Acknowledgments

- Google Gemini API for powering our chatbot
- The open-source community for various tools and libraries
- Contributors who have helped improve the platform
