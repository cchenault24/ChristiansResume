# Interactive Resume Website

Welcome to my Interactive Resume website repository! This modern, single-page application serves as a dynamic showcase of my professional journey, skills, and accomplishments. Built with cutting-edge technologies and best practices in web development, this project demonstrates both my technical capabilities and professional experience.

## 🌐 Live Demo

Visit my interactive resume at [christianchenault.com](https://www.christianchenault.com/)

## ✨ Features

- **Modern UI/UX**: Clean, intuitive interface with smooth animations and transitions
- **Responsive Design**: Seamlessly adapts to all devices and screen sizes
- **Interactive Components**: Dynamic sections for better user engagement
- **Performance Optimized**: Fast loading times and optimal resource management
- **SEO Friendly**: Structured content for better search engine visibility

### Key Sections

- 🎯 About Me
- 💼 Professional Experience
- 🛠️ Technical Skills
- 🎓 Education
- 📜 Certifications
- 📱 Contact Information

## 🚀 Tech Stack

### Frontend

- **React 18+**: Modern UI library for building interactive interfaces
- **TypeScript**: Enhanced code reliability and developer experience
- **Vite**: Lightning-fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Smooth animations and transitions
- **Styled Components**: Component-based styling

### Cloud Infrastructure

- **AWS Amplify**: Full-stack development and hosting platform
- **AWS Route 53**: Domain management and DNS routing
- **GraphQL**: Efficient data querying and management

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/cchenault24/ChristiansResume.git
   cd ChristiansResume
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Configure the necessary environment variables in the `.env` file:
   
   **AWS Amplify Configuration:**
   - `VITE_AWS_PROJECT_REGION`: AWS region (e.g., `us-east-1`)
   - `VITE_AWS_APPSYNC_GRAPHQL_ENDPOINT`: Your AppSync GraphQL endpoint URL
   - `VITE_AWS_APPSYNC_REGION`: AppSync region (e.g., `us-east-1`)
   - `VITE_AWS_APPSYNC_AUTHENTICATION_TYPE`: Authentication type (typically `API_KEY`)
   - `VITE_AWS_APPSYNC_API_KEY`: Your AppSync API key
   
   **EmailJS Configuration:**
   - `VITE_EMAILJS_SERVICE_ID`: Your EmailJS service ID
   - `VITE_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID
   - `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS public key
   
   > **Note:** Never commit your `.env` file to version control. The `.env.example` file serves as a template with placeholder values.

## 💻 Development

Start the development server:

```bash
yarn dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

- `yarn dev`: Start development server
- `yarn build`: Build for production
- `yarn preview`: Preview production build
- `yarn lint`: Run ESLint
- `yarn lint:fix`: Auto-fix linting errors
- `yarn format`: Format code with Prettier
- `yarn format:check`: Check code formatting

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Christian Chenault - [LinkedIn](https://www.linkedin.com/in/christian-chenault/)

Project Link: [https://github.com/cchenault24/ChristiansResume](https://github.com/cchenault24/ChristiansResume)
