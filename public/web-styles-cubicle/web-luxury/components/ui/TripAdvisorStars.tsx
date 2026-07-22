export default function TripAdvisorStars() {
  return (
    <div className="reviews-stars tripadvisor-reviews-stars" data-tripadvisor-stars="bubble_50">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <polygon points="12 2.5 14.6 8.9 21.5 9.4 16.3 13.9 17.9 20.6 12 17 6.1 20.6 7.7 13.9 2.5 9.4 9.4 8.9 12 2.5" fill="none" stroke="#000" />
        </svg>
      ))}
    </div>
  )
}
