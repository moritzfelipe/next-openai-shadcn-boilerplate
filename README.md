# Next.js AI Application Boilerplate

This project is a boilerplate for creating AI-powered applications using Next.js, Shadcn/ui, OpenAI API, and modern web technologies. It provides a structured foundation for building interactive AI applications.

## 1. Tech Stack
- [TypeScript](https://www.typescriptlang.org/) for static typing
- [Next.js 14](https://nextjs.org/) for server-side rendering and routing
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Shadcn/ui](https://ui.shadcn.com/) for UI components
- [OpenAI API](https://platform.openai.com/docs/api-reference) for AI-powered features

## 2. Project Structure

- `app/`: Contains the main application code
  - `api/openai/route.ts`: Handles OpenAI API integration, processes requests, and manages API calls to OpenAI
  - `page.tsx`: Main page component rendering the PetNameGenerator
- `components/`: Contains reusable React components
  - `ui/`: Contains shadcn/ui components
  - `petNameGenerator.tsx`: Core component for the Pet Name Generator application
- `hooks/`: 
  - `useOpenAI.ts`: Custom hook for OpenAI API interactions
- `prompts/`: 
  - `petNamePrompt.ts`: Configuration for pet name generation prompts with [structured outputs](https://platform.openai.com/docs/guides/structured-outputs) should use model gpt-4o-2024-08-06 or later

## 3. Getting Started

### 3.1 Clone the repository

```bash
git clone https://github.com/moritzfelipe/next-openai-shadcn-boilerplate.git
cd next-openai-shadcn-boilerplate
```

### 3.2 Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3.3 Add your OpenAI API key

#### 3.3.1 Create a `.env.local` file in the root of the project or rename `.env.example` to `.env.local`
#### 3.3.2 Get your OpenAI API key [here](https://platform.openai.com/api-keys)
#### 3.3.3 Add your OpenAI API key:

```bash
OPENAI_API_KEY=your_openai_api_key
```

### 3.4 Run the development server

#### 3.4.1 Start the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

#### 3.4.2 Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
#### 3.4.3 Enter an animal name to generate a pet name.

## 4. Customization: Create your own AI-powered application

### 4.1 Create a UI with v0

#### 4.1.1 Go to [v0](https://v0.dev/chat) and create a UI in the chat until you are happy.
#### 4.1.2 Click on 'Install' at the top to get installation instructions for the components.
#### 4.1.3 Follow the terminal command provided to add the components to your project. The components are now installed into your project.

### 4.2 Install Cursor if you haven't already
#### 4.2.1 Install Cursor from [here](https://cursor.sh/)
#### 4.2.2 Open the project in Cursor
#### 4.2.3 Ask Cursor in the chat to implement your installed components with a prompt like this:
"I want to transform this petname generator boilerplate into a recipe app. You need to change and implement the recipe app file @recipe-app.tsx and create a new prompt file for it."

Make sure to use claude-3.5-sonnet and click on the "ctrl+enter codebase" button.
It is important to implement the new components and to create a new prompt file for it. Check the promptfile if it is structured correctly. This often causes errors.

#### 4.2.4 Follow the instructions from Cursor. You can click on "Apply" on the top right if you are in the file that cursor wants you to change to directly apply the changes to it.

#### 4.2.5 You can now start the development server again with:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

#### 4.2.6 Debug your application. By copying the errors into the Cursor chat.
#### 4.2.7 Ask Cursor to implement new changes.


## Learn More

To learn more about the technologies used in this boilerplate:

- [Next.js Documentation](https://nextjs.org/docs)
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
