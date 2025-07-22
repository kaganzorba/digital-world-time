const apiKey = 'YOUR_API_KEY_HERE'; // Kendi OpenWeatherMap API anahtarınızı buraya ekleyin

class WorldClock {
    constructor() {
        this.cities = [
            {
                name: 'New York',
                timezone: 'America/New_York',
                weather: '🌧️',
                description: 'Yağmurlu',
                humidity: 70
            },
            {
                name: 'London',
                timezone: 'Europe/London',
                weather: '🌫️',
                description: 'Sisli',
                humidity: 80
            },
            {
                name: 'Tokyo',
                timezone: 'Asia/Tokyo',
                weather: '☀️',
                description: 'Güneşli',
                humidity: 55
            },
            {
                name: 'Istanbul',
                timezone: 'Europe/Istanbul',
                weather: '🌤️',
                description: 'Parçalı Bulutlu',
                humidity: 60
            },
            {
                name: 'Paris',
                timezone: 'Europe/Paris',
                weather: '☁️',
                description: 'Bulutlu',
                humidity: 65
            },
            {
                name: 'Sydney',
                timezone: 'Australia/Sydney',
                weather: '💨',
                description: 'Rüzgarlı',
                humidity: 50
            }
        ];
        this.is24Hour = false;
        this.isDarkMode = false;
        this.init();
    }

    async init() {
        await this.fetchWeatherData();
        this.setupEventListeners();
        this.loadPreferences();
        this.startClock();
    }

    createClockCards() {
        const clockGrid = document.getElementById('clockGrid');
        clockGrid.innerHTML = '';
        this.cities.forEach(city => {
            const card = document.createElement('div');
            card.className = `clock-card city-bg-${city.name.toLowerCase().replace(/\s/g, '')}`;
            card.innerHTML = `
                <span class="weather-emoji">${city.weather}</span>
                <div class="weather-desc">(${city.description || "Bilinmiyor"})</div>
                <div class="city-name">${city.name}</div>
                <div class="time-display" data-timezone="${city.timezone}">--:--</div>
                <div class="date-display" data-timezone="${city.timezone}">Loading...</div>
                <div class="timezone-info">${this.getTimezoneAbbr(city.timezone)}</div>
            `;
            card.addEventListener('click', () => this.showWeeklyWeather(city));
            clockGrid.appendChild(card);
        });
    }

    showWeeklyWeather(city) {
        const days = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];
        const weatherList = [
            { emoji: '☀️', desc: 'Güneşli' },
            { emoji: '☁️', desc: 'Bulutlu' },
            { emoji: '🌧️', desc: 'Yağmurlu' },
            { emoji: '🌫️', desc: 'Sisli' },
            { emoji: '🌤️', desc: 'Parçalı Bulutlu' },
            { emoji: '💨', desc: 'Rüzgarlı' }
        ];
        let html = '<ul style="list-style:none;padding:0;">';
        for (let i = 0; i < 7; i++) {
            const random = Math.floor(Math.random()*weatherList.length);
            const temp = Math.floor(Math.random()*15+15);
            const humidity = Math.floor(Math.random()*40+40);
            html += `<li>
                ${days[i]}: ${weatherList[random].emoji}
                <span style="font-size:0.95em;">(${weatherList[random].desc})</span>
                ${temp}°C - Nem: %${humidity}
            </li>`;
        }
        html += '</ul>';
        document.getElementById('modalCity').textContent = city.name + ' - 1 Haftalık Hava Durumu';
        document.getElementById('weeklyWeather').innerHTML = html;
        document.getElementById('weatherModal').style.display = 'block';
    }

    setupEventListeners() {
        const formatToggle = document.getElementById('formatToggle');
        const darkModeToggle = document.getElementById('darkModeToggle');
        formatToggle.addEventListener('click', () => this.toggleTimeFormat());
        darkModeToggle.addEventListener('click', () => this.toggleDarkMode());
    }

    toggleTimeFormat() {
        this.is24Hour = !this.is24Hour;
        const formatToggle = document.getElementById('formatToggle');
        formatToggle.textContent = this.is24Hour ? '24H' : '12H';
        this.savePreferences();
        this.updateAllClocks();
    }

    toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        const darkModeToggle = document.getElementById('darkModeToggle');
        darkModeToggle.textContent = this.isDarkMode ? '☀️' : '🌙';
        if (this.isDarkMode) {
            document.body.setAttribute('data-theme', 'dark');
        } else {
            document.body.removeAttribute('data-theme');
        }
        this.savePreferences();
    }

    getTimezoneAbbr(timezone) {
        const abbrs = {
            'America/New_York': 'EST/EDT',
            'Europe/London': 'GMT/BST',
            'Asia/Tokyo': 'JST',
            'Europe/Istanbul': 'TRT',
            'Europe/Paris': 'CET/CEST',
            'Australia/Sydney': 'AEST/AEDT'
        };
        return abbrs[timezone] || timezone;
    }

    formatTime(date, timezone) {
        const options = {
            timeZone: timezone,
            hour12: !this.is24Hour,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    }

    formatDate(date, timezone) {
        const options = {
            timeZone: timezone,
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    }

    updateAllClocks() {
        const now = new Date();
        const timeDisplays = document.querySelectorAll('.time-display');
        const dateDisplays = document.querySelectorAll('.date-display');
        timeDisplays.forEach(display => {
            const tz = display.getAttribute('data-timezone');
            display.textContent = this.formatTime(now, tz);
        });
        dateDisplays.forEach(display => {
            const tz = display.getAttribute('data-timezone');
            display.textContent = this.formatDate(now, tz);
        });
    }

    startClock() {
        this.updateAllClocks();
        setInterval(() => this.updateAllClocks(), 1000);
    }

    savePreferences() {
        const preferences = {
            is24Hour: this.is24Hour,
            isDarkMode: this.isDarkMode
        };
        localStorage.setItem('clockPreferences', JSON.stringify(preferences));
    }

    loadPreferences() {
        const saved = localStorage.getItem('clockPreferences');
        if (saved) {
            const preferences = JSON.parse(saved);
            this.is24Hour = preferences.is24Hour || false;
            this.isDarkMode = preferences.isDarkMode || false;
            const formatToggle = document.getElementById('formatToggle');
            const darkModeToggle = document.getElementById('darkModeToggle');
            formatToggle.textContent = this.is24Hour ? '24H' : '12H';
            darkModeToggle.textContent = this.isDarkMode ? '☀️' : '🌙';
            if (this.isDarkMode) {
                document.body.setAttribute('data-theme', 'dark');
            }
        }
   }

    async fetchWeatherData() {
        for (const city of this.cities) {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city.name)}&appid=${apiKey}&units=metric&lang=tr`;
            try {
                const res = await fetch(url);
                const data = await res.json();
                city.weather = this.getWeatherEmoji(data.weather[0].main);
                city.description = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
                city.humidity = data.main.humidity;
            } catch (e) {
                city.weather = '❓';
                city.description = 'Bilinmiyor';
                city.humidity = '-';
            }
        }
        this.createClockCards();
    }

    // Hava durumu anahtar kelimesine göre emoji döndürür
    getWeatherEmoji(main) {
        switch(main) {
            case 'Clear': return '☀️';
            case 'Clouds': return '☁️';
            case 'Rain': return '🌧️';
            case 'Drizzle': return '🌦️';
            case 'Thunderstorm': return '⛈️';
            case 'Snow': return '❄️';
            case 'Mist':
            case 'Fog':
            case 'Haze': return '🌫️';
            case 'Wind': return '💨';
            default: return '❓';
        }
    }
}

// Modal kapatma işlemleri
document.addEventListener('DOMContentLoaded', () => {
    new WorldClock();
    document.getElementById('closeModal').onclick = function() {
        document.getElementById('weatherModal').style.display = 'none';
    };
    window.onclick = function(event) {
        if (event.target == document.getElementById('weatherModal')) {
            document.getElementById('weatherModal').style.display = 'none';
        }
    };
});




