let scr = document.querySelector('.pn')
scr.addEventListener('click', function(){
    anime({
        targets: '.pn',
        keyframes: [
          {translateY: -40},
          {translateX: 250},
          {translateY: 40},
          {translateX: 0},
          {translateY: 0}
        ],
        duration: 4000,
        easing: 'easeOutElastic(1, .8)',
        loop: false
      });
})

let lyt = document.querySelector('.tu')
lyt.addEventListener('click', function(){
    anime({
        targets: '.tu',
        keyframes: [
          {translateY: -40},
          {translateX: 250},
          {translateY: 40},
          {translateX: 0},
          {translateY: 0}
        ],
        duration: 4000,
        easing: 'easeOutElastic(1, .8)',
        loop: false
      });
})

let tyi = document.querySelector('.wd')
tyi.addEventListener('click', function(){
    anime({
        targets: '.wd',
        keyframes: [
          {translateY: -40},
          {translateX: 250},
          {translateY: 40},
          {translateX: 0},
          {translateY: 0}
        ],
        duration: 4000,
        easing: 'easeOutElastic(1, .8)',
        loop: false
      });
})

let qw = document.querySelector('.th')
qw.addEventListener('click', function(){
    anime({
        targets: '.th',
        keyframes: [
          {translateY: -40},
          {translateX: 250},
          {translateY: 40},
          {translateX: 0},
          {translateY: 0}
        ],
        duration: 4000,
        easing: 'easeOutElastic(1, .8)',
        loop: false
      });
})

let sw = document.querySelector('.fd')
sw.addEventListener('click', function(){
    anime({
        targets: '.fd',
        keyframes: [
          {translateY: -40},
          {translateX: 250},
          {translateY: 40},
          {translateX: 0},
          {translateY: 0}
        ],
        duration: 4000,
        easing: 'easeOutElastic(1, .8)',
        loop: false
      });
})

let sc = document.querySelector('.st')
sc.addEventListener('click', function(){
    anime({
        targets: '.st',
        keyframes: [
          {translateY: -40},
          {translateX: 250},
          {translateY: 40},
          {translateX: 0},
          {translateY: 0}
        ],
        duration: 4000,
        easing: 'easeOutElastic(1, .8)',
        loop: false
      });
})

let str = document.querySelector('.sn')
str.addEventListener('click', function(){
    anime({
        targets: '.sn',
        keyframes: [
          {translateY: -40},
          {translateX: 250},
          {translateY: 40},
          {translateX: 0},
          {translateY: 0}
        ],
        duration: 4000,
        easing: 'easeOutElastic(1, .8)',
        loop: false
      });
})

// Зберігаємо дані меню для кожного дня
let menuData = {
    "Понеділок": [],
    "Вівторок": [],
    "Середа": [],
    "Четвер": [],
    "П'ятниця": [],
    "Субота": [],
    "Неділя": []
};

// Приблизний список ПП страв для генерації
const randomMeals = [
    { name: 'Овсянка з фруктами', calories: 350 },
    { name: 'Салат з куркою', calories: 400 },
    { name: 'Смузі з ягід', calories: 200 },
    { name: 'Гречка з овочами', calories: 300 },
    { name: 'Куряча грудка на пару', calories: 250 },
    { name: 'Запечена риба', calories: 450 },
    { name: 'Овочевий суп', calories: 150 }
];

// Функція для оновлення відображення меню для обраного дня
function updateMenuDisplay(selectedDay) {
    const menuList = document.getElementById('menu-list');
    menuList.innerHTML = '';
    let totalCalories = 0;

    menuData[selectedDay].forEach((meal) => {
        const li = document.createElement('li');
        li.innerHTML = `${meal.name} - ${meal.calories} ккал`;
        menuList.appendChild(li);
        totalCalories += meal.calories;
    });

    document.getElementById('total-calories').textContent = totalCalories;
}

// Функція для генерації рандомного меню
function generateRandomMenu() {
    const selectedDay = document.getElementById('selected-day').textContent;
    menuData[selectedDay] = [];

    for (let i = 0; i < 3; i++) {
        const randomMeal = randomMeals[Math.floor(Math.random() * randomMeals.length)];
        menuData[selectedDay].push(randomMeal);
    }

    updateMenuDisplay(selectedDay);
    saveToLocalStorage();
}

// Функція для додавання власної страви
function addCustomMeal() {
    const selectedDay = document.getElementById('selected-day').textContent;
    const mealName = document.getElementById('meal-input').value;
    const calories = parseInt(document.getElementById('calories-input').value);

    if (mealName && calories) {
        menuData[selectedDay].push({ name: mealName, calories: calories });

        document.getElementById('meal-input').value = '';
        document.getElementById('calories-input').value = '';

        updateMenuDisplay(selectedDay);
        saveToLocalStorage();
    } else {
        alert('Будь ласка, введіть назву страви та кількість калорій');
    }
}


// Збереження даних у localStorage
function saveToLocalStorage() {
    localStorage.setItem('menuData', JSON.stringify(menuData));
}

// Завантаження даних з localStorage
function loadFromLocalStorage() {
    const storedData = localStorage.getItem('menuData');
    if (storedData) {
        menuData = JSON.parse(storedData);
        updateMenuDisplay('Понеділок');
    }
}

// Обробник зміни дня тижня
document.querySelectorAll('#day-list li').forEach((li) => {
    li.addEventListener('click', function () {
        const selectedDay = this.getAttribute('data-day');
        document.getElementById('selected-day-title').textContent = selectedDay;
        document.getElementById('selected-day').textContent = selectedDay;
        updateMenuDisplay(selectedDay);
    });
});

// Обробники для кнопок
document.getElementById('generate-menu').addEventListener('click', generateRandomMenu);
document.getElementById('add-meal').addEventListener('click', addCustomMeal);

// Ініціалізація
loadFromLocalStorage();
updateMenuDisplay('Понеділок');
