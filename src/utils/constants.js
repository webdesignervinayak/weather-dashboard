export const API_KEY = "7f142b1dd2aaff9096d57b79a77f92aa"
//dc77bed66631bbd5f4eca295653d6787
//e360fd167170465ed33f81c83808cb54

export const OPENAI_KEY = "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"

export const experiences = [
  "I forgot my umbrella and got soaked in the rain on my way to work.",
  "It was a beautiful sunny day, perfect for a picnic in the park.",
  "I woke up to the sound of thunderstorms and heavy rain outside.",
  "The snowstorm was so severe that all the roads were closed.",
  "A rainbow appeared after the rain, brightening up the gloomy sky.",
  "I had to shovel snow from the driveway for hours after the blizzard.",
  "The heatwave made it unbearable to be outside during the day.",
  "The fog was so thick that I could barely see a few feet ahead of me.",
  "The wind was so strong that it blew away my hat while I was walking.",
  "The hailstorm damaged my car's windshield and left dents on the roof.",
  "I enjoyed watching the sunset by the beach, with the cool breeze in the air.",
  "The frost was so heavy that it killed all the plants in my garden.",
  "I woke up to find a thick layer of frost covering the windows.",
  "The sudden temperature drop caught me off guard, and I had to rush to get a coat.",
  "I watched the birds flocking south for the winter, signaling the change in seasons.",
  "The humidity was so high that my clothes felt damp all day.",
  "I witnessed a spectacular lightning show during the evening thunderstorm.",
  "I went for a hike and got caught in a snowstorm in the mountains.",
  "The weather was perfect for flying a kite, with clear skies and a gentle breeze.",
  "The heat made the asphalt melt, causing traffic delays and road closures."
];

export const defaultLocation = {
    "name": "Karimnagar",
    "local_names": {
        "en": "Karimnagar",
        "sr": "Каримнагар",
        "pa": "ਕਰੀਮਨਗਰ",
        "he": "קרימנגר",
        "ta": "கரீம்நகர்",
        "ar": "كاريمناغار",
        "ru": "Каримнагар",
        "ml": "കരീംനഗർ",
        "te": "కరీంనగర్",
        "hi": "करीमनगर",
        "ja": "カリームナガル",
        "kn": "ಕರೀಂನಗರ್",
        "ur": "کریم نگر"
    },
    "lat": 18.4348122,
    "lon": 79.1328042,
    "country": "IN",
    "state": "Telangana"};

export const defaultWeather = {
    "coord": {
      "lon": 79.1328,
      "lat": 18.4348
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 24.86,
      "feels_like": 24.79,
      "temp_min": 24.86,
      "temp_max": 24.86,
      "pressure": 1015,
      "humidity": 53,
      "sea_level": 1015,
      "grnd_level": 984
    },
    "visibility": 10000,
    "wind": {
      "speed": 3.58,
      "deg": 197,
      "gust": 8.7
    },
    "clouds": {
      "all": 0
    },
    "dt": 1707158251,
    "sys": {
      "country": "IN",
      "sunrise": 1707182134,
      "sunset": 1707223165
    },
    "timezone": 19800,
    "id": 1267755,
    "name": "Karīmnagar",
    "cod": 200
  }


export const defaultHourly = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1707242400,
            "main": {
                "temp": 26.37,
                "feels_like": 26.37,
                "temp_min": 26.37,
                "temp_max": 26.37,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 984,
                "humidity": 40,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 8
            },
            "wind": {
                "speed": 1.96,
                "deg": 221,
                "gust": 2.23
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-06 18:00:00"
        },
        {
            "dt": 1707253200,
            "main": {
                "temp": 25.73,
                "feels_like": 25.51,
                "temp_min": 24.45,
                "temp_max": 25.73,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 983,
                "humidity": 44,
                "temp_kf": 1.28
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 5
            },
            "wind": {
                "speed": 1.78,
                "deg": 198,
                "gust": 1.93
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-06 21:00:00"
        },
        {
            "dt": 1707264000,
            "main": {
                "temp": 24.04,
                "feels_like": 23.96,
                "temp_min": 22.87,
                "temp_max": 24.04,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 983,
                "humidity": 56,
                "temp_kf": 1.17
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 3
            },
            "wind": {
                "speed": 1.68,
                "deg": 182,
                "gust": 1.7
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-07 00:00:00"
        },
        {
            "dt": 1707274800,
            "main": {
                "temp": 26.67,
                "feels_like": 27.22,
                "temp_min": 26.67,
                "temp_max": 26.67,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 986,
                "humidity": 52,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.9,
                "deg": 198,
                "gust": 2.4
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-07 03:00:00"
        },
        {
            "dt": 1707285600,
            "main": {
                "temp": 33.76,
                "feels_like": 33.31,
                "temp_min": 33.76,
                "temp_max": 33.76,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 986,
                "humidity": 32,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.62,
                "deg": 274,
                "gust": 1.32
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-07 06:00:00"
        },
        {
            "dt": 1707296400,
            "main": {
                "temp": 36.3,
                "feels_like": 34.88,
                "temp_min": 36.3,
                "temp_max": 36.3,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 982,
                "humidity": 22,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.47,
                "deg": 287,
                "gust": 2.53
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-07 09:00:00"
        },
        {
            "dt": 1707307200,
            "main": {
                "temp": 34.86,
                "feels_like": 33.01,
                "temp_min": 34.86,
                "temp_max": 34.86,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 981,
                "humidity": 21,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.08,
                "deg": 351,
                "gust": 2.6
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-07 12:00:00"
        },
        {
            "dt": 1707318000,
            "main": {
                "temp": 28.92,
                "feels_like": 27.75,
                "temp_min": 28.92,
                "temp_max": 28.92,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 983,
                "humidity": 29,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 1
            },
            "wind": {
                "speed": 2.07,
                "deg": 32,
                "gust": 2.21
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-07 15:00:00"
        },
        {
            "dt": 1707328800,
            "main": {
                "temp": 27.27,
                "feels_like": 26.68,
                "temp_min": 27.27,
                "temp_max": 27.27,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 983,
                "humidity": 32,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 18
            },
            "wind": {
                "speed": 0.49,
                "deg": 21,
                "gust": 0.98
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-07 18:00:00"
        },
        {
            "dt": 1707339600,
            "main": {
                "temp": 25.1,
                "feels_like": 24.63,
                "temp_min": 25.1,
                "temp_max": 25.1,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 982,
                "humidity": 37,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 1
            },
            "wind": {
                "speed": 0.5,
                "deg": 44,
                "gust": 0.92
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-07 21:00:00"
        },
        {
            "dt": 1707350400,
            "main": {
                "temp": 23.77,
                "feels_like": 23.27,
                "temp_min": 23.77,
                "temp_max": 23.77,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 982,
                "humidity": 41,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 2
            },
            "wind": {
                "speed": 0.75,
                "deg": 50,
                "gust": 1.03
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-08 00:00:00"
        },
        {
            "dt": 1707361200,
            "main": {
                "temp": 27.27,
                "feels_like": 26.81,
                "temp_min": 27.27,
                "temp_max": 27.27,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 985,
                "humidity": 35,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 4
            },
            "wind": {
                "speed": 2.05,
                "deg": 33,
                "gust": 2.6
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-08 03:00:00"
        },
        {
            "dt": 1707372000,
            "main": {
                "temp": 32.92,
                "feels_like": 31.29,
                "temp_min": 32.92,
                "temp_max": 32.92,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 985,
                "humidity": 25,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 2
            },
            "wind": {
                "speed": 2.48,
                "deg": 44,
                "gust": 1.73
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-08 06:00:00"
        },
        {
            "dt": 1707382800,
            "main": {
                "temp": 35.95,
                "feels_like": 34.28,
                "temp_min": 35.95,
                "temp_max": 35.95,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 981,
                "humidity": 21,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 4
            },
            "wind": {
                "speed": 0.85,
                "deg": 318,
                "gust": 2.85
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-08 09:00:00"
        },
        {
            "dt": 1707393600,
            "main": {
                "temp": 34.39,
                "feels_like": 32.6,
                "temp_min": 34.39,
                "temp_max": 34.39,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 980,
                "humidity": 22,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 4
            },
            "wind": {
                "speed": 0.71,
                "deg": 334,
                "gust": 1.53
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-08 12:00:00"
        },
        {
            "dt": 1707404400,
            "main": {
                "temp": 28.74,
                "feels_like": 27.56,
                "temp_min": 28.74,
                "temp_max": 28.74,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 983,
                "humidity": 28,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 6
            },
            "wind": {
                "speed": 4.02,
                "deg": 4,
                "gust": 7.5
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-08 15:00:00"
        },
        {
            "dt": 1707415200,
            "main": {
                "temp": 25.67,
                "feels_like": 25.15,
                "temp_min": 25.67,
                "temp_max": 25.67,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 983,
                "humidity": 33,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 6
            },
            "wind": {
                "speed": 2.67,
                "deg": 19,
                "gust": 6.28
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-08 18:00:00"
        },
        {
            "dt": 1707426000,
            "main": {
                "temp": 23.39,
                "feels_like": 22.72,
                "temp_min": 23.39,
                "temp_max": 23.39,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 981,
                "humidity": 36,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 4
            },
            "wind": {
                "speed": 1.7,
                "deg": 107,
                "gust": 1.79
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-08 21:00:00"
        },
        {
            "dt": 1707436800,
            "main": {
                "temp": 21.89,
                "feels_like": 21.13,
                "temp_min": 21.89,
                "temp_max": 21.89,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 982,
                "humidity": 38,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 8
            },
            "wind": {
                "speed": 2.59,
                "deg": 7,
                "gust": 3.4
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-09 00:00:00"
        },
        {
            "dt": 1707447600,
            "main": {
                "temp": 25.17,
                "feels_like": 24.53,
                "temp_min": 25.17,
                "temp_max": 25.17,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 984,
                "humidity": 30,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.75,
                "deg": 69,
                "gust": 3.74
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-09 03:00:00"
        },
        {
            "dt": 1707458400,
            "main": {
                "temp": 32.3,
                "feels_like": 30.54,
                "temp_min": 32.3,
                "temp_max": 32.3,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 984,
                "humidity": 24,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.85,
                "deg": 119,
                "gust": 3.08
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-09 06:00:00"
        },
        {
            "dt": 1707469200,
            "main": {
                "temp": 35.9,
                "feels_like": 34.22,
                "temp_min": 35.9,
                "temp_max": 35.9,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 981,
                "humidity": 21,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 1
            },
            "wind": {
                "speed": 1.74,
                "deg": 182,
                "gust": 2.54
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-09 09:00:00"
        },
        {
            "dt": 1707480000,
            "main": {
                "temp": 34.41,
                "feels_like": 32.62,
                "temp_min": 34.41,
                "temp_max": 34.41,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 980,
                "humidity": 22,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 2
            },
            "wind": {
                "speed": 0.87,
                "deg": 310,
                "gust": 3.17
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-09 12:00:00"
        },
        {
            "dt": 1707490800,
            "main": {
                "temp": 30.18,
                "feels_like": 28.78,
                "temp_min": 30.18,
                "temp_max": 30.18,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 982,
                "humidity": 28,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 58
            },
            "wind": {
                "speed": 1.74,
                "deg": 120,
                "gust": 2.92
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-09 15:00:00"
        },
        {
            "dt": 1707501600,
            "main": {
                "temp": 27.59,
                "feels_like": 27.32,
                "temp_min": 27.59,
                "temp_max": 27.59,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 983,
                "humidity": 40,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 62
            },
            "wind": {
                "speed": 3.97,
                "deg": 149,
                "gust": 7.07
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-09 18:00:00"
        },
        {
            "dt": 1707512400,
            "main": {
                "temp": 24.59,
                "feels_like": 24.78,
                "temp_min": 24.59,
                "temp_max": 24.59,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 983,
                "humidity": 64,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 66
            },
            "wind": {
                "speed": 3.39,
                "deg": 129,
                "gust": 6.31
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-09 21:00:00"
        },
        {
            "dt": 1707523200,
            "main": {
                "temp": 22.12,
                "feels_like": 22.53,
                "temp_min": 22.12,
                "temp_max": 22.12,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 983,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 55
            },
            "wind": {
                "speed": 4.82,
                "deg": 139,
                "gust": 10.23
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-10 00:00:00"
        },
        {
            "dt": 1707534000,
            "main": {
                "temp": 24.05,
                "feels_like": 24.47,
                "temp_min": 24.05,
                "temp_max": 24.05,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 986,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 27
            },
            "wind": {
                "speed": 5.96,
                "deg": 164,
                "gust": 8.65
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-10 03:00:00"
        },
        {
            "dt": 1707544800,
            "main": {
                "temp": 30.28,
                "feels_like": 30.83,
                "temp_min": 30.28,
                "temp_max": 30.28,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 986,
                "humidity": 46,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 17
            },
            "wind": {
                "speed": 6.17,
                "deg": 174,
                "gust": 7.04
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-10 06:00:00"
        },
        {
            "dt": 1707555600,
            "main": {
                "temp": 34.05,
                "feels_like": 33.53,
                "temp_min": 34.05,
                "temp_max": 34.05,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 982,
                "humidity": 31,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 3
            },
            "wind": {
                "speed": 5.45,
                "deg": 173,
                "gust": 5.89
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-10 09:00:00"
        },
        {
            "dt": 1707566400,
            "main": {
                "temp": 32.61,
                "feels_like": 31.95,
                "temp_min": 32.61,
                "temp_max": 32.61,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 982,
                "humidity": 33,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 13
            },
            "wind": {
                "speed": 5.14,
                "deg": 167,
                "gust": 5.25
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-10 12:00:00"
        },
        {
            "dt": 1707577200,
            "main": {
                "temp": 28.34,
                "feels_like": 28.37,
                "temp_min": 28.34,
                "temp_max": 28.34,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 984,
                "humidity": 45,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 11
            },
            "wind": {
                "speed": 5.29,
                "deg": 172,
                "gust": 11.23
            },
            "visibility": 10000,
            "pop": 0.02,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-10 15:00:00"
        },
        {
            "dt": 1707588000,
            "main": {
                "temp": 25.98,
                "feels_like": 25.98,
                "temp_min": 25.98,
                "temp_max": 25.98,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 984,
                "humidity": 58,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 30
            },
            "wind": {
                "speed": 5.9,
                "deg": 177,
                "gust": 12.31
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-10 18:00:00"
        },
        {
            "dt": 1707598800,
            "main": {
                "temp": 22.96,
                "feels_like": 23.27,
                "temp_min": 22.96,
                "temp_max": 22.96,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 983,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 51
            },
            "wind": {
                "speed": 2.36,
                "deg": 133,
                "gust": 6.49
            },
            "visibility": 10000,
            "pop": 0.18,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-10 21:00:00"
        },
        {
            "dt": 1707609600,
            "main": {
                "temp": 20.97,
                "feels_like": 21.45,
                "temp_min": 20.97,
                "temp_max": 20.97,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 984,
                "humidity": 89,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 67
            },
            "wind": {
                "speed": 3.72,
                "deg": 102,
                "gust": 6.49
            },
            "visibility": 10000,
            "pop": 0.15,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-11 00:00:00"
        },
        {
            "dt": 1707620400,
            "main": {
                "temp": 22.8,
                "feels_like": 23.17,
                "temp_min": 22.8,
                "temp_max": 22.8,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 988,
                "humidity": 78,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 3.92,
                "deg": 156,
                "gust": 5.76
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-11 03:00:00"
        },
        {
            "dt": 1707631200,
            "main": {
                "temp": 26.82,
                "feels_like": 27.79,
                "temp_min": 26.82,
                "temp_max": 26.82,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 988,
                "humidity": 59,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.25,
                "deg": 160,
                "gust": 6.19
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-11 06:00:00"
        },
        {
            "dt": 1707642000,
            "main": {
                "temp": 30.99,
                "feels_like": 30.62,
                "temp_min": 30.99,
                "temp_max": 30.99,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 985,
                "humidity": 38,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 57
            },
            "wind": {
                "speed": 4.94,
                "deg": 160,
                "gust": 5.55
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-11 09:00:00"
        },
        {
            "dt": 1707652800,
            "main": {
                "temp": 30.31,
                "feels_like": 29.82,
                "temp_min": 30.31,
                "temp_max": 30.31,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 984,
                "humidity": 38,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 54
            },
            "wind": {
                "speed": 3.58,
                "deg": 164,
                "gust": 4.71
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-02-11 12:00:00"
        },
        {
            "dt": 1707663600,
            "main": {
                "temp": 26.58,
                "feels_like": 26.58,
                "temp_min": 26.58,
                "temp_max": 26.58,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 984,
                "humidity": 47,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 3.19,
                "deg": 159,
                "gust": 4.28
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-02-11 15:00:00"
        }
    ],
    "city": {
        "id": 1267755,
        "name": "Karīmnagar",
        "coord": {
            "lat": 18.4348,
            "lon": 79.1328
        },
        "country": "IN",
        "population": 228745,
        "timezone": 19800,
        "sunrise": 1707182134,
        "sunset": 1707223165
    }
}