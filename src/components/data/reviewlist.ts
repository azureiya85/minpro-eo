export interface ReviewItem {
    id: number;
    userId: string;
    eventId: number;
    rating: number; // 1 to 5 stars
    comment: string;
    createdAt: string;
    updatedAt: string;
  }
  
  // Only users with PAID transactions (attended events) can leave reviews
  export const reviewList: ReviewItem[] = [
    {
      id: 1,
      userId: 'cust1',
      eventId: 1,
      rating: 5,
      comment: 'Absolutely loved the performance! The energy was incredible and the crowd participation made it an unforgettable evening; I can still hear the echoes of the chorus in my head.',
      createdAt: '2025-07-15T14:30:00Z',
      updatedAt: '2025-07-15T14:30:00Z',
    },
    {
      id: 2,
      userId: 'cust1',
      eventId: 1,
      rating: 4,
      comment: 'Great show overall, but the sound system had a few glitches during the opener. Despite that, the headliner delivered a flawless set that more than made up for it.',
      createdAt: '2025-07-16T09:20:00Z',
      updatedAt: '2025-07-16T09:20:00Z',
    },
    {
      id: 3,
      userId: 'cust2',
      eventId: 2,
      rating: 3,
      comment: 'It was okay. I especially enjoyed the mid-set acoustic performance, but felt that the pacing between acts dragged at times, making the overall experience less cohesive.',
      createdAt: '2025-07-19T12:00:00Z',
      updatedAt: '2025-07-19T12:00:00Z',
    },
    {
      id: 4,
      userId: 'cust2',
      eventId: 2,
      rating: 2,
      comment: 'Not what I expected. The venue was overcrowded, the seating was uncomfortable, and the organization of entry lines could use significant improvement.',
      createdAt: '2025-07-19T13:45:00Z',
      updatedAt: '2025-07-19T13:45:00Z',
    },
    {
      id: 5,
      userId: 'cust3',
      eventId: 4,
      rating: 5,
      comment: 'One of the best concerts I’ve attended this year! The setlist was perfect, the visuals were stunning, and the band’s enthusiasm was contagious throughout the night.',
      createdAt: '2025-08-20T18:10:00Z',
      updatedAt: '2025-08-20T18:10:00Z',
    },
    {
      id: 6,
      userId: 'cust3',
      eventId: 5,
      rating: 4,
      comment: 'Loved the lineup and the festival atmosphere. The only downside was the long wait times for food and drinks, which slightly detracted from the enjoyment.',
      createdAt: '2025-08-21T11:00:00Z',
      updatedAt: '2025-08-21T11:00:00Z',
    },
    {
      id: 7,
      userId: 'cust4',
      eventId: 6,
      rating: 1,
      comment: 'Terrible experience. The event started over an hour late, security was unhelpful, and the overall organization felt chaotic and understaffed.',
      createdAt: '2025-09-11T20:30:00Z',
      updatedAt: '2025-09-11T20:30:00Z',
    },
    {
      id: 8,
      userId: 'cust1',
      eventId: 9,
      rating: 3,
      comment: 'Average show. There were moments of brilliance, but it felt underwhelming overall. The stage production was good, but the performance lacked energy.',
      createdAt: '2025-09-26T10:15:00Z',
      updatedAt: '2025-09-26T10:15:00Z',
    },
    {
      id: 9,
      userId: 'cust2',
      eventId: 13,
      rating: 5,
      comment: 'Incredible festival vibes! From the immersive stage design to the seamless transitions between acts, everything was executed to perfection.',
      createdAt: '2025-07-30T14:45:00Z',
      updatedAt: '2025-07-30T14:45:00Z',
    },
    {
      id: 10,
      userId: 'cust3',
      eventId: 16,
      rating: 4,
      comment: 'Great festival overall, though the VIP area could use more seating and closer bathroom access. The lineup and organization were otherwise top-notch.',
      createdAt: '2025-08-15T11:00:00Z',
      updatedAt: '2025-08-15T11:00:00Z',
    },
    {
      id: 11,
      userId: 'cust1',
      eventId: 3,
      rating: 5,
      comment: 'The atmosphere was electric and the floor tickets were worth every penny! The live sound quality was phenomenal, and the artist seemed genuinely engaged with the crowd.',
      createdAt: '2025-07-10T17:20:00Z',
      updatedAt: '2025-07-10T17:20:00Z',
    },
    {
      id: 12,
      userId: 'cust2',
      eventId: 3,
      rating: 4,
      comment: 'Good event, but lost a star due to long entry lines and limited shade. Still, the performance made it memorable.',
      createdAt: '2025-07-11T12:30:00Z',
      updatedAt: '2025-07-11T12:30:00Z',
    },
    {
      id: 13,
      userId: 'cust4',
      eventId: 7,
      rating: 2,
      comment: 'Sound quality was poor and the seating arrangement was confusing, which disrupted my enjoyment despite the performers being talented.',
      createdAt: '2025-07-16T15:45:00Z',
      updatedAt: '2025-07-16T15:45:00Z',
    },
    {
      id: 14,
      userId: 'cust3',
      eventId: 8,
      rating: 3,
      comment: 'It was fine, but nothing special. I wish there were more interactive elements, and the food stalls felt overpriced for the portions.',
      createdAt: '2025-07-20T13:00:00Z',
      updatedAt: '2025-07-20T13:00:00Z',
    },
    {
      id: 15,
      userId: 'cust1',
      eventId: 6,
      rating: 4,
      comment: 'Enjoyed the performance, but parking was a nightmare and the shuttle service was delayed. The show itself was fantastic, though.',
      createdAt: '2025-09-12T19:10:00Z',
      updatedAt: '2025-09-12T19:10:00Z',
    },
    {
      id: 16,
      userId: 'cust2',
      eventId: 16,
      rating: 5,
      comment: 'Best festival experience ever! From the seamless check-in process to the outstanding acts, every detail was carefully planned.',
      createdAt: '2025-08-14T09:30:00Z',
      updatedAt: '2025-08-14T09:30:00Z',
    },
    {
      id: 17,
      userId: 'cust4',
      eventId: 16,
      rating: 3,
      comment: 'Enjoyable overall, but I expected more from the VIP package. The exclusive lounge was overcrowded, though the music was great.',
      createdAt: '2025-08-14T10:45:00Z',
      updatedAt: '2025-08-14T10:45:00Z',
    },
    {
      id: 18,
      userId: 'cust3',
      eventId: 1,
      rating: 4,
      comment: 'Fantastic show, though the encore was a bit too short. The band’s chemistry was evident and the setlist was well-curated.',
      createdAt: '2025-07-17T21:00:00Z',
      updatedAt: '2025-07-17T21:00:00Z',
    },
    {
      id: 19,
      userId: 'cust1',
      eventId: 13,
      rating: 5,
      comment: 'Hellfest exceeded expectations! The 4-Day Pass was worth every moment and the camaraderie among festival-goers was amazing.',
      createdAt: '2025-06-30T18:00:00Z',
      updatedAt: '2025-06-30T18:00:00Z',
    },
    {
      id: 20,
      userId: 'cust2',
      eventId: 14,
      rating: 2,
      comment: 'Lineups were good but logistics on the last day were chaotic. I hope they improve the scheduling and crowd management next year.',
      createdAt: '2025-07-05T16:15:00Z',
      updatedAt: '2025-07-05T16:15:00Z',
    },
  ];
  