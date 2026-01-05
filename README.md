<div align="center">

# 🚀 Sharif - Professional Portfolio

![Project Banner](https://i.postimg.cc/022LmXPr/Screenshot-1.png)

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

<br />

A modern, high-performance, and fully responsive Personal Portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. This project showcases a seamless user experience with dark/light mode support, interactive animations, and a functional contact form.

[**Explore Live Demo »**](https://my-portfolio-ten-gules-64.vercel.app/)

</div>

---

## ✨ Key Features

- 🎨 **Modern UI/UX:** Clean, minimalist, and pixel-perfect design ensuring a premium look.
- 🌓 **Dark & Light Mode:** Fully supported theme switching with persistent state management.
- ⚡ **High Performance:** Built with **Next.js App Router** for optimal speed, SEO, and fast loading.
- 📱 **Fully Responsive:** Optimized for Mobile, Tablet, and Desktop devices.
- 🎬 **Smooth Animations:**
  - Custom Preloader with "Welcome" text shuffle effect.
  - Scroll-reveal animations using **Framer Motion**.
  - Interactive hover effects and floating icons.
- 🛠 **Dynamic Components:**
  - **Services Modal:** Detailed popup for each service with animation.
  - **Projects Showcase:** Grid view with pagination and detailed modal info.
  - **Testimonial Slider:** Auto-playing infinite slider using Swiper.
- 📧 **Functional Contact Form:** Integrated with **EmailJS** for real-time email delivery directly from the site.

---

## 🛠 Tech Stack

| Category             | Technologies                                      |
| :------------------- | :------------------------------------------------ |
| **Framework**        | [Next.js 14 (App Router)](https://nextjs.org/)    |
| **Styling**          | [Tailwind CSS v3](https://tailwindcss.com/)       |
| **Language**         | JavaScript (ES6+)                                 |
| **Animation**        | [Framer Motion](https://www.framer.com/motion/)   |
| **Icons**            | [Lucide React](https://lucide.dev/), Simple Icons |
| **Form Handling**    | [EmailJS](https://www.emailjs.com/)               |
| **Theme Management** | next-themes                                       |
| **Deployment**       | Vercel                                            |

---

## ⚙️ Environment Variables
#### Create a `.env.local` file in the root directory and add the following keys:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here

```
Note: You can obtain these keys by signing up at EmailJS.
## 🚀 Getting Started
### Follow these steps to run the project on your local machine:
**1. Clone the repository**
```Bash
git clone https://github.com/sharif-ahmad557/my-portfolio

```
**2. Install dependencies**

```Bash
npm install

```
**3. Run the development server**
```Bash
npm run dev

```

```
Open http://localhost:3000 with your browser to see the result.

```
**📂 Project Structur**
A quick look at the top-level files and directories in this project.

```Bash
portfolio/
├── public/              # Static assets (images, pdfs)
│   └── assets/          # Project images & Resume
├── src/
│   ├── app/             # Next.js App Router (layout.js, page.js)
│   │   ├── icon.tsx     # Dynamic Favicon generator
│   │   └── globals.css  # Global styles
│   ├── components/      # Reusable components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── ...
├── .env.local           # Environment variables
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Project dependencies

```
**🤝 Contact**

Sharif
MERN Stack Developer

📧 Email: sharifahmadwd@gmail.com                                                                                                                                                                                                                                                                                                                       🔗 LinkedIn: https://www.linkedin.com/in/shariful-islam-mern/   

💻 GitHub: https://github.com/sharif-ahmad557/

<div align="center">
<br />
<sub>Built with ❤️ using Next.js & Tailwind CSS</sub>
</div>

