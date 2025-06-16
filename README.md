# 📰 News App

A responsive web application that lets users search for the latest news articles using the [NewsAPI](https://newsapi.org/). Built using **HTML**, **CSS**, **JavaScript**, and **Bootstrap 5**, this app dynamically displays news cards based on the user's input topic.

> 🔗 **Live Demo:** [https://darishaansarii.github.io/newsApp/](https://darishaansarii.github.io/newsApp/)
> 📂 **GitHub Repo:** [https://github.com/darishaansarii/newsApp](https://github.com/darishaansarii/newsApp)

---

## 🚀 Features

* 🔍 **Live News Search**: Fetches real-time articles based on user-entered keywords.
* 📱 **Responsive Design**: Optimized layout for desktop and mobile screens using Bootstrap and media queries.
* 🧾 **Clean UI**: Stylish cards with images, titles, descriptions, and a “Read More” link.
* ⏱ **Loading Indicator**: Shows a spinner while fetching articles from the API.
* 🔗 **External Links**: “Read More” button opens full article in a new tab.

---

## 🛠️ Tech Stack

* **HTML5**
* **CSS3**
* **JavaScript (ES6+)**
* **Bootstrap 5**
* **NewsAPI** – [https://newsapi.org](https://newsapi.org)

---

## 📦 Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/darishaansarii/newsApp.git
   ```

2. **Navigate into the folder:**

   ```bash
   cd newsApp
   ```

3. **Open `index.html` in your browser**
   or run with a local development server like Live Server (VS Code extension).

---

## 🔑 API Key Configuration

This app uses [NewsAPI.org](https://newsapi.org/) for fetching news data.

> ⚠️ For personal or production use, it's **recommended to use your own API key** by signing up at [https://newsapi.org/register](https://newsapi.org/register), and replacing it in the `app.js` file:

```js
let api_key = "YOUR_API_KEY_HERE";
```

---

## 📂 Project Structure

```
newsApp/
│
├── index.html         # Main HTML structure
├── style.css          # Custom styling
├── app.js             # API logic and dynamic rendering
└── README.md          # Project overview and usage
```

---

## 📌 Notes

* NewsAPI’s free plan may restrict the number of requests per day or country-specific sources.
* Make sure not to expose private keys in public repositories.

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---
