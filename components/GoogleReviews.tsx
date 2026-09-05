import { business } from "@/lib/data";

// TODO: wire up to the real Google Places/Business Profile API.
//
// Once you have a Places API key and this business's Place ID:
//   1. Server-side (e.g. a Server Component or Route Handler — never expose
//      the API key to the browser), call the Places API "Place Details"
//      endpoint with `fields=rating,userRatingCount,reviews`:
//      https://maps.googleapis.com/maps/api/place/details/json
//        ?place_id=<PLACE_ID>&fields=rating,reviews,userRatingCount&key=<KEY>
//   2. Map the response's `reviews[]` (author_name, rating, text,
//      relative_time_description, profile_photo_url) into the `Review` shape
//      below, and `rating`/`user_ratings_total` into the summary props.
//   3. Replace `placeholderSummary`/`placeholderReviews` with that data.
//      Everything else in this component (star rendering, card layout,
//      "See all reviews" link) can stay as-is.

type Review = {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
};

const placeholderSummary = {
  rating: 4.9,
  reviewCount: 27,
};

const placeholderReviews: Review[] = [
  {
    author: "Google review",
    rating: 5,
    text: "Placeholder — real reviews will appear here once connected to Google.",
    relativeTime: "recently",
  },
  {
    author: "Google review",
    rating: 5,
    text: "Placeholder — real reviews will appear here once connected to Google.",
    relativeTime: "recently",
  },
  {
    author: "Google review",
    rating: 5,
    text: "Placeholder — real reviews will appear here once connected to Google.",
    relativeTime: "recently",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-secondary" aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="h-4 w-4"
          fill={i < Math.round(rating) ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.77l-5.2 2.75.99-5.8-4.21-4.1 5.82-.85L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  const { rating, reviewCount } = placeholderSummary;

  return (
    <section className="border-b border-primary/15 bg-base-200">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
              What homeowners say
            </h2>
            <div className="mt-3 flex items-center gap-3">
              <Stars rating={rating} />
              <span className="font-display font-semibold text-primary">{rating.toFixed(1)}</span>
              <span className="text-sm text-neutral">
                ({reviewCount} Google review{reviewCount === 1 ? "" : "s"})
              </span>
            </div>
          </div>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-sm font-semibold text-primary hover:underline"
          >
            See all reviews on Google →
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {placeholderReviews.map((review, i) => (
            <div key={i} className="card border border-primary/15 bg-base-100">
              <div className="card-body gap-3 p-5">
                <Stars rating={review.rating} />
                <p className="text-sm leading-relaxed text-neutral">&ldquo;{review.text}&rdquo;</p>
                <p className="font-display text-xs font-semibold text-primary">
                  {review.author} · {review.relativeTime}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
