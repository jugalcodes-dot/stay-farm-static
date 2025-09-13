import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Star, ExternalLink, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Review {
  author_name: string;
  author_url?: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface GooglePlaceData {
  rating: number;
  user_ratings_total: number;
  place_id: string;
  google_maps_url: string;
  reviews: Review[];
}

interface GoogleReviewsProps {
  endpoint?: string;
  className?: string;
}

const GoogleReviews: React.FC<GoogleReviewsProps> = ({
  endpoint = '/.netlify/functions/google-reviews',
  className,
}) => {
  const [data, setData] = useState<GooglePlaceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const response = await fetch(endpoint);
        
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error('Error fetching Google reviews:', err);
        setError('Unable to load reviews at the moment');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [endpoint]);

  const renderStars = (rating: number, size: 'sm' | 'md' = 'md') => {
    return (
      <div className={cn('flex', size === 'sm' ? 'space-x-0.5' : 'space-x-1')}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300',
              size === 'sm' ? 'h-3 w-3' : 'h-4 w-4'
            )}
          />
        ))}
      </div>
    );
  };

  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
  };

  if (loading) {
    return (
      <div className={cn('w-full', className)}>
        <div className="text-center mb-8">
          <Skeleton className="h-8 w-48 mx-auto mb-4" />
          <Skeleton className="h-4 w-32 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="flex-1">
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-3 w-16" />
                </div>
              </div>
              <Skeleton className="h-20 w-full mb-3" />
              <Skeleton className="h-3 w-20" />
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className={cn('text-center py-8', className)}>
        <div className="text-muted-foreground mb-4">{error || 'Reviews unavailable'}</div>
        <Button
          variant="outline"
          asChild
          className="inline-flex items-center space-x-2"
        >
          <a
            href="https://www.google.com/maps/search/Khushi+Farm+Kayavarohan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin className="h-4 w-4" />
            <span>View on Google Maps</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </div>
    );
  }

  return (
    <div className={cn('w-full', className)}>
      {/* Overall Rating Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center space-x-4 bg-card rounded-2xl p-6 shadow-card">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{data.rating}</div>
            {renderStars(data.rating)}
            <div className="text-sm text-muted-foreground mt-2">
              Based on {data.user_ratings_total} reviews
            </div>
          </div>
          <div className="border-l border-border pl-4">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="inline-flex items-center space-x-2"
            >
              <a href={data.google_maps_url} target="_blank" rel="noopener noreferrer">
                <span>Read all reviews</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.reviews.slice(0, 6).map((review, index) => (
          <motion.div
            key={`${review.author_name}-${review.time}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full card-premium">
              <CardContent className="p-6">
                {/* Reviewer Info */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="relative">
                    <img
                      src={review.profile_photo_url || '/placeholder.svg'}
                      alt={`${review.author_name}'s profile`}
                      className="h-12 w-12 rounded-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{review.author_name}</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      {renderStars(review.rating, 'sm')}
                      <span className="text-xs text-muted-foreground">
                        {review.relative_time_description}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <div className="text-sm text-muted-foreground leading-relaxed">
                  {truncateText(review.text)}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-8"
      >
        <Button
          variant="outline"
          size="lg"
          asChild
          className="inline-flex items-center space-x-2"
        >
          <a href={data.google_maps_url} target="_blank" rel="noopener noreferrer">
            <MapPin className="h-4 w-4" />
            <span>View All Reviews on Google</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </motion.div>
    </div>
  );
};

export default GoogleReviews;