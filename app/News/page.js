"use client"
import React, { useState, useEffect } from 'react';

const IndexPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=49f09c2545c04d53979197ca44dc3bae');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        
        // Check if jsonData.articles exists and is an array
        if (jsonData.articles && Array.isArray(jsonData.articles)) {
          // Filter articles to include only those related to "BGMI"
          const bgmiNews = jsonData.articles.filter(article =>
            (article.title && article.title.toLowerCase().includes('cricket')) ||
            (article.description && article.description.toLowerCase().includes('cricket'))
          );
          
          // Update state with filtered data
          setData(bgmiNews);
        } else {
          throw new Error('Invalid data format from API');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>BGMI News in Sports</h1>
      {data ? (
        <div>
          {data.map((article, index) => (
            <div key={index}>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default IndexPage;
