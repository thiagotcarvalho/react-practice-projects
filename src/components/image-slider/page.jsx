'use client'

import { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      const response = await fetch(`${getUrl}?page=1&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMessage(e.message);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url !== '') {
      fetchImages(url);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  if (loading) {
    return <div>Loading data...</div>
  }

  if (errorMessage !== null) {
    return <div>An error has occurred: {errorMessage}</div>
  }

  return (
    <div className="image-slider-container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((imageItem, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={imageItem.id}
            alt={imageItem.download_url}
            src={imageItem.download_url}
            className={
              currentSlide === index
                ? "image-slider-current-image"
                : "image-slider-current-image hide-image-slider-current-image"
            }
          />
        ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="image-slider-circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
            <button
              key={index}
              className={
                currentSlide === index
                  ? "image-slider-current-indicator"
                  : "image-slider-current-indicator image-slider-inactive-indicator"
              }
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))
          : null}
      </span>
    </div>
  )
}