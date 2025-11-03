import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const expertsData = [
  {
    "id": 1,
    "name": "Rohan Mehta",
    "category": "Fitness",
    "bio": "Certified fitness coach with 8 years of experience helping clients achieve holistic wellness through home workouts and nutrition guidance.",
    "rating": 4.9,
    "location": "Delhi, India"
  },
  {
    "id": 2,
    "name": "Anjali Nair",
    "category": "Nutrition",
    "bio": "Clinical nutritionist specializing in sustainable diet plans and weight management using data-driven approaches.",
    "rating": 4.8,
    "location": "Bangalore, India"
  },
  {
    "id": 3,
    "name": "Vikram Singh",
    "category": "Life Coaching",
    "bio": "Motivational coach who focuses on self-discipline, productivity, and mindfulness habits for professionals.",
    "rating": 4.7,
    "location": "Mumbai, India"
  },
  {
    "id": 4,
    "name": "Aarav Sharma",
    "category": "Yoga",
    "bio": "Certified yoga instructor combining traditional asanas with modern flexibility training to promote balance and mindfulness.",
    "rating": 4.9,
    "location": "Pune, India"
  },
  {
    "id": 5,
    "name": "Riya Patel",
    "category": "Dance",
    "bio": "Contemporary dancer and choreographer known for combining classical forms with freestyle expression.",
    "rating": 4.6,
    "location": "Ahmedabad, India"
  },
  {
    "id": 6,
    "name": "Neha Verma",
    "category": "Astrology",
    "bio": "Vedic astrologer with 12 years of experience providing personalized horoscope readings and life guidance.",
    "rating": 4.8,
    "location": "Jaipur, India"
  },
  {
    "id": 7,
    "name": "Rahul Kapoor",
    "category": "Career Coach",
    "bio": "Career strategist helping students and working professionals transition into technology and creative roles.",
    "rating": 4.7,
    "location": "Delhi, India"
  },
  {
    "id": 8,
    "name": "Sneha Iyer",
    "category": "Psychologist",
    "bio": "Cognitive behavioral therapist focusing on stress management and emotional wellness for young adults.",
    "rating": 4.9,
    "location": "Bangalore, India"
  },
  {
    "id": 9,
    "name": "Karan Deshmukh",
    "category": "Music",
    "bio": "Music producer and sound designer passionate about teaching electronic composition and live mixing.",
    "rating": 4.6,
    "location": "Mumbai, India"
  },
  {
    "id": 10,
    "name": "Priya Joshi",
    "category": "Art & Creativity",
    "bio": "Visual artist who helps learners express emotions through sketching, painting, and digital art.",
    "rating": 4.8,
    "location": "Goa, India"
  }
];

function generateInsight(expert: any, topic: string): string {
  const insights: Record<string, Record<string, string>> = {
    fitness: {
      Fitness: "Perfect match for comprehensive fitness transformation and home workout programs.",
      Nutrition: "Essential partner for fitness goals with personalized nutrition planning.",
      Yoga: "Great for building strength and flexibility through mindful movement.",
      "Life Coaching": "Helps build the mental discipline needed for fitness success."
    },
    nutrition: {
      Nutrition: "Expert in creating sustainable diet plans tailored to your lifestyle.",
      Fitness: "Combines exercise with nutrition for holistic wellness.",
      Yoga: "Promotes balanced nutrition through mindful eating practices."
    },
    yoga: {
      Yoga: "Ideal for learning traditional and modern yoga techniques.",
      Fitness: "Complements yoga with strength and cardio training.",
      "Life Coaching": "Enhances yoga practice with mindfulness and self-awareness."
    },
    "career growth": {
      "Career Coach": "Ideal for those exploring tech career transitions and professional development.",
      "Life Coaching": "Builds productivity and goal-setting skills for career advancement.",
      Psychologist: "Helps manage career stress and workplace challenges."
    },
    career: {
      "Career Coach": "Expert guidance for career transitions and professional growth.",
      "Life Coaching": "Develops leadership and productivity habits.",
      Psychologist: "Supports mental wellness in demanding professional environments."
    },
    astrology: {
      Astrology: "Provides personalized astrological insights for life decisions.",
      "Life Coaching": "Combines cosmic guidance with practical life strategies."
    },
    music: {
      Music: "Perfect for learning music production and sound design.",
      "Art & Creativity": "Combines musical and visual creativity.",
      Dance: "Integrates rhythm and movement for artistic expression."
    },
    dance: {
      Dance: "Master contemporary and classical dance forms.",
      Music: "Combines movement with musical understanding.",
      Fitness: "Dance-based fitness for fun and effective workouts."
    },
    art: {
      "Art & Creativity": "Explore various artistic mediums and creative expression.",
      Music: "Combines visual and auditory art forms.",
      Dance: "Express creativity through movement and choreography."
    },
    creativity: {
      "Art & Creativity": "Unlock your creative potential through various art forms.",
      Music: "Learn creative composition and sound design.",
      Dance: "Express yourself through creative movement."
    },
    psychology: {
      Psychologist: "Expert support for mental wellness and emotional health.",
      "Life Coaching": "Combines psychological insights with goal achievement.",
      Yoga: "Mind-body wellness through therapeutic yoga practices."
    },
    "mental health": {
      Psychologist: "Professional guidance for stress management and emotional wellness.",
      Yoga: "Therapeutic practices for mental clarity and peace.",
      "Life Coaching": "Build resilience and positive mental habits."
    },
    wellness: {
      Fitness: "Comprehensive approach to physical and mental wellness.",
      Yoga: "Holistic wellness through mind-body practices.",
      Nutrition: "Nutritional foundation for optimal health.",
      Psychologist: "Mental and emotional wellness support."
    },
    "life coaching": {
      "Life Coaching": "Transform your life with expert guidance and accountability.",
      "Career Coach": "Navigate life and career transitions successfully.",
      Psychologist: "Combine life goals with mental wellness strategies."
    }
  };

  const topicLower = topic.toLowerCase();
  
  if (insights[topicLower] && insights[topicLower][expert.category]) {
    return insights[topicLower][expert.category];
  }
  
  const defaultInsights: Record<string, string> = {
    Fitness: "Achieve your wellness goals with expert fitness guidance.",
    Nutrition: "Transform your health through personalized nutrition strategies.",
    Yoga: "Find balance and mindfulness through yoga practice.",
    Dance: "Express yourself through creative movement and dance.",
    Astrology: "Gain cosmic insights for life guidance and decisions.",
    "Career Coach": "Navigate your professional journey with expert support.",
    Psychologist: "Enhance your mental wellness and emotional health.",
    Music: "Develop your musical talents and creative expression.",
    "Art & Creativity": "Unleash your creative potential through art.",
    "Life Coaching": "Transform your life with personalized coaching."
  };

  return defaultInsights[expert.category] || "Expert guidance tailored to your needs.";
}

function findRelevantExperts(topic: string) {
  const topicLower = topic.toLowerCase();
  const keywords = topicLower.split(/\s+/);
  
  const scoredExperts = expertsData.map(expert => {
    let score = 0;
    const categoryLower = expert.category.toLowerCase();
    const bioLower = expert.bio.toLowerCase();
    
    keywords.forEach(keyword => {
      if (categoryLower.includes(keyword)) score += 10;
      if (bioLower.includes(keyword)) score += 5;
    });
    
    if (topicLower.includes(categoryLower) || categoryLower.includes(topicLower)) {
      score += 15;
    }
    
    return { ...expert, score };
  });
  
  const relevantExperts = scoredExperts
    .filter(e => e.score > 0)
    .sort((a, b) => b.score - a.score || b.rating - a.rating)
    .slice(0, 5);
  
  if (relevantExperts.length === 0) {
    return expertsData
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 5);
  }
  
  return relevantExperts;
}

Deno.serve(async (req: Request) => {
  try {
    if (req.method === "OPTIONS") {
      return new Response(null, {
        status: 200,
        headers: corsHeaders,
      });
    }

    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "Method not allowed" }),
        {
          status: 405,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const { topic } = await req.json();

    if (!topic || typeof topic !== "string") {
      return new Response(
        JSON.stringify({ error: "Invalid topic provided" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const relevantExperts = findRelevantExperts(topic);
    
    const expertsWithInsights = relevantExperts.map(expert => ({
      name: expert.name,
      category: expert.category,
      bio: expert.bio,
      rating: expert.rating,
      location: expert.location,
      insight: generateInsight(expert, topic)
    }));

    return new Response(
      JSON.stringify({ experts: expertsWithInsights }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});