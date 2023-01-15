export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY_TWO,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const fetchData = async(url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

export const youtubeOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
  headers: {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};