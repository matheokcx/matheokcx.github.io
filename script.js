const languageFilter = document.getElementById("languageFilter");
const softwareFilter = document.getElementById("softwareFilter");
const frameworkFilter = document.getElementById("frameworkFilter");
const competencesDiv = document.getElementById("competencesDiv");

const competences = {
    languages: [
        { name: "TypeScript", img: "./public/competences/typescript.png" },
        { name: "JavaScript", img: "./public/competences/javascript.png" },
        { name: "PostgreSQL", img: "./public/competences/postgresql.png" },
        { name: "Python", img: "./public/competences/python.png" },
        { name: "PHP", img: "./public/competences/php.png" },
        { name: "HTML", img: "./public/competences/html.png" },
        { name: "CSS", img: "./public/competences/css.png" },
        { name: "Java", img: "./public/competences/java.png" }
    ],
    software: [
        { name: "Visual Studio Code", img: "./public/competences/vscode.png" },
        { name: "Idea Inteliji", img: "./public/competences/idea.png" },
        { name: "PhpStorm", img: "./public/competences/phpstorm.png" },
        { name: "PyCharm", img: "./public/competences/pycharm.png" },
        { name: "Eclipse", img: "./public/competences/eclipse.png" },
        { name: "Figma", img: "./public/competences/figma.png" },
        { name: "Docker", img: "./public/competences/docker.png" },
        { name: "Git", img: "./public/competences/git.png" },
        { name: "Prisma", img: "./public/competences/prisma.png" },
        { name: "Supabase", img: "./public/competences/supabase.png" }
    ],
    frameworks: [
        { name: "NextJS", img: "./public/competences/nextjs.png" },
        { name: "ReactJS", img: "./public/competences/react.png" },
        { name: "Laravel", img: "./public/competences/laravel.png" },
        { name: "Flask", img: "./public/competences/flask.png" },
        { name: "TailwindCSS", img: "./public/competences/tailwind.png" }
    ]
};

function updateCompetences(filterType) {
    competencesDiv.innerHTML = "";

    const items = competences[filterType] || [];
    items.forEach(item => {
        const article = document.createElement("article");
        article.className = "w-10/12 md:w-1/6 bg-white rounded-3xl shadow-lg py-2";

        const img = document.createElement("img");
        img.src = item.img;
        img.alt = item.name;
        img.className = "w-full h-3/4 rounded-3xl";
        article.appendChild(img);
        const title = document.createElement("h3");
        title.textContent = item.name;
        title.className = "text-xl text-center font-semibold";
        article.appendChild(title);

        competencesDiv.appendChild(article);
    });
}

languageFilter.addEventListener("click", () => updateCompetences("languages"));
softwareFilter.addEventListener("click", () => updateCompetences("software"));
frameworkFilter.addEventListener("click", () => updateCompetences("frameworks"));
