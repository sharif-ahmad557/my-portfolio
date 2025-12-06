# 🚀 Shahriar - Professional Portfolio

![Project Banner](https://i.ibb.co.com/SD8BfpqR/portfolio-banner.png) 


A modern, high-performance, and fully responsive Personal Portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. This project showcases a seamless user experience with dark/light mode support, interactive animations, and a functional contact form.

🔗 **Live Demo:** [https://first-portfolio-shahriar.vercel.app/](https://first-portfolio-shahriar.vercel.app/)

---

## ✨ Key Features

*   🎨 **Modern UI/UX:** Clean, minimalist, and pixel-perfect design.
*   🌓 **Dark & Light Mode:** Fully supported theme switching with persistent state.
*   ⚡ **High Performance:** Built with Next.js App Router for optimal speed and SEO.
*   📱 **Fully Responsive:** Optimized for Mobile, Tablet, and Desktop devices.
*   🎬 **Smooth Animations:**
    *   Custom Preloader with "Welcome" shuffle effect.
    *   Scroll-reveal animations using Framer Motion.
    *   Floating technologies icons.
    *   Interactive hover effects.
*   🛠 **Dynamic Components:**
    *   **Services Modal:** Detailed popup for each service.
    *   **Projects Pagination:** Functional pagination for project showcase.
    *   **Experience Tabs:** Toggle between Education and Experience timeline.
    *   **Testimonial Slider:** Auto-playing infinite slider.
*   📧 **Functional Contact Form:** Integrated with **EmailJS** for real-time email delivery.

---

## 🛠 Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 14 (App Router)](https://nextjs.org/) |
| **Styling** | [Tailwind CSS v3](https://tailwindcss.com/) |
| **Language** | JavaScript (ES6+) |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/), Simple Icons |
| **Form Handling** | [EmailJS](https://www.emailjs.com/) |
| **Theme Management** | next-themes |
| **Deployment** | Vercel |

---

## ⚙️ Environment Variables 

To run this project locally, you need to set up environment variables for **EmailJS**.
Create a `.env.local` file in the root directory and add the following keys:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

```bash
Note: You can obtain these keys by signing up at [EmailJS](https://www.emailjs.com/).
```
## 🚀 Getting Started

**1. Clone the repository**

Follow these steps to run the project on your local machine:
```bash
git clone https://github.com/iamshahriarkabir/first-portfolio-shahriar.git

cd portfolio-shahriar
```
**2. Install dependencies**

```bash
npm install
# or
yarn install
```
**3. Run the development server**

```bash
npm run dev
```
## 📂 Project Structure
A quick look at the top-level files and directories you'll see in this project.

```bash

├── public/              # Static assets (images, pdfs)
├── src/
│   ├── app/             # Next.js App Router pages (layout.js, page.js)
│   ├── components/      # Reusable components (Header, Hero, Projects, etc.)
│   └── providers.js     # Theme providers config
├── .env.local           # Environment variables (Ignored by Git)
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Project dependencies
```

## 🤝 Contact
**Shahriar Kabir**
Full Stack Developer


*   **📧 Email:** z4codelearn@gmail.com
*   **🔗 LinkedIn:** Shahriar Kabir (Zafor)
*   **💻 GitHub:** github.com/your-github-username


<div align="center">
<sub>Built with ❤️ by Shahriar using Next.js</sub>
</div>